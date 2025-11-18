import React from "react";
import Image from "next/image"; 
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-white  border-gray-300 border-b">
      <div className="max-w-[1400px] mx-auto px-24 py-4 flex items-center justify-between">

        {/* LEFT — LOGO */}
        <div>
          <Image
            src="/logo-1.png"  
            alt="Logo"
            width={120}
            height={60}
            className="cursor-pointer"
          />
        </div>

        {/* MIDDLE SECTION */}
        <div className="flex items-center gap-6">
          <select className="border border-gray-300 rounded-md px-3 py-2 outline-none cursor-pointer">
            <option>Category</option>
            <option>Fashion</option>
            <option>Organic</option>
            <option>Furniture</option>
          </select>

          <input
            type="text"
            placeholder="Search product..."
            className="border border-gray-300 rounded-md px-4 py-2 w-72 outline-none"
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-6">
          <FaHeart className="text-gray-700 text-xl cursor-pointer hover:text-red-500" />
          <FaShoppingCart className="text-gray-700 text-xl cursor-pointer hover:text-green-600" />

          <button className="bg-[#38b7a6] text-white px-5 py-2 rounded-full hover:bg-blue-700">
            Start Free Tutorial
          </button>
        </div>

      </div>
    </div>
  );
};

export default Header;
