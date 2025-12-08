import Logo from "../assets/logo.jpg"
import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

import { 
  HomeIcon, ListBulletIcon, BanknotesIcon, 
  ArchiveBoxIcon, TruckIcon, ArrowRightStartOnRectangleIcon 
} from "@heroicons/react/24/solid";

import Button from '../components/Button.jsx';

const SidebarButton = ({ navigateUri, text, navigate, children }) => {
    const child = React.Children.only(children);
    const [ripple, setRipple] = useState(null);

    const clickEvent = async (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        setRipple({ x, y, size });

        setTimeout(() => setRipple(null), 600);
        setTimeout(() => navigate(navigateUri), 250);
    }
    const icon = React.cloneElement(child, {
      ...child.props,
      className: "h-6 float-left pr-2",
    });

    return (
        <button className={`ripple-container flex cursor-pointer cursor-pointer py-2 pl-10 w-full rounded-lg`} onClick={clickEvent}>
            {icon} {text}
            {ripple && (
                <span
                    className="ripple-effect"
                    style={{
                        width: ripple.size,
                        height: ripple.size,
                        left: ripple.x,
                        top: ripple.y,
                    }}
                />
            )}
        </button>
    );
}

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activePath = location.pathname;

  const Navbar = (path) =>
    `py-2 rounded sidebar-link-shadow transition-all 
     ${activePath === path ? "bg-[rgba(207,1,27)] text-white" : "hover:shadow-lg"}`;

  const btnClasses =
    "cursor-pointer flex items-center px-8 py-2 w-full text-left";

  return (
    <aside className="h-screen sticky top-0 bg-orange-400/70 min-w-3xs overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col h-full justify-between items-center w-full p-3">
        <img src={Logo} alt="MELTS Logo" className="w-40 place-self-center p-2" />

        <ol className="flex flex-col text-white w-full px-2 py-2 h-full">

          <li className={Navbar("/home")}>
            <button onClick={() => navigate("/home")} className={btnClasses}>
              <HomeIcon className="h-6 mr-2" /> Home
            </button>
          </li>

          <li className={Navbar("/inventory")}>
            <button onClick={() => navigate("/inventory")} className={btnClasses}>
              <ListBulletIcon className="h-6 mr-2" /> Inventory
            </button>
          </li>
          {/*
          <li className="py-2 sidebar-link-shadow">
            <button onClick={() => navigate("/employee")}"/employee">
              <UserIcon className="h-6 float-left pr-2" /> Employees
            </button>
          </li>
          */}
          <li className={Navbar("/transaction")}>
            <button onClick={() => navigate("/transaction")} className={btnClasses}>
              <BanknotesIcon className="h-6 mr-2" /> Transactions
            </button>
          </li>

          <li className={Navbar("/restock")}>
            <button onClick={() => navigate("/restock")} className={btnClasses}>
              <ArchiveBoxIcon className="h-6 mr-2" /> Restock
            </button>
          </li>

          <li className={`${Navbar("/supplier")} mb-auto`}>
            <button onClick={() => navigate("/supplier")} className={btnClasses}>
              <TruckIcon className="h-6 mr-2" /> Suppliers
            </button>
          </li>
           {
          /*
          <li className="py-2 sidebar-link-shadow">
            <LockClosedIcon className="h-6 float-left pr-2" /> User: Admin
          </li>
          */
          }
          <li className={Navbar("/")}>
            <button onClick={() => navigate("/")} className={btnClasses}>
              <ArrowRightStartOnRectangleIcon className="h-6 mr-2" /> Logout
            </button>
          </li>

        </ol>
      </div>
    </aside>
  );
};

export default Sidebar;
