"use client";

import React from "react";
import Link from "next/link";


const ContactHero = () => {
  return (
    <div>
      <div
      className="relative w-full h-64 bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/5716033/pexels-photo-5716033.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center pl-24 text-start">
        <h2 className="text-2xl font-semibold text-black mb-2">Contact Page</h2>

        {/* Breadcrumb */}
        <div className="text-black text-sm flex gap-2 items-center">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/course" className="hover:underline">
            Contact Page
          </Link>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default ContactHero;
