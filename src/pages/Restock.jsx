import { useState, useRef, useEffect } from 'react';
import Button from '../components/Button.jsx';
import Sidebar from '../components/Sidebar.jsx';
import RestockTable from '../components/RestockTable.jsx';
import AddStockModal from '../components/AddStockModal.jsx';
import FilterStock from '../components/FilterStock.jsx';
import { FunnelIcon, PlusIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/solid';


const RestockPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const filterRef = useRef(null);
    const columns = ['Product', 'Category', 'Added Items', 'Supplier', 'Expiry Date'];
    const tableData = [
        {
            'Product': 'Adam Smasher',
            'Category': 'Drinks',
            'Added Items': 13,
            'Supplier': 'Melts Inc.',
            'Expiry Date': '2026-02-19'
        },
        {
            'Product': 'Biryani',
            'Category': 'Food',
            'Added Items': 20,
            'Supplier': 'Melts Inc.',
            'Expiry Date': '2026-02-19'
        },
        {
            'Product': 'David Martinez',
            'Category': 'Drinks',
            'Added Items': 19,
            'Supplier': 'Melts Inc.',
            'Expiry Date': '2026-02-19'
        }
    ];

    useEffect(() => {
      const handleClickOutside = (e) => {
        if (filterRef.current && !filterRef.current.contains(e.target)) {
          setShowFilter(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [filterRef]);
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-col p-4 bg-amber-100 w-full">
          <div className='relative mx-5 my-3 flex justify-end gap-2'>
            <Button onClick={() => setShowFilter(!showFilter)}>
              <FunnelIcon className='h-6 w-6' />
              </Button>
              {showFilter && (
              <div ref={filterRef} className="absolute right-60 mt-5 z-50">
                <FilterStock />
              </div>
            )}
            <Button onClick={() => setShowModal(true)}>
              <PlusIcon className='h-6 w-6'/>
              Add Stock
              </Button>
          </div>
          <div className='mx-7 w-auto h-70 bg-amber-200/30 rounded-xl'>
            <div className='flex justify-between'>
            <p className='px-4 pt-4 text-xl font-bold'>February 20, 2025</p>
            <ArrowsPointingOutIcon className='h-6 w-6 mr-6 mt-4'/>
            </div> 
            <RestockTable columns={columns} data={tableData} />
          </div>
        </main>
      </div>
      {showModal && <AddStockModal onClose={() => setShowModal(false)} />}  
    </>
  );
}

export default RestockPage;