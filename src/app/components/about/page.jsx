
import React from "react";
import Image from "next/image";

import img1 from "../../../assets/about-img-1.jpg";
import img2 from "../../../assets/about-img-2.jpg";
import img3 from "../../../assets/about-img-2.jpg";
import img4 from "../../../assets/about-img-1.jpg";
import { FaArrowRight, FaBook, FaUserGraduate } from "react-icons/fa";

const AboutWithImages = () => {
  return (
    <section className="py-16 bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1440px] mx-auto px-6 md:px-24 gap-12">
        {/* Left Side: 4 Images */}
       <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2 overflow-hidden rounded-tl-2xl">
  <div className="overflow-hidden rounded-tl-2xl">
    <Image
      src={img1}
      alt="Image 1"
      width={400}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>

  <div className="overflow-hidden rounded-tr-full">
    <Image
      src={img2}
      alt="Image 2"
      width={400}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>

  <div className="overflow-hidden rounded-bl-full">
    <Image
      src={img3}
      alt="Image 3"
      width={400}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>

  <div className="overflow-hidden rounded-br-4xl">
    <Image
      src={img4}
      alt="Image 4"
      width={400}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>
</div>


        {/* Right Side: Text + Button */}
        <div className="flex flex-col w-full lg:w-1/2 space-y-6">
          {/* Main Text */}
          <div className="space-y-4">
             <button className="flex items-center gap-3 bg-white text-black hover:bg-teal-700 border border-black rounded-full px-8 py-1  transition">
      {/* Icon with circular background */}
      <div className="bg-[#38b7a6] p-2 rounded-full text-white flex items-center justify-center">
        <FaArrowRight />
      </div>

      {/* Button Text */}
      <span className="font-medium">Get More About Us</span>
    </button>
            <h2 className="text-4xl font-bold text-gray-800">
              Over 10 Years in Distant learning  for Skill Development
            </h2>
            <p className="text-gray-700">
              Over 10 Years in Distant learning for Skill Development.
              Compellingly procrastinate equity invested markets with efficient
              process improvements. Actualize mission-critical partnerships with
              integrated portals. Authoritatively optimize low-risk high-yield
              metrics and plug-and-play potentialities.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="flex justify-between w-full mt-6 gap-6">
            {/* First Stat */}
            <div className="flex items-center gap-4 flex-1">
              <div className="text-[#38b7a6] text-4xl">
                <FaBook />
              </div>
              <div className="flex flex-col">
                <p className="text-4xl font-bold text-[#38b7a6]">9.5k+</p>
                <p className="text-gray-500 text-sm">
                  Total active students taking gifted courses
                </p>
              </div>
            </div>

            {/* Second Stat */}
            <div className="flex items-center gap-4 flex-1">
              <div className="text-[#38b7a6] text-4xl">
                <FaUserGraduate />
              </div>
              <div className="flex flex-col">
                <p className="text-4xl font-bold text-[#38b7a6]">6.7k+</p>
                <p className="text-gray-500 text-sm">
                  Total active students taking gifted courses
                </p>
              </div>
            </div>
          </div>
          {/* Button */}
          <button className="bg-[#38b7a6] font-bold hover:bg-teal-700 text-white px-6 py-3 rounded-full w-max transition">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutWithImages;
