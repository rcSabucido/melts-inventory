import { useState, useRef, useEffect } from 'react';

import Button from '../components/Button.jsx';
import ConfirmationModal from '../components/ConfirmationModal.jsx';
import Sidebar from '../components/Sidebar.jsx';
import SupplierInput from '../components/SupplierInput.jsx';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';

const AddSupplierPage = () => {
  const [leaveModal, setLeaveModal] = useState(false);

  return (
  <>
    <div className="flex">
    <Sidebar />
    <main className="flex-col p-4 bg-amber-100 w-full">
      <button className="p-4 text-2xl font-bold text-gray-800 flex items-center" onClick={() => setLeaveModal(true)}>
          <ArrowLongLeftIcon className='h-6 w-6 mx-4'/>
          Add Supplier
      </button>
      <SupplierInput className="shadow-[-4px_4px_4px_#888888]" />

      <div className="flex flex-row justify-end">
        <button onClick={() => { console.log("Clear") } } className="font-bold rounded-lg text-sm text-orange-400/70 mb-2 px-4">
            Clear
        </button>
        <Button onClick={() => { console.log("Save") } }>
            Save
        </Button>
      </div>
    </main>
    </div>
    {leaveModal && <ConfirmationModal onClose={() => setLeaveModal(false)} />}
  </>
  );
}

export default AddSupplierPage;