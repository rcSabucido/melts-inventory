import Sidebar from '../components/Sidebar.jsx';
import BarChart from "../components/BarChart.jsx";
import LowStockTable from "../components/LowStockTable.jsx";

const HomePage = () => {
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
            <nav className="flex flex-row">
              <div className="p-4 text-gray-800">
                <a href="#">Low Stock</a>
                <div className="border-2 border-black border-solid w-1/4 rounded-xl mx-auto mt-2 border-gray-800"></div>
              </div>
            </nav>
            <LowStockTable />
          </div>
        </main>
      </div>
    </>
  );
}

export default HomePage;