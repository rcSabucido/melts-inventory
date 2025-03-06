import { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import Button from '../components/Button.jsx';
import ConfirmationModal from '../components/ConfirmationModal.jsx';
import Sidebar from '../components/Sidebar.jsx';
import SupplierInput from '../components/SupplierInput.jsx';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';

const AddSupplierPage = () => {
  const [leaveModal, setLeaveModal] = useState(false);
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
      companyName: '',
      contactNumber: '',
      email: '',
      province: '',
      city: '',
      district: '',
      barangay: '',
      street: ''
  });

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      navigate("/supplier");
  };

  const clearForm = () => {
    document.querySelectorAll('input').forEach(e => {
      e.value = ""
    });
  };

  return (
  <>
    <div className="flex">
    <Sidebar />
    <form className="flex-col p-4 bg-amber-100 w-full" onSubmit={handleSubmit}>
      <button type="button" className="p-4 text-2xl font-bold text-gray-800 flex items-center" onClick={() => setLeaveModal(true)}>
          <ArrowLongLeftIcon className='h-6 w-6 mx-4'/>
          Add Supplier
      </button>
      <SupplierInput className="shadow-[-4px_4px_4px_#888888]" formData={formData} setFormData={setFormData} />

      <div className="flex flex-row justify-end">
        <button type="button" onClick={() => clearForm()} className="font-bold rounded-lg text-sm text-orange-400/70 mb-2 px-4">
            Clear
        </button>
        <Button type="submit">
            Save
        </Button>
      </div>
    </form>
    </div>
    {leaveModal && <ConfirmationModal
      noButton="Cancel"
      yesButton="Leave"
      message="You have unsaved changes. Are you sure you want to leave this page?"
      onYes={() => navigate("/supplier")}
      onNo={() => setLeaveModal(false)}
    />}
  </>
  );
}

export default AddSupplierPage;