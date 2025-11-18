// components/CourseCategories.jsx
"use client";
import React from "react";
import { FaBriefcase, FaPaintBrush, FaUser, FaHeartbeat, FaBullhorn, FaChartLine, FaLaptopCode, FaVideo, FaDatabase, FaRocket, FaCode, FaMicrochip, FaGamepad } from "react-icons/fa";
import { useRouter } from "next/navigation";

const categories = [
  { name: "Business Management", icon: FaBriefcase, route: "/categories/business-management" },
  { name: "Arts & Design", icon: FaPaintBrush, route: "/categories/arts-design" },
  { name: "Personal Development", icon: FaUser, route: "/categories/personal-development" },
  { name: "Health & Fitness", icon: FaHeartbeat, route: "/categories/health-fitness" },

  { name: "Marketing", icon: FaBullhorn, route: "/categories/marketing" },
  { name: "Business & Finance", icon: FaChartLine, route: "/categories/business-finance" },
  { name: "Computer Science", icon: FaLaptopCode, route: "/categories/computer-science" },
  { name: "Video & Photography", icon: FaVideo, route: "/categories/video-photography" },
  { name: "Data Science", icon: FaDatabase, route: "/categories/data-science" },

  { name: "IT Startup Agency", icon: FaRocket, route: "/categories/it-startup-agency" },
  { name: "Software Company", icon: FaCode, route: "/categories/software-company" },
  { name: "High-Tech Company", icon: FaMicrochip, route: "/categories/high-tech-company" },
  { name: "3D Gaming Studio", icon: FaGamepad, route: "/categories/3d-gaming-studio" },
];

const CourseCategories = () => {
  const router = useRouter();

  const renderButtons = (items) => {
    return items.map((cat, idx) => {
      const Icon = cat.icon;
      return (
        <button
          key={idx}
          onClick={() => router.push(cat.route)}
          className="flex items-center gap-3 border border-gray-200 bg-[#f2f4f7] text-black px-4 py-2 rounded-full hover:bg-[#38b7a6] hover:text-white transition"
        >
          <Icon className="text-[#38b7a6] bg-gray-200 hover:bg-white rounded-full text-4xl px-1" /> {/* Icon color & size */}
          <span className="font-bold">{cat.name}</span>
        </button>
      );
    });
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-24 flex flex-col items-center gap-8">
        {/* Top Button */}
        <button className="flex items-center gap-3 bg-[#38b7a6] text-white px-6 py-3 rounded-full hover:bg-teal-700 transition">
          <FaBriefcase className="text-white text-2xl" /> Explore All Categories
        </button>

        {/* Heading */}
        <h2 className="text-4xl py-4 font-bold text-center">Select The Industry Where You Want To Learn</h2>
        

        {/* Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full">
          {renderButtons(categories.slice(0, 4))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 w-full">
          {renderButtons(categories.slice(4, 9))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full">
          {renderButtons(categories.slice(9, 13))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
