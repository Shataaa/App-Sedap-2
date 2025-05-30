import { AiFillFacebook } from "react-icons/ai"; 
import { BsTwitter } from "react-icons/bs"; 
import { FiInstagram } from "react-icons/fi"; 
import { RxTwitterLogo } from "react-icons/rx"; 
import { FaFacebookF } from "react-icons/fa"; 

import React from "react";


export default function Icons2() {
    return (
        <div id="icons-container" className="flex items-center justify-between space-x-4">
            <div className="relative p-3 cursor-pointer">
                <BsTwitter className="text-2xl text-gray-500 hover:text-green-500 transition" />
            </div>
            <div className="relative p-3 cursor-pointer">
                <AiFillFacebook className="text-2xl text-gray-500 hover:text-green-500 transition" />
            </div>
            <div className="relative p-3 cursor-pointer">
                <FiInstagram className="text-2xl text-gray-500 hover:text-green-500 transition" />
            </div>
        </div>
    );
}