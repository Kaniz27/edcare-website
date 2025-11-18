"use client";
import React from "react";
import Image from "next/image";
import { FaAward, FaUserGraduate } from "react-icons/fa";
import mainImg from "../../../assets/content-img-1.png";
import sideImg1 from "../../../assets/about-img-2.jpg";
import sideImg2 from "../../../assets/content-img-3.png";

const cards = [
  {
    icon: FaAward,
    title: "Master Certified Trainer",
    desc: "This includes offering personalized feedback, fostering a sense of community through discussion.",
  },
  {
    icon: FaUserGraduate,
    title: "Coach Certification Program",
    desc: "This includes offering personalized feedback, fostering a sense of community through discussion.",
  },
];

const HowWeStart = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-[1440px] mx-auto px-24 flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* Left child: Images */}
        <div className="flex flex-row items-center gap-4 flex-1">
  {/* Main Image */}
  <div className="flex items-center justify-center">
    <Image
      src={mainImg}
      alt="Main Journey"
      width={400}
      height={220}
      className="rounded-br-4xl object-cover"
    />
  </div>

  {/* Side Images stacked */}
  <div className="flex flex-col mb-50 justify-between h-[220px]">
    <Image
      src={sideImg1}
      alt="Side Image 1"
      width={200}
      height={100}
      className="rounded-tr-full object-cover"
    />
    <Image
      src={sideImg2}
      alt="Side Image 2"
      width={200}
      height={100}
      className="rounded-tl-4xl object-cover"
    />
  </div>
</div>


        {/* Right child: Text + Button + Cards */}
        <div className="flex flex-col flex-1 items-start gap-4">
          {/* Button */}
          <button className="flex items-center gap-2 bg-[#38b7a6] text-white px-6 py-2 rounded-full hover:bg-teal-700 transition">
            Start Journey
          </button>

          {/* Heading */}
          <h1 className="text-4xl font-bold text-gray-800">
            How We Start Journey
          </h1>

          {/* Paragraph */}
          <p className="text-gray-600 max-w-md">
            We Care About Your Life For Better Future. This includes offering personalized feedback, fostering a sense of community through discussion forums and group projects, and providing continuous support to address challenges and improve.
          </p>

          {/* Cards below heading and paragraph */}
          <div className="flex flex-col gap-4 mt-4 w-full">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 border border-gray-300 p-4 rounded-lg w-full"
                >
                  <div className="bg-white p-3 rounded-full flex items-center justify-center text-[#38b7a6] text-2xl">
                    <Icon />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-gray-800">{card.title}</h3>
                    <p className="text-gray-600 text-sm">{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowWeStart;
