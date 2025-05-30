import React from "react";
import { FaBell } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Icons() {
    return (
        <div id="icons-container" className="flex items-center space-x-4">
            {/* Notification Icon */}
            <div id="notification-icon" className="relative p-3 bg-blue-100 rounded-2xl text-blue-500 cursor-pointer">
                <FaBell />
                <span
                    id="notification-badge"
                    className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-full px-2 py-1 text-xs"
                >
                    50
                </span>
            </div>

            {/* Chart Icon */}
            <div id="chart-icon" className="p-3 bg-blue-100 rounded-2xl cursor-pointer">
                <FcAreaChart />
            </div>

            {/* Settings Icon */}
            <div id="settings-icon" className="p-3 bg-red-100 rounded-2xl text-red-500 cursor-pointer">
                <SlSettings />
            </div>
        </div>
    );
}