import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

import Button from '../components/Button.jsx';
import ConfirmationModal from '../components/ConfirmationModal.jsx';
import Sidebar from '../components/Sidebar.jsx';
import SupplierInput from '../components/SupplierInput.jsx';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_ANON_KEY)

const SupplierDetailPage = () => {
  const [leaveModal, setLeaveModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState(location.state?.supplierData || {});

  const addContact = async (type, text, supplier_id) => {
    let result = await supabase
      .from('Contact')
      .insert({
        contact_type: type,
        contact_text: text
      })
      .select()

    let contact_id = result["data"][0]["contact_id"]

    await supabase
      .from('SupplierContact')
      .insert({
        contact_id,
        supplier_id
      })
      .select()
  }

  const addSupplier = async () => {
    let result = await supabase
      .from('Supplier')
      .insert({
          company_name: formData["companyName"],
          street: formData["street"],
          location_id: formData["location_id"]
      })
      .select()
    let supplier_id = result["data"][0]["supplier_id"]

    if (formData.email && formData.email.trim()) {
      addContact("EMAIL", formData.email, supplier_id)
    }
    if (formData.contactNumber && formData.contactNumber.trim()) {
      await addContact("PHONE", formData.contactNumber, supplier_id)
    }

    navigate("/supplier");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((!formData.email || !formData.email.trim()) && (!formData.contactNumber || !formData.contactNumber)) {
      alert("For a supplier, you must at least input an e-mail or contact number.")
    }
    console.log(`Is updating? ${isUpdating}`)
    console.log(formData);

    if (isUpdating) {

    } else {
      await addSupplier()
    }
  };

  const clearForm = () => {
    document.querySelectorAll('input').forEach(e => {
      e.value = ""
    });
    setFormData({
        companyName: '',
        contactNumber: '',
        email: '',
        location_id: ''
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
      <SupplierInput className="shadow-[-4px_4px_4px_#888888]" formData={formData} setFormData={setFormData} isUpdating={isUpdating} />

      <div className="flex flex-row justify-end">
        <button type="button" onClick={clearForm} className="font-bold rounded-lg text-sm text-orange-400/70 mb-2 px-4">
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