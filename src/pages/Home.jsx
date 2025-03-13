import { useState, useEffect } from 'react';
import ArrowsPointingOutIcon from '@heroicons/react/24/outline/ArrowsPointingOutIcon';
import Sidebar from '../components/Sidebar.jsx';
import BarChart from "../components/BarChart.jsx";
import LowStockTable from "../components/LowStockTable.jsx";
import LowStockDetails from '../components/LowStockDetailsModal.jsx';
import { createClient } from '@supabase/supabase-js';

const HomePage = () => {
  const [showStockDetails, setShowStockDetails] = useState(false);
  const [StockData, setStockDetails] = useState([]);
  const supabase =  createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_ANON_KEY);

  const refreshData = async () => {
    const { data: StockData, error: StockDataError } = await supabase
      .from('LowStockFull')
      .select()
      //.eq('is_active', true)
    
    if (StockData) {
      let displayData = StockData
      .map(raw => ({
        'Products': raw["product_name"],
        'Items': raw["quantity"],
      }));
      setStockDetails(displayData);
    }
  }
       

useEffect(() => {
    refreshData();
  }, [])

  const columns = ['Products', ' ', ' ',  ' ', ' ', ' ',' ',' ','Items'];

  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="bg-amber-100 w-full">
          <div className="m-8 p-2 bg-amber-200/30 rounded-xl shadow-[-4px_4px_4px_#888888]">
            <nav className="flex flex-row">
              <div className="p-4 text-gray-800">
                <a href="#">Sales of the Week</a>
                <div className="border-2 border-black border-solid w-1/4 rounded-xl mx-auto mt-2 border-gray-800"></div>
              </div>
              <div className="p-4 text-gray-800">
                <a href="#">Sales of the Month</a>
              </div>
            </nav>
            <BarChart />
          </div>
          <div className="m-8 p-4 bg-amber-200/30 rounded-xl shadow-[-4px_4px_4px_#888888]">
            <div className='flex justify-between'>
                <p className='p-2  text-gray-800'>Low Stock</p>
                <div className="border-solid w-1/4 rounded-xl mx-auto mt-2 border-gray-800"></div>
                {StockData.length >= 4 && (
                <ArrowsPointingOutIcon className='h-6 w-6 mr-6 mt-4 cursor-pointer' onClick={() => setShowStockDetails(true)}/>
                )}
              </div>
            <LowStockTable columns={columns} data={StockData.slice(0, 4)}/>
          </div>
        </main>
      </div>
      {showStockDetails && <LowStockDetails columns={columns} data={StockData} onClose={() => setShowStockDetails(false)} />}
    </>
  );
}

export default HomePage;