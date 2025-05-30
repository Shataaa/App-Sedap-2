import React from "react";
export default function Card({ children }) {
  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">{children}</div>
    </div>
  );
}
