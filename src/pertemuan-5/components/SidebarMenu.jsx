import React from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AiOutlineOrderedList, AiOutlineCustomerService } from "react-icons/ai";
import { BiCommentDetail, BiFoodMenu, BiDetail } from "react-icons/bi";
import { IoMdAnalytics } from "react-icons/io";
import { MdRateReview } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { GiWallet } from "react-icons/gi";

export default function SidebarMenu() {
    const menus = [
        { icon: <MdOutlineDashboardCustomize />, label: "Dashboard" },
        { icon: <AiOutlineOrderedList />, label: "Order List" },
        { icon: <BiCommentDetail />, label: "Order Detail" },
        { icon: <AiOutlineCustomerService />, label: "Customer" },
        { icon: <IoMdAnalytics />, label: "Analytics" },
        { icon: <MdRateReview />, label: "Reviews" },
        { icon: <BiFoodMenu />, label: "Food Detail" },
        { icon: <BiFoodMenu />, label: "Food Detail" },
        { icon: <BiDetail />, label: "Customer Detail" },
        { icon: <SlCalender />, label: "Calender" },
        { icon: <GiWallet />, label: "Wallet" },
    ];

    return (
        <div id="sidebar-menu" className="mt-10">
            <ul id="menu-list" className="space-y-3">
                {menus.map((menu, index) => (
                    <li key={index}>
                        <div
                            id={`menu-${index + 1}`}
                            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
                        >
                            {menu.icon}
                            <span className="ml-2">{menu.label}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

