"use client";
import React from "react";
import { FaArrowRight, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const TeamSections = () => {
  const team = [
    { img: "https://html.rrdevs.net/edcare/assets/img/team/team-men-1.png", name: "John Carter", role: "Senior Instructor" },
    { img: "https://html.rrdevs.net/edcare/assets/img/team/team-men-2.png", name: "Sarah Wilson", role: "UI/UX Designer" },
    { img: "https://html.rrdevs.net/edcare/assets/img/team/team-men-3.png", name: "Michael Lee", role: "Full Stack Developer" },
    { img: "https://html.rrdevs.net/edcare/assets/img/team/team-men-4.png", name: "Emma Brown", role: "Course Creator" },
  ];

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="container mx-auto px-24 text-center">

        {/* Top Button & Heading */}
        <div className="flex justify-center">
          <button className="flex items-center gap-3 bg-white text-black hover:bg-teal-700 hover:text-white border border-black rounded-full px-8 py-1 transition">
            
            {/* Icon */}
            <div className="bg-[#38b7a6] p-1 rounded-full text-white flex items-center justify-center">
              <FaArrowRight />
            </div>

            <span className="font-medium">Our Instructors</span>
          </button>
        </div>

        <p className="text-3xl text-black my-10">
          Meet Our Expert Instructor
        </p>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {team.map((member, index) => (
            <div
              key={index}
              className=" shadow-md rounded-2xl p-6 bg-[#e1f4f2] text-center hover:shadow-xl transition cursor-pointer"
            >
              {/* Image */}
              <div className="w-32 h-32  mx-auto mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover  "
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold">{member.name}</h3>

              {/* Role */}
              <p className="text-[#38b7a6]  mt-1">{member.role}</p>

              {/* Social Icons */}
              <div className="flex items-center justify-center gap-4 mt-4 text-gray-700">
                <a className="hover:text-gray-400 text-[#38b7a6] transition">
                  <FaFacebookF size={18} />
                </a>
                <a className="hover:text-[#38b7a6] text-[#38b7a6]  transition">
                  <FaTwitter size={18} />
                </a>
                <a className="hover:text-[#38b7a6] text-[#38b7a6]  transition">
                  <FaLinkedinIn size={18} />
                </a>
                <a className="hover:text-[#38b7a6] text-[#38b7a6]  transition">
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TeamSections;
