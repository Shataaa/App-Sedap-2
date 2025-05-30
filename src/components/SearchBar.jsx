import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
    return (
        <div id="search-bar" className="relative w-full max-w-lg">
            <input
                id="search-input"
                className="border border-gray-100 p-2 pr-10 bg-white w-full max-w-lg rounded-md outline-none"
                type="text"
                placeholder="Search Here..."
            />
            <FaSearch id="search-icon" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
        </div>
    );
}