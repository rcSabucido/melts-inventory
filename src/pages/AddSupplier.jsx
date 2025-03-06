import { useState } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import SupplierInput from '../components/SupplierInput.jsx';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';

const AddSupplierPage = () => {
  return (
  <>
    <div className="flex">
    <Sidebar />
    <main className="flex-col p-4 bg-amber-100 w-full">
      <button className="p-4 text-2xl font-bold text-gray-800 flex items-center">
          <ArrowLongLeftIcon className='h-6 w-6 mx-4'/>
          Add Supplier
      </button>
      <SupplierInput className="shadow-[-4px_4px_4px_#888888]" />
    </main>
    </div>
  </>
  );
}

export default AddSupplierPage;