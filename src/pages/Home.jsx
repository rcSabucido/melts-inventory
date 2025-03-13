import { useState } from 'react';
import ArrowsPointingOutIcon from '@heroicons/react/24/outline/ArrowsPointingOutIcon';
import Sidebar from '../components/Sidebar.jsx';
import BarChart from "../components/BarChart.jsx";
import LowStockTable from "../components/LowStockTable.jsx";
import LowStockDetails from '../components/LowStockDetailsModal.jsx';

const HomePage = () => {
  const [showStockDetails, setShowStockDetails] = useState(false);
   const columns = ['Products', ' ', ' ',  ' ', ' ', ' ',' ',' ','Items'];
   const tableData = [
       {
           'Products': 'Durian Candy',
           'Items': 25,
       },
       {
           'Products': 'Mango Chip',
           'Items': 66,
       },
       {
           'Products': 'Banana Split',
           'Items': 3,

       },
       {
         'Products': 'Lorem Liquorice',
         'Items': 120,
       },
       {
         'Products': 'Ipsum Candy',
         'Items': 15,
       },
       {
        'Products': 'Ipsum Candy',
        'Items': 15,
      },
      {
        'Products': 'Ipsum Candy',
        'Items': 15,
      },
      {
        'Products': 'Ipsum Candy',
        'Items': 15,
      }
   ];



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
                {tableData.length >= 4 && (
                <ArrowsPointingOutIcon className='h-6 w-6 mr-6 mt-4 cursor-pointer' onClick={() => setShowStockDetails(true)}/>
                )}
              </div>
            <LowStockTable columns={columns} data={tableData.slice(0, 4)}/>
          </div>
        </main>
      </div>
      {showStockDetails && <LowStockDetails columns={columns} data={tableData} onClose={() => setShowStockDetails(false)} />}
    </>
  );
}

export default HomePage;