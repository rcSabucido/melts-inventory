import Logo from "../assets/logo.jpg"

import { HomeIcon, ListBulletIcon, UserIcon, BanknotesIcon, ArchiveBoxIcon, TruckIcon, LockClosedIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid'

const Sidebar = () => {
  return (
    <aside className="h-screen sticky top-0 bg-orange-400/70 min-w-3xs h-screen overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col h-full justify-between items-center w-full p-3" >
        <img src={Logo} alt="MELTS Logo" className="w-40 place-self-center p-2" />
        <ol className="flex flex-col text-white float-start px-2 py-2 h-full">
          <li className="py-2 sidebar-link-shadow">
            <a href="/home">
              <HomeIcon className="h-6 float-left pr-2" /> Home
            </a>
          </li>
          <li className="py-2 sidebar-link-shadow">
            <a href="/inventory">
              <ListBulletIcon className="h-6 float-left pr-2" /> Inventory
            </a>
          </li>
          {/*
          <li className="py-2 sidebar-link-shadow">
            <a href="/employee">
              <UserIcon className="h-6 float-left pr-2" /> Employees
            </a>
          </li>
          */}
          <li className="py-2 sidebar-link-shadow">
            <a href="/transaction">
              <BanknotesIcon className="h-6 float-left pr-2" /> Transactions
            </a>
          </li>
          <li className="py-2 sidebar-link-shadow">
            <a href="/restock">
              <ArchiveBoxIcon className="h-6 float-left pr-2" /> Restock
            </a>
          </li>
          <li className="py-2 sidebar-link-shadow grow">
            <a href="/supplier">
              <TruckIcon className="h-6 float-left pr-2" /> Suppliers
            </a>
          </li>
          <li className="py-2 sidebar-link-shadow">
            <LockClosedIcon className="h-6 float-left pr-2" /> User: Admin
          </li>
          <li className="py-2 sidebar-link-shadow">
            <a href="/logout">
              <ArrowRightStartOnRectangleIcon className="h-6 float-left pr-2" /> Logout
            </a>
          </li>
        </ol>
      </div>
    </aside>
  );
}

export default Sidebar;