import { useState } from 'react';
import Button from '../components/Button.jsx';
import { PlusIcon, ArrowLeftIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import Sidebar from '../components/Sidebar.jsx';
import SearchBar from '../components/SearchBar.jsx';
import InventoryTable from "../components/InventoryTable.jsx";
import AddItems from '../components/AddItemsModal.jsx';


const InventoryDetails = () => {
  const [showAddItemsModal, setShowModal] = useState(false);
  const columns = ['Products', 'Items', 'Category', 'Price'];
  const TableData = [
      {
          'Products': 'Pat Black',
          'Items': 25,
          'Category': 'Pat Black',
           Price: 450
      },
      {
          'Products': 'Angel Jones',
          'Items': 66,
          'Category': 'Pat Black',
           Price: 325
      },
      {
          'Products': 'Max Edwards',
          'Items': 3,
          'Category': 'Pat Black',
           Price: 25
      },
      {
          'Products': 'Bruce Fox',
          'Items': 120,
          'Category': 'Pat Black',
           Price: 1500
      },
      {
        'Products': 'Devon Fisher',
        'Items': 15,
        'Category': 'Pat Black',
         Price: 999.00
      },
      
  ];

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
              <div className='flex gap-4 p-4 items-center'>
              <a href='/inventory'><ArrowLeftIcon className="h-6 w-6" /></a>
              <p className="text-2xl font-bold">Inventory Details</p>
         </div>
         <InventoryTable columns={columns} data={TableData} />
         </div>
        </main>
      </div>
      {showAddItemsModal && <AddItems onClose={() => setShowModal(false)} />}
    </>
  );
}

export default InventoryDetails;