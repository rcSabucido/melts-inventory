import { useState, useEffect } from 'react';
import ArrowsPointingOutIcon from '@heroicons/react/24/outline/ArrowsPointingOutIcon';
import Sidebar from '../components/Sidebar.jsx';
import SalesBarChart from "../components/SalesBarChart.jsx";
import LowStockTable from "../components/LowStockTable.jsx";
import LowStockDetails from '../components/LowStockDetailsModal.jsx';
import { createClient } from '@supabase/supabase-js';

const supabase =  createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_ANON_KEY);

const HomePage = () => {
  const [showStockDetails, setShowStockDetails] = useState(false);
  const [stockData, setStockDetails] = useState([]);
  const [salesData, setSalesData] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [salesLoaded, setSalesLoaded] = useState(false);

  const refreshData = async () => {
    const { data: stockData, error: stockDataError } = await supabase
      .from('LowStockFull')
      .select()
      //.eq('is_active', true)
    
    if (stockData) {
      let displayData = stockData
      .map(raw => ({
        'Products': raw["product_name"],
        'Items': raw["quantity"],
      }));
      setStockDetails(displayData);
    }

    const { data: salesData, error: salesDataError } = await supabase
      .from('SalesRecent')
      .select()
    
    if (salesData) {
      let weekDayToday = new Date().getDay()
      let sold = [0, 0, 0, 0, 0, 0, 0]
      let sortedSalesData = salesData.sort((a, b) => new Date(a.purchase_date) - new Date(b.purchase_date));
      for (let i = 0; i < sortedSalesData.length; i++) {
        let sale = sortedSalesData[i]
        console.log(sale)
        let saleWeekDay = new Date(sale.purchase_date).getDay()
        console.log(`saleWeekDay: ${saleWeekDay} vs weekDayToday: ${weekDayToday}`)
        if (saleWeekDay > weekDayToday) {
          continue
        }
        for (let j = 0; j < sale["sales_details"].length; j++) {
          sold[saleWeekDay] += 1
        }
      }
      /*
      let displayData = salesData
      .map(raw => ({
        'Products': raw["product_name"],
        'Items': raw["quantity"],
      }));
      setStockDetails(displayData);
      */
      console.log(sold)
      setSalesData(sold)
      setSalesLoaded(true)
    }
  }
       

  useEffect(() => {
    refreshData();
  }, [])

  const columns = ['Products','Items'];

  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="bg-amber-100 w-full">
          <div className="m-8 p-2 bg-amber-200/30 rounded-xl shadow-[-4px_4px_4px_#888888]">
            <nav className="flex flex-row">
              <div className="p-4 text-gray-800">
                <p>Sales of the Week</p>
                <div className="border-2 border-black border-solid w-1/4 rounded-xl mx-auto mt-2 border-gray-800"></div>
              </div>
            </nav>
            {(
              salesLoaded ? <SalesBarChart data={salesData} /> : 
                (
                    <div className="place-self-center">
                    <br/>
                      <p className="text-xl">Loading weekly sales graph...</p>
                    <br/>
                    </div>
                )
            )}
          </div>
          <div className="m-8 p-4 bg-amber-200/30 rounded-xl shadow-[-4px_4px_4px_#888888]">
            <div className='flex justify-between'>
                <p className='p-2  text-gray-800'>Low Stock</p>
                <div className="border-solid w-1/4 rounded-xl mx-auto mt-2 border-gray-800"></div>
                {stockData.length >= 4 && (
                <ArrowsPointingOutIcon className='h-6 w-6 mr-6 mt-4 cursor-pointer' onClick={() => setShowStockDetails(true)}/>
                )}
              </div>
            <LowStockTable columns={columns} data={stockData}/>
          </div>
        </main>
      </div>
      {showStockDetails && <LowStockDetails columns={columns} data={stockData} onClose={() => setShowStockDetails(false)} />}
    </>
  );
}

export default HomePage;