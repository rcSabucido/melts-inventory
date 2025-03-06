import { useState } from 'react';

import Button from '../components/Button.jsx';
import Sidebar from '../components/Sidebar.jsx';
import ModifiableTable from '../components/ModifiableTable.jsx';
import ConfirmationModal from '../components/ConfirmationModal.jsx';
import { PlusIcon } from '@heroicons/react/24/solid';

const SupplierPage = () => {
  const columns = ['Name', 'Email', 'Contact Number', 'Street', 'Barangay', 'District', 'City', 'Province'];
  const tableData = [
      {
          'Name': 'Eimma H. Acker',
          'Email': 'eimma.acker@example.com',
          'Contact Number': '099132384782',
          'Street': '###',
          'Barangay': '###',
          'District': '###',
          'City': '###',
          'Province': '###'
      }
  ];

  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteRow, setDeleteRow] = useState(null);

  const deleteSupplier = () => {
    console.log(`Deleting supplier: `)
    console.log(deleteRow)
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-col p-4 bg-amber-100 w-full">
          <div className='mx-5 my-3 flex justify-end gap-2'>
            <a href="/add_supplier">
              <Button>
                <PlusIcon className='h-6 w-6'/>
                Add Supplier
              </Button>
            </a>
          </div>
          <div>
            <p className='px-4 pt-4 text-xl font-bold'>Suppliers</p>
            <ModifiableTable
              onEditClick={() => console.log("Edit Supplier")}
              onDeleteClick={(row) => {
                setDeleteRow(row)
                setDeleteModal(true)
              }}
              columns={columns}
              data={tableData}
              className="shadow-[-4px_4px_4px_#888888]" />
          </div>
        </main>
      </div>
      {deleteModal && <ConfirmationModal
        noButton="Cancel"
        yesButton="Delete"
        message="Are you sure you want to delete this supplier's information?"
        onYes={() => {
          deleteSupplier()
          setDeleteRow(null)
        }}
        onNo={() => setDeleteModal(false)}
      />}
    </>
  );
}

export default SupplierPage;