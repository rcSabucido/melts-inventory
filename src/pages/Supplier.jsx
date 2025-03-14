import { useState, useEffect } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

import Button from '../components/Button.jsx';
import Sidebar from '../components/Sidebar.jsx';
import ModifiableTable from '../components/ModifiableTable.jsx';
import ConfirmationModal from '../components/ConfirmationModal.jsx';
import { PlusIcon } from '@heroicons/react/24/solid';

import { createClient } from '@supabase/supabase-js'

import { getAddressFromId, padDigits } from '../helpers/PsgcLocationLookup.js';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_ANON_KEY)

const SupplierPage = () => {
  let navigate = useNavigate();
  const [fetchData, setFetchData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  const pageLength = 10;

  const fetchSuppliers = (start) => {
    if (start === undefined) { start = 0 }
    supabase
      .from('Supplier')
      .select('*', { count: 'exact', head: true })
      .eq('is_active', true)
      .then((result) => {

      console.log(`New count: ${result.count}`)
      if (start >= result.count) {
        start = Math.max(0, (Math.floor(result.count / pageLength) - 1) * pageLength)
        console.log(`New start: ${start}`)
        setStartIndex(start)
      }
      setEndIndex(result.count)

      supabase
      .from('SupplierFull')
      .select("*")
      .range(start, Math.min(start + pageLength - 1, result.count))
      .order("supplier_id", { ascending: false })
      .then((result) => {

      const data = result.data
      setFetchData(data)

      let displayData = []
      for (let i = 0; i < data.length; i++) {
        let raw = data[i]
        //console.log(raw)

        let address = raw["street"] ? raw["street"] + (raw["location_id"] ? ", " : "") : ""
        address += raw["location_id"] ? getAddressFromId(raw["location_id"]) : ""
        let displayObj = {
          'Company Name': raw["company_name"],
          'Address': address,
          'supplier_id': raw["supplier_id"]
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

      setDisplayData(displayData)
      })
    })
  }

  useEffect(fetchSuppliers, [])
  const columns = ['Company Name', 'Email', 'Contact Number', 'Address'];

  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteRow, setDeleteRow] = useState(null);

  const deleteSupplier = () => {
    let [index, _] = deleteRow
    console.log(`Deleting supplier [${index}]:`)
    console.log(fetchData[index])

    supabase 
      .from('Supplier')
      .update({ is_active: false })
      .eq('supplier_id', fetchData[index]["supplier_id"])
      .then(() => {
        console.log(`startIndex: ${startIndex}`)

        setDeleteRow(null)
        setDeleteModal(false)
        fetchSuppliers(startIndex)
    })
  };

  const camelCase = (data, delim = " ") => {
    const list = Array.isArray(data) ? data : data.toLowerCase().split(delim)
    return list.reduce((res, cur) => res + cur.charAt(0)
      .toUpperCase() + cur.slice(1)
    )
  }

  const nextPage = () => {
    let next = Math.min(startIndex + pageLength, endIndex)
    setStartIndex(next)
    fetchSuppliers(next)
  }

  const previousPage = () => {
    let prev = Math.max(startIndex - pageLength, 0)
    setStartIndex(prev)
    fetchSuppliers(prev)
  }

  const paginationSection = () => {
    let hasPrevious = startIndex > 0
    let hasNext = endIndex > 0 && startIndex + pageLength < endIndex
    return (
      <div className="place-self-center">
        {
          (hasPrevious ? (<button type="button" className="cursor-pointer" onClick={previousPage}>Previous</button>) : null)
        }
        {
          (hasPrevious && hasNext ? ( <span className="px-3">|</span> ) : null)
        }
        {
          (hasNext ?
            (<button type="button" className="cursor-pointer" onClick={nextPage}>Next</button>) : null)
        }
      </div>
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
              <Button onClick={() => navigate("/supplier_detail")}>
                <PlusIcon className='h-6 w-6'/>
                Add Supplier
              </Button>
            </div>
            {
              (displayData.length > 0) ? (paginationSection()) : null
            }
            {
              (displayData.length == 0) ?
              (
                <div className="place-self-center">
                  <p className="text-xl">Loading table</p>
                </div>
              )
              : (
                <ModifiableTable
                  onEditClick={(data) => {
                    let editQuery = {};
                    for (const [key, value] of Object.entries(data.row)) {
                      editQuery[camelCase(key)] = value;
                    }
                    editQuery["location_id"] = padDigits(fetchData[data.index]["location_id"])
                    editQuery["street"] = fetchData[data.index]["street"]
                    navigate("/supplier_detail", {
                      state: {
                        supplierData: editQuery
                      }
                    })
                  }}
                  onDeleteClick={(data) => {
                    setDeleteRow([data.index, data.row])
                    setDeleteModal(true)
                  }}
                  columns={columns}
                  data={displayData}
                  className="shadow-[-4px_4px_4px_#888888]"
                  orderBy="supplier_id"
                  descending={true}
                  returnIndex={true} />
              )
            }
            {
              (displayData.length > 0) ? (paginationSection()) : null
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
        }}
        onNo={() => setDeleteModal(false)}
      />}
    </>
  );
}

export default SupplierPage;