import Logo from "../assets/logo.jpg"

import { HomeIcon, ListBulletIcon, UserIcon, BanknotesIcon, ArchiveBoxIcon, TruckIcon, LockClosedIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid'

const Sidebar = () => {
  return (
    <aside className="h-screen sticky top-0 bg-orange-400/70 min-w-xs h-screen">
      <div className="h-full" >
        <img src={Logo} alt="MELTS Logo" className="w-50 place-self-center p-6" />
        <ol className="flex flex-col text-white border-solid border-black border w-auto">
          <li className="py-2 sidebar-link-shadow">
            <a href="/home">
              <HomeIcon className="h-6 float-left px-2" /> Home
            </a>
          </li>
          <li className="py-2 sidebar-link-shadow">
            <a href="/inventory">
              <ListBulletIcon className="h-6 float-left px-2" /> Inventory
            </a>
          </li>
          <li className="py-2 sidebar-link-shadow">
            <a href="/employee">
              <UserIcon className="h-6 float-left px-2" /> Employees
            </a>
          </li>
          <li className="py-2 sidebar-link-shadow">
            <a href="/transaction">
              <BanknotesIcon className="h-6 float-left px-2" /> Transactions
            </a>
          </li>
          <li className="py-2 sidebar-link-shadow">
            <a href="/restock">
              <ArchiveBoxIcon className="h-6 float-left px-2" /> Restock
            </a>
          </li>
          <li className="py-2 grow sidebar-link-shadow">
            <a href="/supplier">
              <TruckIcon className="h-6 float-left px-2" /> Suppliers
            </a>
          </li>
          <li className="py-2 sidebar-link-shadow">
            <a href="/admin">
              <LockClosedIcon className="h-6 float-left px-2" /> Admin
            </a>
          </li>
          <li className="py-2 sidebar-link-shadow">
            <a href="/logout">
              <ArrowRightStartOnRectangleIcon className="h-6 float-left px-2" /> Logout
            </a>
          </li>
        </ol>
      </div>
    </aside>
  );
}

export default Sidebar;