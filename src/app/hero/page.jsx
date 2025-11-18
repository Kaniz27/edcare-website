"use client";
import React from "react";
import Image from "next/image";
import heroImg from "../../assets/hero-img-1.png";
import img1 from "../../assets/hero-author-1.png";
import img2 from "../../assets/hero-author-2.png";
import img3 from "../../assets/hero-author-3.png";
import img4 from "../../assets/hero-author-4.png";

const Hero = () => {
  const smallImages = [img1, img2, img3, img4];

  return (
    <section className="flex bg-[#eff2f9] flex-col md:flex-row items-center justify-between px-24 py-16  mx-auto max-w-[1400px]">
      
      {/* Left Content */}
      <div className=" flex-1 flex flex-col justify-center space-y-6">
        <p className="bg-white px-5 py-2 rounded-full text-xl flex items-center w-fit">
          <span className="bg-[#38b7a6] rounded-full text-white">⚡</span> Welcome to Online Education
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Start learning from{" "}
          <span className="text-teal-600">the world’s best institutions</span>
        </h1>

        {/* Buttons */}
        <div className="flex items-center gap-6 mt-2">
          <button
            onClick={() => window.location.href="/contact"}
            className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition"
          >
            Get Started
          </button>

          {/* Video icon & text separate */}
          <div className="flex items-center gap-2">
            <span className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white text-lg">
              ▶
            </span>
            <span className="text-gray-700 font-semibold">Watch the video</span>
          </div>
        </div>

        {/* Author Images outside card */}
        <div className="flex -space-x-4 items-center mt-6">
          {smallImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Author ${index + 1}`}
              className="w-12 h-12 rounded-full border-2 border-white object-cover"
            />
          ))}
          <p className="text-gray-600 text-sm ml-6"><strong>10k</strong> Enrolment</p>
        </div>

        <p className="text-gray-900 text-2xl font-semibold mt-2">
          Explore <span className="text-teal-600">1350+</span> Courses within Subject
        </p>
      </div>

      {/* Right Image */}
      <div className="flex-1 relative mt-10 md:mt-0 flex justify-center">
        <div className="relative group">
          {/* Main Hero Image */}
          <Image
            src={heroImg}
            alt="Hero"
            className="rounded-4xl w-full transition-transform duration-500 group-hover:scale-105 pl-15"
            priority
          />

          {/* Card on top of main image only */}
          <div className="absolute left-10 top-1/2 transform -translate-x-1/2 -translate-y-20 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center animate-fadeIn">
            <p className="text-teal-600 font-bold text-xl">256+</p>
            <p className="text-gray-500 text-sm">CRASHED COURSES</p>
          </div>
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-20px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
      `}</style>

    </section>
  );
};

export default Hero;
