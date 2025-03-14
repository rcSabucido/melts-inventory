import Logo from "../assets/logo.jpg"
import { useNavigate } from 'react-router-dom';

import { HomeIcon, ListBulletIcon, UserIcon, BanknotesIcon, ArchiveBoxIcon, TruckIcon, LockClosedIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid'

const Sidebar = () => {
  let navigate = useNavigate();
  return (
    <aside className="h-screen sticky top-0 bg-orange-400/70 min-w-3xs h-screen overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col h-full justify-between items-center w-full p-3" >
        <img src={Logo} alt="MELTS Logo" className="w-40 place-self-center p-2" />
        <ol className="flex flex-col text-white float-start px-2 py-2 h-full">
          <li className="py-2 sidebar-link-shadow">
            <button onClick={() => navigate("/home")} className="cursor-pointer">
              <HomeIcon className="h-6 float-left pr-2" /> Home
            </button>
          </li>
          <li className="py-2 sidebar-link-shadow">
            <button onClick={() => navigate("/inventory")} className="cursor-pointer">
              <ListBulletIcon className="h-6 float-left pr-2" /> Inventory
            </button>
          </li>
          {/*
          <li className="py-2 sidebar-link-shadow">
            <button onClick={() => navigate("/employee")}"/employee">
              <UserIcon className="h-6 float-left pr-2" /> Employees
            </button>
          </li>
          */}
          <li className="py-2 sidebar-link-shadow">
            <button onClick={() => navigate("/transaction")} className="cursor-pointer">
              <BanknotesIcon className="h-6 float-left pr-2" /> Transactions
            </button>
          </li>
          <li className="py-2 sidebar-link-shadow">
            <button onClick={() => navigate("/restock")} className="cursor-pointer">
              <ArchiveBoxIcon className="h-6 float-left pr-2" /> Restock
            </button>
          </li>
          <li className="py-2 sidebar-link-shadow grow">
            <button onClick={() => navigate("/supplier")} className="cursor-pointer">
              <TruckIcon className="h-6 float-left pr-2" /> Suppliers
            </button>
          </li>
          {
          /*
          <li className="py-2 sidebar-link-shadow">
            <LockClosedIcon className="h-6 float-left pr-2" /> User: Admin
          </li>
          */
          }
          <li className="py-2 sidebar-link-shadow">
            <button onClick={() => navigate("/")} className="cursor-pointer">
              <ArrowRightStartOnRectangleIcon className="h-6 float-left pr-2" /> Logout
            </button>
          </li>
        </ol>
      </div>
    </aside>
  );
}

export default Sidebar;