// components/SubscribeNewsletter.jsx
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import topLeftImg from "../../../assets/req-shape-1.png"; // top-left small image
import mainImg from "../../../assets/post-1.jpg"; // main left child image

const SubscribeNewsletter = () => {
  return (
    <section className="relative bg-[#161f23] py-16">
      {/* Top-left image */}
      <div className="absolute top-10 right-10">
        <Image
          src={topLeftImg}
          alt="Top Left"
          width={100}
          height={100}
          className="object-cover"
        />
      </div>

      {/* Main container */}
      <div className="max-w-[1440px] mx-auto px-24 flex flex-col md:flex-row items-center justify-between gap-8 relative">

        {/* Left child div (Big Image) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={mainImg}
            alt="Main Newsletter"
            width={600}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Right child div (Content) */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-4">
          
          {/* Button with Icon */}
          <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full hover:bg-teal-700 transition">
            <FaArrowRight className=" text-[#38b7a6] rounded-full text-xl" /> Subscribe Newsletter
          </button>

          {/* Heading */}
          <h1 className="text-4xl font-bold text-white mt-2">
            Find Your Best Course With Us
          </h1>

          {/* Paragraph */}
          <p className="text-white mt-2">
            Quality technologies via fully tested methods of empowerment. Proactively disseminate web enabled best practices after cross functional expertise.
          </p>

          {/* Two small buttons (optional input/buttons) */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center md:justify-start">
            <button className="px-10 py-2 text-white border border-gray-300 rounded-full hover:bg-gray-200 transition">
              Course Name
            </button>
            <button className="px-10 py-2 text-white border border-gray-300 rounded-full hover:bg-gray-200 transition">
              Email Address
            </button>
          </div>

          {/* Subscribe Button */}
          <button className="mt-4 bg-[#38b7a6] hover:bg-teal-700 text-white px-6 py-3 rounded-full transition">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeNewsletter;
