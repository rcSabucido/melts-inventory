import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

import Button from '../components/Button.jsx';
import ConfirmationModal from '../components/ConfirmationModal.jsx';
import Sidebar from '../components/Sidebar.jsx';
import SupplierInput from '../components/SupplierInput.jsx';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';

const SupplierDetailPage = () => {
  const [leaveModal, setLeaveModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState(location.state?.supplierData || {});

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      navigate("/supplier");
  };

  const clearForm = () => {
    document.querySelectorAll('input').forEach(e => {
      e.value = ""
    });
    setFormData({
        companyName: '',
        contactNumber: '',
        email: '',
        province: '',
        city: '',
        district: '',
        barangay: '',
        street: ''
    });
  };

  let headerText;
  let isUpdating = false
  if (location.state?.supplierData !== undefined) {
    headerText = "Edit Supplier"
    isUpdating = true
  } else {
    headerText = "Add Supplier"
  }

  return (
  <>
    <div className="flex">
    <Sidebar />
    <form className="flex-col p-4 bg-amber-100 w-full" onSubmit={handleSubmit}>
      <span className="p-4 text-2xl font-bold text-gray-800 flex items-center">
          <ArrowLongLeftIcon className='h-6 w-6 mx-4' onClick={() => setLeaveModal(true)}/>
          {headerText}
      </span>
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

export default SupplierDetailPage;