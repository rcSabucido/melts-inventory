import { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

import Button from '../components/Button.jsx';
import Sidebar from '../components/Sidebar.jsx';
import ModifiableTable from '../components/ModifiableTable.jsx';
import ConfirmationModal from '../components/ConfirmationModal.jsx';
import { PlusIcon } from '@heroicons/react/24/solid';

const SupplierPage = () => {
  let navigate = useNavigate();

  const columns = ['Company Name', 'Email', 'Contact Number', 'Street', 'Barangay', 'District', 'City', 'Province'];
  const tableData = [
      {
          'Company Name': 'Eimma H. Acker Confectionary Company',
          'Email': 'eimma.acker@example.com',
          'Contact Number': '099132384782',
          'Street': '###',
          'Barangay': '###',
          'District': '###',
          'City': '###',
          'Province': '###'
      },
      {
          'Company Name': 'Beau Rica Acker Desserts',
          'Email': 'beau.rica@example.com',
          'Contact Number': '096925624552',
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

  function camelCase (data, delim = ' ') {
    const list = Array.isArray(data) ? data : data.toLowerCase().split(delim)
    return list.reduce((res, cur) => res + cur.charAt(0)
      .toUpperCase() + cur.slice(1)
    )
  }

  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-col p-4 bg-amber-100 w-full">
          <div>
            <p className='px-4 pt-4 text-xl font-bold'>Suppliers</p>
            <ModifiableTable
              onEditClick={(row) => {
                let editQuery = {};
                for (const [key, value] of Object.entries(row)) {
                  editQuery[camelCase(key)] = value;
                }
                navigate("/supplier_detail", {
                  state: {
                    supplierData: editQuery
                  }
                })
              }}
              onDeleteClick={(row) => {
                setDeleteRow(row)
                setDeleteModal(true)
              }}
              columns={columns}
              data={tableData}
              className="shadow-[-4px_4px_4px_#888888]" />
          </div>
          <div className='mx-5 my-3 flex justify-start gap-2'>
            <a href="/supplier_detail">
              <Button>
                <PlusIcon className='h-6 w-6'/>
                Add Supplier
              </Button>
            </a>
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
          setDeleteModal(false)
        }}
        onNo={() => setDeleteModal(false)}
      />}
    </>
  );
}

export default SupplierPage;