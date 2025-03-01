import { useState } from 'react';
import Button from '../components/Button.jsx';
import { PlusIcon } from '@heroicons/react/24/solid';
import Sidebar from '../components/Sidebar.jsx';
import SearchBar from '../components/SearchBar.jsx';
import InventoryTable from "../components/InventoryTable.jsx";
import AddItems from '../components/AddItemsModal.jsx';
import NearExpiryTable from "../components/NearExpiry.jsx";


const InventoryPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="p-4 bg-amber-100 w-full">
        <div className='mx-5 my-3 flex justify-end gap-2'>
        <SearchBar />
            <Button onClick={() => setShowModal(true)}>
              <PlusIcon className='h-6 w-6'/>
              Add Item
              </Button>
          </div>
        <div className="m-8 p-4 bg-amber-200/30 rounded-xl shadow-[-4px_4px_4px_#888888]">
              <div className="p-4 text-2xl font-bold text-gray-800">
                <a href="#">Inventory</a>
              </div>
            <InventoryTable/>
         </div>
         <div className="m-8 p-4 bg-amber-200/30 rounded-xl shadow-[-4px_4px_4px_#888888]">
            <nav className="flex flex-row">
              <div className="p-4 text-2xl font-bold text-gray-800">
                <a href="#">Neary Expiry</a>
              </div>
            </nav>
           <NearExpiryTable/>
            </div>
        </main>
      </div>
      {showModal && <AddItems onClose={() => setShowModal(false)} />}

    </>
  );
}

export default InventoryPage;