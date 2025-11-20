"use client";
import React, { useState, useEffect } from "react";
import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    img: "https://html.rrdevs.net/edcare/assets/img/images/testi-author-3.png",
    title: "Interactive Learning Experience",
    text: "I've been thoroughly impressed with how engaging and interactive the courses are. The multimedia, quizzes, and live sessions keep me motivated.",
    name: "Markus Adina",
    role: "Writer",
  },
  {
    img: "https://html.rrdevs.net/edcare/assets/img/images/testi-author-3.png",
    title: "Flexible Learning",
    text: "This platform allows me to learn at my own pace. The lessons are clear and very enjoyable.",
    name: "Sophia Turner",
    role: "UI/UX Designer",
  },
  {
    img: "https://html.rrdevs.net/edcare/assets/img/images/testi-author-3.png",
    title: "Amazing Teachers",
    text: "The instructors are knowledgeable and always ready to help. I learned more here than in any physical class.",
    name: "James Hall",
    role: "Developer",
  },
  {
    img: "https://html.rrdevs.net/edcare/assets/img/images/testi-author-3.png",
    title: "High Quality Content",
    text: "Well-structured courses with real-world examples. This platform has boosted my confidence.",
    name: "Nancy Smith",
    role: "Photographer",
  }
];

const TestimonialSection= () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#182327] mb-20 py-20 items-center">
      <div className="max-w-[1440px] mx-auto px-24 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* LEFT SIDE */}
        <div className="lg:w-1/2">
          <button className="flex items-center gap-3 bg-white text-black hover:bg-teal-700 hover:text-white border border-black rounded-full px-12 py-2 transition mb-6">
            <div className="bg-[#38b7a6] p-1 rounded-full flex items-center justify-center text-white">
              <FaArrowRight />
            </div>
            <span className="font-medium">Testimonials</span>
          </button>

          <p className="text-4xl font-bold text-white">
            Interactive Learning Experience
          </p>
          <p className="text-white mt-3 w-[90%]">
            "I've been thoroughly impressed with how engaging and interactive the courses are on this platform."
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-1/2 relative overflow-hidden">
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-10 transition-all duration-700"
          >
            <FaQuoteLeft className="text-[#38b7a6] text-4xl mb-4" />

            <h3 className="text-2xl font-semibold mb-3">
              {testimonials[index].title}
            </h3>

            <p className="text-gray-600 italic leading-relaxed mb-6">
              "{testimonials[index].text}"
            </p>

            <div className="flex items-center gap-4 mt-4">
              <img
                src={testimonials[index].img}
                className="w-14 h-14 rounded-full object-cover border border-gray-200"
                alt=""
              />
              <div>
                <h4 className="text-lg font-semibold">{testimonials[index].name}</h4>
                <p className="text-gray-500">{testimonials[index].role}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
