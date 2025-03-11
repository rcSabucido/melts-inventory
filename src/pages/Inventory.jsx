import { useState, useEffect } from 'react';
import Button from '../components/Button.jsx';
import { PlusIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/solid';
import Sidebar from '../components/Sidebar.jsx';
import SearchBar from '../components/SearchBar.jsx';
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
  const [data, setData] = useState([]);
  const supabase =  createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_ANON_KEY);

  useEffect(() => {
    async function fetch() {
      const { data, error } = await supabase
      .from('InventoryFull')
      .select()

      let displayData = [];
      for (let i = 0; i < data.length; i++) {
        let raw = data[i];
        let displayObj = {
          'Products': raw["product_name"],
          'Items': raw["quantity"],
          'Category': raw["category_name"],
          'Price': raw["price"]
        }
        displayData.push(displayObj);
      }
      setData(displayData);
    }
    fetch();
  }, [])

  const columns = ['Products', 'Items', 'Category', 'Price'];
  
  const products = ['Products', 'Items', 'Category', 'Days Left'];
  const ExpiryData = [
      {
          'Products': 'Pat',
          'Items': 25,
          'Category': 'Pat Black',
          'Days Left': 450
      },
      {
          'Products': 'Angel Jones',
          'Items': 66,
          'Category': 'Pat Black',
          'Days Left': 325
      },
      {
          'Products': 'Max Edwards',
          'Items': 3,
          'Category': 'Pat Black',
          'Days Left': 25
      },
      {
          'Products': 'Bruce Fox',
          'Items': 120,
          'Category': 'Pat Black',
          'Days Left': 1500
      },
      {
          'Products': 'Devon Fisher',
          'Items': 15,
          'Category': 'Pat Black',
          'Days Left': 999.00
      },
      {
        'Products': 'Devon Fisher',
        'Items': 15,
        'Category': 'Pat Black',
        'Days Left': 999.00
      },
      {
        'Products': 'Devon Fisher',
        'Items': 15,
        'Category': 'Pat Black',
        'Days Left': 999.00
      },
      {
        'Products': 'Devon Fisher',
        'Items': 15,
        'Category': 'Pat Black',
        'Days Left': 999.00
      },
      {
        'Products': 'Devon Fisher',
        'Items': 15,
        'Category': 'Pat Black',
        'Days Left': 999.00
      },
  ];
  
  const limitedExpiryData = ExpiryData.slice(0, 4);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="p3z-4 bg-amber-100 w-full">
        <div className='mx-5 my-3 flex justify-end gap-2'>
        <SearchBar />
            <Button onClick={() => setShowModal(true)}>
              <PlusIcon className='h-6 w-6'/>
              Add Item
              </Button>
          </div>
        <div className="m-8 p-4 bg-amber-200/30 rounded-xl shadow-[-4px_4px_4px_#888888]">
              <div className='flex justify-between'>
              <p className="p-4 text-2xl font-bold text-gray-800">Inventory</p>
              <ArrowsPointingOutIcon className='h-6 w-6 mr-6 mt-4 cursor-pointer' onClick={() => setShowInventoryDetails(true)}/>
         </div>
         <InventoryTable columns={columns} data={data} />
         </div>
         <div className="m-8 p-4 bg-amber-200/30 rounded-xl shadow-[-4px_4px_4px_#888888]">
            <div className='flex justify-between'>
            <p className="p-4 text-2xl font-bold text-gray-800">Near Expiry</p>
            {ExpiryData.length >= 4 && (
              <ArrowsPointingOutIcon className='h-6 w-6 mr-6 mt-4 cursor-pointer' onClick={() => setShowNearExpiryTable(true)}/>
            )} 
            </div> 
            <NearExpiryTable columns={products} data={limitedExpiryData}/>
          </div>
        </main>
      </div>
      {showAddItemsModal && <AddItems onClose={() => setShowModal(false)} />}
      {showNearExpiryTable && <NearExpiryTableModal columns={products} data={ExpiryData} onClose={() => setShowNearExpiryTable(false)} />}
      {showInventoryDetails && <InventoryDetailsModal columns={columns} data={data} onClose={() => setShowInventoryDetails(false)} />}
    </>
  );
}

export default InventoryPage;