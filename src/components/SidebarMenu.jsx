import React from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AiOutlineOrderedList, AiOutlineCustomerService } from "react-icons/ai";
import MenuList from "./MenuList";

export default function SidebarMenu() {
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4 space-x-2
        ${isActive ? 
            "text-hijau bg-green-200 font-extrabold" : 
            "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`;

    const menus = [
        { to: "/", icon: <MdOutlineDashboardCustomize />, label: "Dashboard" },
        { to: "/orders", icon: <AiOutlineOrderedList />, label: "Order List" },
        { to: "/customers", icon: <AiOutlineCustomerService />, label: "Customer" },
        { to: "/user", icon: <AiOutlineCustomerService />, label: "User" },
        { to: "*", icon: <AiOutlineCustomerService />, label: "Error 404" },
        { to: "/400", icon: <AiOutlineCustomerService />, label: "Error 400" },
        { to: "/401", icon: <AiOutlineCustomerService />, label: "Error 401" },
        { to: "/403", icon: <AiOutlineCustomerService />, label: "Error 403" },
        // { to: "/Login", icon: <AiOutlineCustomerService />, label: "Login" },
        // { to: "/Register", icon: <AiOutlineCustomerService />, label: "Register" },
        // { to: "/Forgot", icon: <AiOutlineCustomerService />, label: "Forgot" },
        // { to: "/Loading", icon: <AiOutlineCustomerService />, label: "Loading" },
    ];

    return (
        <div id="sidebar-menu" className="mt-10">
            <MenuList menus={menus} menuClass={menuClass} />
        </div>
    );
}