import React from "react";
import { FaArrowRight } from "react-icons/fa";

const FeatureSection = () => {
  return (
    <section className="w-full bg-[#182327] py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col items-center text-center">

        {/* BUTTON */}
        <button className="flex items-center gap-3 bg-white text-black hover:bg-teal-700 hover:text-white border border-black rounded-full px-12 py-2 transition mb-6">
          <div className="bg-[#38b7a6] p-1 rounded-full flex items-center justify-center text-white">
            <FaArrowRight />
          </div>
          <span className="font-medium">Our Features</span>
        </button>

        {/* CENTERED TEXTS */}
        <p className="text-4xl sm:text-5xl font-bold text-white mb-3">
          Online Education That Improves You
        </p>
        

        {/* TWO CARDS */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">

          {/* CARD 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center">
            <img
              src="https://html.rrdevs.net/edcare/assets/img/images/video-img-1.png"
              className="w-100 h-100 object-cover rounded-2xl mb-4"
              alt="user"
            />

            <p className="text-xl font-semibold mb-1">Interactive Learning</p>
            <p className="text-gray-600 w-4/5">
              Enjoy engaging courses with tools that help you understand better.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center">
            <img
              src="https://html.rrdevs.net/edcare/assets/img/images/video-img-2.png"
              className="w-100 h-100 object-cover mb-4 rounded-2xl"
              alt="user"
            />

            <p className="text-xl font-semibold mb-1">Flexible Access</p>
            <p className="text-gray-600 w-4/5">
              Learn anytime, anywhere with easy mobile and desktop access.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeatureSection;
