// components/StatsSection.jsx
import React from "react";

const stats = [
  { value: "3,192+", label: "Successfully Trained" },
  { value: "15,485+", label: "Classes Completed" },
  { value: "97.55%", label: "Satisfaction Rate" },
  { value: "97.55%", label: "Satisfaction Rate" },
];

const StatsSection = () => {
  return (
    <section className="bg-[#38b7a6] py-16 mt-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                      gap-10 lg:gap-6 text-center">

        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center text-white font-bold p-6 
            ${idx !== 0 ? "lg:border-l lg:border-gray-200" : ""}`}
          >
            <p className="text-4xl md:text-5xl">{stat.value}</p>
            <p className="text-xl md:text-2xl mt-2 font-medium">{stat.label}</p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default StatsSection;
