import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error401() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center h-screen bg-pink-100">
            <div className="flex flex-col md:flex-row items-center bg-pink-100 rounded-lg p-8 md:p-16">
                {/* Left Section: Text */}
                <div className="text-center md:text-left md:mr-8">
                    <div className="absolute top-80">
                        <img
                            src="./img/oops.png"
                            alt="Gear"
                            // className="w-16 md:w-24"
                        />
                    </div>
                    <h2 className="text-6xl font-semibold text-gray-700 mb-2">401 error</h2>
                    <p className="text-gray-600 font-bold mb-6">
                        Unauthorized
                    </p>
                    <button
                        onClick={() => navigate("/")}
                        className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600"
                    >
                        Back to home
                    </button>
                </div>

                {/* Right Section: Image */}
                <div className="mt-8 md:mt-0">
                    <img
                        src="./img/girl.png"
                        alt="404 Character"
                        className="absolute bottom-0 right-30"
                    />
                </div>
            </div>

            {/* Background Gears */}
            <div className="absolute top-55 right-4">
                <img
                    src="./img/Gearpojokkanan.png"
                    alt="Gear"
                    className="w-16 md:w-24"
                />
            </div>
            <div className="absolute top-22.5 right-4">
                <img
                    src="./img/Gearkananpalingatas.png"
                    alt="Gear"
                    className="w-32 md:w-48 lg:w-48"
                />
            </div>
            <div className="absolute bottom-0 left-95">
                <img
                    src="./img/Gearkiri.png"
                    alt="Gear"
                    className="w-32 md:w-48 lg:w-48"
                />
            </div>
        </div>
    );
}