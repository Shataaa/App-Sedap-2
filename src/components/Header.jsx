import { MdWifiCalling3 } from "react-icons/md";
import { RiMailSendLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineX } from "react-icons/hi";
import { FaUser} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import Icons2 from "./Icons2";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const searchInputRef = useRef(null);

  // Close search overlay with ESC key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") setSearchOpen(false);
    }
    if (searchOpen) {
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchOpen]);

  // Dummy cart data
  const cartItems = [
    {
      name: "Banana",
      price: 9.99,
      img: "https://img.icons8.com/color/96/banana.png",
      qty: 1,
    },
    {
      name: "Tomato",
      price: 9.99,
      img: "https://img.icons8.com/color/96/tomato.png",
      qty: 1,
    },
    {
      name: "Bread",
      price: 9.99,
      img: "https://img.icons8.com/color/96/bread.png",
      qty: 1,
    },
  ];

  // For demo, handle quantity locally
  const [cart, setCart] = useState(cartItems);

  const handleQty = (idx, type) => {
    setCart((prev) =>
      prev.map((item, i) =>
        i === idx
          ? {
              ...item,
              qty:
                type === "inc" ? item.qty + 1 : item.qty > 1 ? item.qty - 1 : 1,
            }
          : item
      )
    );
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setLanguageOpen(false);
  };

  return (
    <>
      {/* Sidebar Cart */}
      <div
        className={`fixed top-0 right-0 h-full w-[340px] bg-[#363938] z-50 shadow-2xl transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ maxWidth: "100vw" }}
      >
        {/* ...cart sidebar content... */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-700">
          <span className="text-white text-lg font-bold">Shopping Cart</span>
          <button
            className="text-white text-2xl"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close Cart"
          >
            <HiOutlineX />
          </button>
        </div>
        <div className="px-6 py-4 space-y-6">
          {cart.map((item, idx) => (
            <div
              key={item.name}
              className="flex items-center space-x-4 border-b border-gray-600 pb-4"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded bg-white object-contain"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span
                    className="text-white font-bold text-lg"
                    style={{ fontFamily: "Poppins, serif" }}
                  >
                    {item.name}
                  </span>
                  <span className="text-white font-bold">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex mt-2">
                  <button
                    className="w-7 h-7 bg-[#232323] text-white text-lg border border-gray-700"
                    onClick={() => handleQty(idx, "dec")}
                  >
                    -
                  </button>
                  <input
                    className="w-10 h-7 text-center bg-[#232323] text-white border-t border-b border-gray-700 outline-none"
                    value={item.qty}
                    readOnly
                  />
                  <button
                    className="w-7 h-7 bg-[#232323] text-white text-lg border border-gray-700"
                    onClick={() => handleQty(idx, "inc")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 w-full px-6 py-6">
          <button className="w-full bg-green-500 text-white font-bold py-3 rounded hover:bg-green-600 transition">
            Proceed To Checkout
          </button>
        </div>
      </div>
      {/* Overlay for Cart */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-30 z-40 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-60 backdrop-blur-sm">
          <div className="relative">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search Here..."
              className="w-[400px] max-w-full px-4 py-3 rounded-sm bg-white text-gray-900 text-base outline-none"
              style={{ fontFamily: "Poppins, sans-serif" }}
            />
            <button className="absolute right-0 top-0 h-full px-4 bg-green-500 rounded-r-sm text-white">
              <AiOutlineSearch />
            </button>
          </div>
        </div>
      )}

      {/* Top Bar */}
      <div className="w-full bg-white border-b border-gray-200 font-poppins-extrabold">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-8">
          {/* Left: Socials */}
          <div className="flex items-center space-x-4 text-gray-500 text-lg">
            <Icons2 />
          </div>
          {/* Email */}
          <div className="flex items-center space-x-2 border-l border-gray-200 pl-8">
            <RiMailSendLine className="text-green-400 text-2xl transform rotate-315" />
            <div>
              <div className="text-xs text-gray-400">Email</div>
              <div className="text-sm text-gray-700">info@Sedap.com</div>
            </div>
          </div>
          {/* Logo */}
          <div className="flex-1 flex justify-center font-poppins-extrabold text-[48px] text-gray-900">
            Sedap
            <b id="logo-dot" className="text-hijau">
              .
            </b>
          </div>
          {/* Phone */}
          <div className="flex items-center space-x-2 border-r border-gray-200 pr-8">
            <MdWifiCalling3 className="text-green-400 text-2xl" />
            <div>
              <div className="text-xs text-gray-400">Phone</div>
              <div className="text-sm text-gray-700">92 666 888 0000</div>
            </div>
          </div>
          {/* Search & Cart */}
          <div className="flex items-center space-x-6 text-gray-700 text-xl pl-8">
            <AiOutlineSearch
              className="cursor-pointer"
              onClick={() => setSearchOpen(true)}
            />
            <AiOutlineShoppingCart
              className="cursor-pointer"
              onClick={() => setSidebarOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="w-full bg-[#f7f7f7] shadow-sm font-poppins-extrabold">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-8">
          {/* Left: Login/Register */}
          <div className="flex items-center space-x-2">
            <FaUser className="text-green-400 text-xl" />
            <span className="text-gray-500 text-sm font-poppins-extrabold">
              Login / Register
            </span>
          </div>

          {/* Center: Navigation */}
          <nav className="flex items-center space-x-8 font-poppins-extrabold">
            <a href="#" className="text-green-500 font-poppins-extrabold">
              Home
            </a>
            <a
              href="#"
              className="text-gray-500 font-poppins-extrabold hover:text-green-500"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-500 font-poppins-extrabold hover:text-green-500"
            >
              Shop
            </a>
            <a
              href="#"
              className="text-gray-500 font-poppins-extrabold hover:text-green-500"
            >
              News
            </a>
            <a
              href="#"
              className="text-gray-500 font-poppins-extrabold hover:text-green-500"
            >
              Contact
            </a>
          </nav>

          {/* Right: Language Selector */}
          <div className="relative">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setLanguageOpen(!languageOpen)}
            >
              <span className="text-2xl">
                <img
                  src="data:image/png;base64,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"
                  alt="UK Flag"
                  className="w-6 h-4 object-cover"
                />
              </span>
              <span className="text-gray-500 text-sm font-poppins-extrabold">
                {selectedLanguage}
              </span>
              <FiChevronDown className="text-gray-400" />
            </div>

            {languageOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg z-50">
                <div
                  className={`px-4 py-2 text-sm font-poppins-extrabold cursor-pointer ${
                    selectedLanguage === "English"
                      ? "bg-green-500 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => handleLanguageChange("English")}
                >
                  English
                </div>
                <div
                  className={`px-4 py-2 text-sm font-poppins-extrabold cursor-pointer ${
                    selectedLanguage === "Arabic"
                      ? "bg-green-500 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => handleLanguageChange("Arabic")}
                >
                  Arabic
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
