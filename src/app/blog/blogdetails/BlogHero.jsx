"use client";

import React from "react";
import Link from "next/link";


const BlogHero = () => {
  return (
    <div>
      <div
      className="relative w-full h-64 bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/5716033/pexels-photo-5716033.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center pl-24 text-start">
        <h2 className="text-2xl font-semibold text-black mb-2">Grid Blog</h2>

        {/* Breadcrumb */}
        <div className="text-black text-sm flex gap-2 items-center">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/course" className="hover:underline text-[#38b7a6]">
            Blog Page
          </Link>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default BlogHero;
