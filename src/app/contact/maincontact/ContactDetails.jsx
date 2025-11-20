"use client";

import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaRegPaperPlane } from "react-icons/fa";

const ContactDetails = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent:", form);
    alert("Your message has been submitted!");
  };

  return (
    <div className="container mx-auto px-24 mt-16 mb-20">

      {/* MAIN 2 COLUMN LAYOUT */}
      <div className="flex flex-col md:flex-row gap-10">

        {/* LEFT SIDE 60% - LEAVE A REPLY */}
        <div className="md:w-[60%] bg-white border border-gray-300 rounded-xl p-8 shadow">

          <h2 className="text-3xl font-bold text-gray-900 mb-3">Leave A Reply</h2>
          <p className="text-gray-600 mb-8">
            Fill-up the form and message us your amazing question
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <div>
              <label className="text-gray-700 font-semibold">Your Name</label>
              <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3 mt-2">
                <FaUser className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full outline-none"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-gray-700 font-semibold">Your Email</label>
              <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-3 mt-2">
                <FaEnvelope className="text-gray-500" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full outline-none"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-gray-700 font-semibold">Message</label>
              <div className="flex items-start gap-3 border border-gray-300 rounded-lg p-3 mt-2">
                <FaRegPaperPlane className="text-gray-500 mt-1" />
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full outline-none resize-none"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                ></textarea>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="bg-[#38b7a6] hover:bg-teal-700 text-white py-3 px-6 rounded-full font-semibold text-lg transition w-full"
            >
              Submit Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE 40% - OFFICIAL INFORMATION */}
        <div className="md:w-[40%] bg-gray-50 border border-gray-200 rounded-xl p-8 shadow">

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Office Information</h2>

          {/* PHONE + EMAIL BOX */}
          <div className="bg-white border border-gray-300 rounded-xl p-6 flex gap-4 items-start mb-6 shadow-sm">
            <FaPhone className="text-[#38b7a6] text-2xl mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Phone Number & Email</h4>
              <p className="text-gray-700">(+65) - 48596 - 5789</p>
              <p className="text-gray-700">hello@edcare.com</p>
            </div>
          </div>

          {/* LOCATION BOX */}
          <div className="bg-white border border-gray-300 rounded-xl p-6 flex gap-4 items-start mb-6 shadow-sm">
            <FaMapMarkerAlt className="text-[#38b7a6] text-2xl mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Our Office Address</h4>
              <p className="text-gray-700">
                2690 Hilton Street Victoria Road, <br />
                New York, Canada
              </p>
            </div>
          </div>

          {/* WORK TIME BOX */}
          <div className="bg-white border border-gray-300 rounded-xl p-6 flex gap-4 items-start shadow-sm">
            <FaClock className="text-[#38b7a6] text-2xl mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Official Work Time</h4>
              <p className="text-gray-700">Monday - Friday: 09:00 - 20:00</p>
              <p className="text-gray-700">Sunday & Saturday: 10:30 - 22:00</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
