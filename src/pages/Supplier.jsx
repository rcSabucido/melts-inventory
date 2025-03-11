import { useState, useEffect } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

import Button from '../components/Button.jsx';
import Sidebar from '../components/Sidebar.jsx';
import ModifiableTable from '../components/ModifiableTable.jsx';
import ConfirmationModal from '../components/ConfirmationModal.jsx';
import { PlusIcon } from '@heroicons/react/24/solid';

import { createClient } from '@supabase/supabase-js'

import { getAddressFromId } from '../helpers/PsgcLocationLookup.js';

const SupplierPage = () => {
  let navigate = useNavigate();
  const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_ANON_KEY)
  const [data, setData] = useState([]);

  useEffect(() => {
      async function fetch() {
        const { data, error } = await supabase
        .from('SupplierFull')
        .select()

        let displayData = []
        for (let i = 0; i < data.length; i++) {
          let raw = data[i]
          console.log(raw)

          const address = raw["street"] ? raw["street"] + ", " + getAddressFromId(raw["location_id"]) : getAddressFromId(raw["location_id"])
          let displayObj = {
            'Company Name': raw["company_name"],
            'Address': address,
          }
          let contacts = raw["contacts"]
          for (let j = 0; j < contacts.length; j++) {
            let contact = contacts[j]
            if (contact.type === "PHONE") {
              displayObj["Contact Number"] = contact["text"]
            } else if (contact.type === "EMAIL") {
              displayObj["Email"] = contact["text"]
            }
          }
          displayData.push(displayObj)
        }

        setData(displayData)
      }
      fetch();
    }, [])
  const columns = ['Company Name', 'Email', 'Contact Number', 'Address'];

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
            <div className='w-auto mx-5 my-3 flex gap-2 justify-between'>
              <p className='px-4 pt-4 text-xl'>Suppliers</p>
              <a href="/supplier_detail" className="">
                <Button>
                  <PlusIcon className='h-6 w-6'/>
                  Add Supplier
                </Button>
              </a>
            </div>
            {
              (data.length == 0) ?
              (
                <div className="justify-center">
                  <p className="text-xl">Loading table</p>
                </div>
              )
              : (
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
                  data={data}
                  className="shadow-[-4px_4px_4px_#888888]" />
              )
            }
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