import React from "react";

export default function CardCount({ icon, count, label, bgColor }) {
    return (
        <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
            <div className={`rounded-full p-4 ${bgColor}`}>
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="text-2xl font-bold">{count}</span>
                <span className="text-gray-400">{label}</span>
            </div>
        </div>
    );
}