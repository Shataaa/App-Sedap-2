import React from "react";
import { BiPlus } from "react-icons/bi";

export default function SidebarFooter() {
    return (
        <div id="sidebar-footer" className="mt-auto">
            <div id="footer-card" className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
                <div id="footer-info" className="flex-1 p-2">
                    <span id="footer-text" className="text-white text-sm">
                        Please organize your menus through button below!
                    </span>
                    <div id="add-menu-button" className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2">
                        <span id="add-menu-button.span" className="text-gray-600 flex items-center">
                            <BiPlus className="mr-2" />
                            Add Menus
                        </span>
                    </div>
                </div>
                <img
                    id="footer-avatar"
                    className="w-20 rounded-full"
                    src="https://avatar.iran.liara.run/public/28"
                    alt="Footer Avatar"
                />
            </div>
            <span id="footer-brand" className="font-bold text-gray-400">
                Sedap Restaurant Admin Dashboard
            </span>
            <p id="footer-copyright" className="font-light text-gray-400">
                &copy; 2025 All Right Reserved
            </p>
        </div>
    );
}