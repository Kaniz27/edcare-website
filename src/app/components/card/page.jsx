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
    <section className="bg-[#38b7a6] py-16">
      <div className="max-w-[1440px] mx-auto px-24 flex justify-between items-center gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center text-white font-bold p-6 ${
              idx !== 0 ? "border-l border-gray-400" : ""
            } flex-1`}
          >
            <p className="text-4xl">{stat.value}</p>
            <p className="text-2xl mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
