"use client";

import React from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa"; // nice single icon

const BottomHeader = () => {
  return (
    <div className="">
      <div className="max-w-[1400px] mx-auto px-24 py-3 flex items-center gap-12">

        {/* LEFT — Category Dropdown with single icon */}
       <div className="relative flex items-center cursor-pointer">
  <select className="appearance-none border-r border-gray-300 px-3 py-2 pr-8 outline-none cursor-pointer">
    <option>Category</option>
    <option>Development</option>
    <option>Marketing</option>
    <option>Music</option>
    <option>Accounting</option>
  </select>
  <FaAngleDown className="absolute right-2 text-gray-700 pointer-events-none" />
</div>


        {/* CENTER — Link Menu with 25px gap */}
        <div className="flex gap-[25px]">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <Link href="/about" className="hover:text-gray-700">About</Link>
          <Link href="/contact" className="hover:text-gray-700">Contact</Link>
          <Link href="/blog" className="hover:text-gray-700">Blog</Link>
          <Link href="/course" className="hover:text-gray-700">Course</Link>
        </div>

      </div>
    </div>
  );
};

export default BottomHeader;
