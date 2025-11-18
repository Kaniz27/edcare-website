// components/WhyChooseUs.jsx
import React from "react";
import Image from "next/image";
import {
  FaArrowRight,
  FaBook,
  FaCreditCard,
  FaCalendarAlt,
} from "react-icons/fa";
import topImg1 from "../../../assets/promo-shape-1.png";
import topImg2 from "../../../assets/promo-shape-2.png";
import cardImg1 from "../../../assets/promo-img-1.png";
import cardImg2 from "../../../assets/promo-img-2.png";
import cardImg3 from "../../../assets/promo-img-3.png";

const cards = [
  {
    icon: FaBook,
    image: cardImg1,
    title: "Book Free Consultation",
    desc: "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.",
  },
  {
    icon: FaCreditCard,
    image: cardImg2,
    title: "Make Easy Payment",
    desc: "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.",
  },
  {
    icon: FaCalendarAlt,
    image: cardImg3,
    title: "Schedule First Lesson",
    desc: "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#182226] py-12 pb-26">
      <div className="max-w-[1440px] mx-auto px-24 flex flex-col items-center gap-8">
        {/* Top Images Section */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
          <Image
            src={topImg1}
            alt="Top Image 1"
            width={150}
            height={100}
            className="rounded-lg object-cover"
          />
          {/* Button and Text Section */}
          <div className="flex flex-col items-center justify-center gap-4 mt-10">
            <button className="flex items-center gap-3 bg-[#38b7a6] text-white px-6 py-3 rounded-full hover:bg-teal-700 transition">
              <FaArrowRight className="text-white text-xl" /> Explore Yourself
            </button>

            <p className="text-center text-white text-4xl font-bold max-w-xl mx-auto">
              Explore Yourself All Over The World
            </p>
          </div>

          <Image
            src={topImg2}
            alt="Top Image 2"
            width={150}
            height={100}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Cards */}
       <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full mt-6">
  {cards.map((card, idx) => {
    const Icon = card.icon;
    return (
      <div
        key={idx}
        className={`flex flex-col items-center text-center rounded-lg p-4 w-full md:w-1/3 ${
          idx < cards.length - 1 ? "border-r-2 border-dotted border-gray-400 pr-4" : ""
        }`}
      >
        <div className="relative">
          {/* Card Image */}
          <Image
            src={card.image}
            alt={card.title}
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
          {/* Icon on top of image */}
          <div className="absolute -top-4  left-1/2 transform -translate-x-1/2 bg-[#38b7a6] text-white p-3 rounded-full text-3xl flex items-center justify-center">
            <Icon />
          </div>
        </div>
        <h3 className="text-xl text-white font-bold mt-6">{card.title}</h3>
        <p className="text-white mt-1">{card.desc}</p>
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
