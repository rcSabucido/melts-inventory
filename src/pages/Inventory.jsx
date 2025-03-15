import { useState, useEffect } from 'react';
import Button from '../components/Button.jsx';
import { PlusIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/solid';
import Sidebar from '../components/Sidebar.jsx';
import InventoryTable from "../components/InventoryTable.jsx";
import InventoryDetailsModal from '../components/InventoryDetailsModal.jsx';
import NearExpiryTable from "../components/NearExpiry.jsx";
import NearExpiryTableModal from '../components/NearExpiryTableModal.jsx';
import AddItems from '../components/AddItemsModal.jsx';
import { createClient } from '@supabase/supabase-js';

const InventoryPage = () => {
  const [showAddItemsModal, setShowModal] = useState(false);
  const [showNearExpiryTable, setShowNearExpiryTable] = useState(false);
  const [showInventoryDetails, setShowInventoryDetails] = useState(false);
  const [inventoryData, setInventoryData] = useState([]);
  const [nearExpiryData, setNearExpiryData] = useState([]); 
  const supabase =  createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_ANON_KEY);

  const refreshData = async () => {
    const { data, error } = await supabase
      .from('InventoryFull')
      .select()
      .eq('is_active', true)

    if (data) {
      let displayData = data.map(raw => ({
        'Products': raw["product_name"],
        'Items': raw["quantity"],
        'Category': raw["category_name"],
        'Price': raw["price"],
        'product_id': raw["product_id"]
      }));
      setInventoryData(displayData);
    }
  
    const { data: nearExpiryData, error: nearExpiryError } = await supabase
      .from('NearExpiryFull')
      .select()
      .eq('is_active', true)
    
    if (nearExpiryData) {
      let displayData = nearExpiryData
      .filter(raw => (raw["days_left"] !== null) && (raw["days_left"] <= 45))
      .map(raw => ({
        'Products': raw["product_name"],
        'Items': raw["quantity"],
        'Category': raw["category_name"],
        'Days Left': raw["days_left"]
      }));
      setNearExpiryData(displayData);
    }
  }
  
  useEffect(() => {
    refreshData();
  }, [])

  const columns = ['Products', 'Items', 'Category', 'Price'];
  
  const products = ['Products', 'Items', 'Category', 'Days Left'];

  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-col p-4 bg-[#ffffdb] w-full">
        <div className='mx-7 my-2 flex justify-end gap-2'>
            <Button onClick={() => setShowModal(true)}>
              <PlusIcon className='h-6 w-6'/>
              Add Item
              </Button>
          </div>
        <div className="m-8 p-4 bg-amber-200/30 rounded-xl shadow-[-4px_4px_4px_#888888]">
              <div className='flex justify-between'>
              <p className="p-4 text-2xl font-bold text-gray-800">Inventory</p>
              {inventoryData.length >= 4 && (
                <ArrowsPointingOutIcon className='h-6 w-6 mr-6 mt-4 cursor-pointer' onClick={() => setShowInventoryDetails(true)}/>
              )}
         </div>
         <InventoryTable columns={columns} data={inventoryData.slice(0, 4)} refreshData={refreshData} />
         </div>
         <div className="m-8 p-4 bg-amber-200/30 rounded-xl shadow-[-4px_4px_4px_#888888]">
            <div className='flex justify-between'>
            <p className="p-4 text-2xl font-bold text-gray-800">Near Expiry</p>
            {nearExpiryData.length >= 4 && (
              <ArrowsPointingOutIcon className='h-6 w-6 mr-6 mt-4 cursor-pointer' onClick={() => setShowNearExpiryTable(true)}/>
            )} 
            </div> 
            <NearExpiryTable columns={products} data={nearExpiryData.slice(0, 4)}/>
          </div>
        </main>
      </div>
      {showAddItemsModal && <AddItems onClose={() => setShowModal(false)} refreshData={refreshData} />}
      {showNearExpiryTable && <NearExpiryTableModal columns={products} data={nearExpiryData} onClose={() => setShowNearExpiryTable(false)} />}
      {showInventoryDetails && <InventoryDetailsModal columns={columns} data={inventoryData} refreshData={refreshData} onClose={() => setShowInventoryDetails(false)} />}
    </>
  );
}

export default InventoryPage;