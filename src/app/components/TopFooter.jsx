"use client";

import React from "react";
import { FaEnvelope } from "react-icons/fa";

const TopFooter = () => {
  return (
    <section className="py-12 border border-gray-600 rounded-md ">
      <div className="max-w-[1400px] mx-auto px-6 md:px-24 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* 1️⃣ Heading */}
        <div className="flex-1 min-w-[250px] text-center md:text-left">
          <h2 className="text-3xl font-semibold">
            Subscribe to Our Newsletter <br /> For Latest Updates
          </h2>
        </div>

        {/* 2️⃣ Email Input */}
        <div className="flex-1 min-w-[300px]">
  <div className="flex items-center border-2 border-gray-300 rounded-full overflow-hidden h-16 w-full px-4">
    <FaEnvelope className="text-white text-2xl" />
    <input
      type="email"
      placeholder="Enter your email"
      className="flex-1 px-4 py-3 outline-none text-lg"
    />
  </div>
</div>


        {/* 3️⃣ Subscribe Button */}
        <div className="flex-1 min-w-[200px] flex justify-center md:justify-end">
          <button className="bg-[#38b7a6] text-white px-12 py-3 rounded-full hover:bg-blue-700 text-lg transition-colors duration-300">
            Subscribe Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default TopFooter;
