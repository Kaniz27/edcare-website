import React from "react";
import { FaPhone, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="max-w-[1400px] mx-auto px-24 py-3 flex justify-between items-center text-sm">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-8">

          {/* Phone */}
          <div className="flex items-center gap-2">
            <FaPhone />
            <p>256 214 203 215</p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <p>258 Helano Street, New York</p>
          </div>

          {/* Time */}
          <div className="flex items-center gap-2">
            <FaClock />
            <p>Mon - Sat: 8:00 - 15:00</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-8">

          {/* Login / Register */}
          <p className="cursor-pointer hover:text-gray-300">Login / Register</p>

          {/* Follow Us */}
          <div className="flex items-center gap-3">
            <p>Follow Us:</p>

            <div className="flex gap-3 text-white">
              <FaFacebookF className="cursor-pointer hover:text-gray-300" />
              <FaTwitter className="cursor-pointer hover:text-gray-300" />
              <FaInstagram className="cursor-pointer hover:text-gray-300" />
              <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopHeader;
