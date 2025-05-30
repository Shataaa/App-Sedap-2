import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage({ img, code, description }) {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-[#8d1c76] text-white px-4"
      style={{ backgroundColor: "#8d1c76" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl px-4">
        {/* Left Section: Image */}
        <div className="flex items-center justify-center md:w-1/2">
          <img src={img} alt="Error Illustration" className="w-64 md:w-80 h-auto" />
        </div>

        {/* Right Section: Text */}
        <div className="text-left md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">{code}</h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-md text-center md:text-left">
            {description}
          </p>
          <div className="mt-6">
            <button
              onClick={() => navigate("/")}
              className="bg-pink-800 text-white px-6 py-2 rounded-lg hover:bg-pink-900"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}