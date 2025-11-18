// components/OurInstructors.jsx
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import instructor1 from "../../../assets/hero-img-1.png";
import instructor2 from "../../../assets/faq-img.png";
import instructor3 from "../../../assets/about-img-1.jpg";
import instructor4 from "../../../assets/faq-img.png";

const instructors = [
  {
    image: instructor1,
    name: "Zaramane Mass Likan",
    role: "Online Teachers",
  },
  {
    image: instructor2,
    name: "Amelia Grace Lily",
    role: "Online Teachers",
  },
  {
    image: instructor3,
    name: "Mason Logan Dee",
    role: "Online Teachers",
  },
  {
    image: instructor4,
    name: "Isabella Charlotte",
    role: "Online Teachers",
  },
];

const OurInstructors = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-[1440px] mx-auto px-24 flex flex-col items-center gap-8">

        {/* Button + Heading */}
        <div className="flex flex-col items-center gap-4">
          <button className="flex items-center gap-3 bg-[#38b7a6] text-white px-6 py-3 rounded-full hover:bg-teal-700 transition">
            Explore Instructors
          </button>
          <h2 className="text-3xl font-bold text-center">
            Explore Our World's Best Courses
          </h2>
        </div>

        {/* Instructor Cards */}
        <div className="flex flex-wrap justify-between gap-6 w-full mt-6">
          {instructors.map((inst, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-lg p-4 flex flex-col items-center text-center font-bold w-full sm:w-[48%] md:w-[23%] group shadow-lg"
            >
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={inst.image}
                  alt={inst.name}
                  fill
                  className="object-cover rounded-lg"
                />
                {/* Social Icons on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
                  <FaFacebookF className="text-white text-lg cursor-pointer" />
                  <FaTwitter className="text-white text-lg cursor-pointer" />
                  <FaLinkedinIn className="text-white text-lg cursor-pointer" />
                </div>
              </div>
              <h3 className="mt-4 text-lg">{inst.name}</h3>
              <p className="text-[#38b7a6] text-sm">{inst.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurInstructors;
