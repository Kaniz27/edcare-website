"use client";
import React from "react";
import { FaArrowRight, FaTools, FaLaptopCode, FaUserGraduate } from "react-icons/fa";

const AboutFeatures = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="container mx-auto px-24 text-center">
        
        {/* Button Center Wrapper */}
        <div className="flex justify-center mb-4">
          <button className="flex items-center gap-3 bg-white text-black hover:bg-teal-700 border border-black rounded-full px-8 py-1 transition">
            
            {/* Icon with circular bg */}
            <div className="bg-[#38b7a6] p-1 rounded-full text-white flex items-center justify-center">
              <FaArrowRight />
            </div>

            {/* Button Text */}
            <span className="font-medium">Our Features</span>
          </button>
        </div>

        <p className="text-3xl text-black my-10">
          Online Education That Improves You
        </p>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <div className="mx-auto bg-gray-200 p-6 rounded-full w-fit mb-4">
              <FaLaptopCode size={40} className="text-[#38b7a6]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Interactive Learning Tools</h3>
            <p className="text-gray-600">
              Incorporating quizzes, simulations, and multimedia content.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <div className="mx-auto bg-gray-200 p-6 rounded-full w-fit mb-4">
              <FaTools size={40} className="text-[#38b7a6]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Flexible Access</h3>
            <p className="text-gray-600">
              Learn anytime, anywhere with full flexibility.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <div className="mx-auto bg-gray-200 p-6 rounded-full w-fit mb-4">
              <FaUserGraduate size={40} className="text-[#38b7a6]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Learning Paths</h3>
            <p className="text-gray-600">
              Tailored learning experiences built for each student.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutFeatures;
