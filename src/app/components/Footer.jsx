"use client";

import React from "react";
import Image from "next/image";
import TopFooter from "./TopFooter";
import { 
  FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, 
  FaLink, FaCalendarAlt 
} from "react-icons/fa";

// Images imported from assets
import footerPost1 from "@/assets/footer-post-1.png";
import footerPost2 from "@/assets/footer-post-2.png";

const Footer = () => {
  const companyLinks = ["About Us", "Resource Center", "Careers", "Instructor", "Become A Teacher"];
  const usefulLinks = ["All Courses", "Digital Marketing", "Design & Branding", "Storytelling & Voice Over", "News & Blogs"];
  const recentPosts = [
    { title: "Where Dreams Find a Home", date: "20 April, 2025", image: footerPost1 },
    { title: "Where Dreams Find a Home", date: "20 April, 2025", image: footerPost2 },
  ];
  const socialIcons = [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn];

  return (
    <div>
        <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-[1400px] mx-auto px-24 flex flex-wrap justify-between gap-12 border-b border-gray-700 pb-12">
        <TopFooter></TopFooter>

        {/* 1️⃣ Get in Touch */}
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Get in Touch!</h3>
          <p>Fusce varius, dolor tempor interdum tristiquei bibendum.</p>
          <div className="flex items-center gap-2">
            <FaPhoneAlt /> <span>(702) 123-1478</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope /> <span>info@company.com</span>
          </div>
          <div className="flex gap-4 mt-4">
            {socialIcons.map((Icon, index) => (
              <Icon key={index} className="hover:text-gray-400 cursor-pointer" />
            ))}
          </div>
        </div>

        {/* 2️⃣ Company Info */}
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Company Info</h3>
          {companyLinks.map((link, index) => (
            <div key={index} className="flex items-center gap-2 hover:text-gray-300 cursor-pointer">
              <FaLink /> <span>{link}</span>
            </div>
          ))}
        </div>

        {/* 3️⃣ Useful Links */}
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Useful Links</h3>
          {usefulLinks.map((link, index) => (
            <div key={index} className="flex items-center gap-2 hover:text-gray-300 cursor-pointer">
              <FaLink /> <span>{link}</span>
            </div>
          ))}
        </div>

        {/* 4️⃣ Recent Posts */}
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Recent Post</h3>
          {recentPosts.map((post, index) => (
            <div key={index} className="flex items-start gap-3">
              <Image 
                src={post.image} 
                alt={post.title} 
                width={64} 
                height={64} 
                className="rounded object-cover"
              />
              <div className="flex flex-col gap-1">
                <span>{post.title}</span>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <FaCalendarAlt /> {post.date}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="mt-12 text-center text-gray-400 text-sm">
        © 2025 EdCare. All Rights Reserved.
      </div>
    </footer>
    </div>
  );
};

export default Footer;
