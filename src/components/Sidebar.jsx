import Logo from "../assets/logo.jpg"
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import { HomeIcon, ListBulletIcon, UserIcon, BanknotesIcon, ArchiveBoxIcon, TruckIcon, LockClosedIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid'

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
  let navigate = useNavigate();
  return (
    <aside className="h-screen sticky top-0 bg-orange-400/70 min-w-3xs h-screen overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col h-full justify-between items-center w-full p-3" >
        <img src={Logo} alt="MELTS Logo" className="w-40 place-self-center p-2" />
        <ol className="flex flex-col text-white float-start px-2 py-2 h-full w-full">
          <li className="sidebar-link-shadow">
            <SidebarButton navigateUri="/home" navigate={navigate} text="Home">
              <HomeIcon/>
            </SidebarButton>
          </li>
          <li className="sidebar-link-shadow">
            <SidebarButton navigateUri="/inventory" navigate={navigate} text="Inventory">
              <ListBulletIcon/>
            </SidebarButton>
          </li>
          {/*
          <li className="py-2 sidebar-link-shadow">
            <button onClick={() => navigate("/employee")}"/employee">
              <UserIcon className="h-6 float-left pr-2" /> Employees
            </button>
          </li>
          */}

          <li className="sidebar-link-shadow">
            <SidebarButton navigateUri="/transaction" navigate={navigate} text="Transactions">
              <BanknotesIcon/>
            </SidebarButton>
          </li>

          <li className="sidebar-link-shadow">
            <SidebarButton navigateUri="/restock" navigate={navigate} text="Restock">
              <ArchiveBoxIcon/>
            </SidebarButton>
          </li>

          <li className="sidebar-link-shadow grow">
            <SidebarButton navigateUri="/supplier" navigate={navigate} text="Suppliers">
              <TruckIcon/>
            </SidebarButton>
          </li>

          {
          /*
          <li className="py-2 sidebar-link-shadow">
            <LockClosedIcon className="h-6 float-left pr-2" /> User: Admin
          </li>
          */
          }

          <li className="sidebar-link-shadow">
            <SidebarButton navigateUri="/" navigate={navigate} text="Logout">
              <ArrowRightStartOnRectangleIcon/>
            </SidebarButton>
          </li>
        </ol>
      </div>
    </aside>
  );
}

export default Sidebar;