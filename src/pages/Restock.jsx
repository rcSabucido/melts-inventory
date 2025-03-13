import { useState, useRef, useEffect } from 'react';
import Button from '../components/Button.jsx';
import Sidebar from '../components/Sidebar.jsx';
import RestockTable from '../components/RestockTable.jsx';
import RestockDateGroup from '../components/RestockDateGroup.jsx';
import AddStockModal from '../components/AddStockModal.jsx';
import FilterStock from '../components/FilterStock.jsx';
import FullTableModal from '../components/FullTableModal.jsx';
import { FunnelIcon, PlusIcon } from '@heroicons/react/24/solid';
import { createClient } from '@supabase/supabase-js';


const RestockPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [showFullTable, setShowFullTable] = useState(false);
    const [selectedGroupData, setSelectedGroupData] = useState(null);
    const [restockGroups, setRestockGroups] = useState([]);
    const filterRef = useRef(null);
    const columns = ['Product', 'Category', 'Added Items', 'Supplier', 'Expiry Date'];
    const supabase =  createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_ANON_KEY);

    const refreshData = async () => {
      const { data, error } = await supabase
        .from('RestockFull')
        .select()
        .order('restock_date', { ascending: false })
      
        if (data) {
          const groups = data.reduce((acc, item) => {
            const date = new Date(item.restock_date).toLocaleDateString();
            if (!acc[date]) {
              acc[date] = [];
            }
            acc[date].push(item);
            return acc;
          }, {});
          setRestockGroups(Object.entries(groups).map(([date, items]) => ({
            date,
            data: items
          })));
        }
    }

    useEffect(() => {
      refreshData();
    }, []);

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

    const handleExpandGroup = (date, data) => {
      setSelectedGroupData({ date, data });
      setShowFullTable(true);
    }

    console.log(restockGroups);
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

          {restockGroups.map(group => (
            <RestockDateGroup 
              key={group.date}
              date={group.date}
              data={group.data}
              columns={columns}
              onExpand={handleExpandGroup}
            />
          ))}
        </main>
      </div>
      {showModal && <AddStockModal onClose={() => setShowModal(false)} />}
      {showFullTable && selectedGroupData && (
        <FullTableModal 
          columns={columns} 
          data={selectedGroupData.data} 
          onClose={() => {
            setShowFullTable(false);
            setSelectedGroupData(null);
          }} 
        />
      )}  
    </>
  );
}

export default RestockPage;