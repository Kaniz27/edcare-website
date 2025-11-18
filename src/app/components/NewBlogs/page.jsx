// components/NewsBlogs.jsx
import React from "react";
import { FaArrowRight, FaCalendar, FaTag } from "react-icons/fa";
import postImg1 from "../../../assets/post-1.jpg";
import postImg2 from "../../../assets/post-2.png";

const posts = [
  {
    image: postImg1,
    button: "Learning",
    title: "Repurpose mission critical action life items rather total linkage suds",
    date: "August 15, 2025",
    category: "Marketing",
  },
  {
    image: postImg2,
    button: "Learning",
    title: "Strategies for Managing Stress and Preventing Burnout in Education",
    date: "August 15, 2025",
    category: "Marketing",
  },
];

const NewsBlogs = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-[1440px] mx-auto px-24 flex flex-col items-center gap-8">
        
        {/* Top Button and Heading */}
        <div className="flex flex-col items-center gap-4">
          <button className="flex items-center gap-3 bg-[#38b7a6] text-white px-6 py-3 rounded-full hover:bg-teal-700 transition">
            <FaArrowRight className="text-white text-xl" /> News & Blogs
          </button>
          <h2 className="text-3xl font-bold text-center">Latest News Updates</h2>
        </div>

        {/* Posts */}
        <div className="flex flex-col md:flex-row justify-between gap-6 w-full mt-6">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="relative w-full md:w-[48%] rounded-lg overflow-hidden shadow-lg flex items-center justify-center"
              style={{
                backgroundImage: `url(${post.image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "300px",
              }}
            >
              {/* Overlay */}
              <div className=" bg-opacity-40 p-6 flex flex-col items-center justify-center text-center gap-3">
                {/* Top Button */}
                <button className="bg-[#38b7a6] text-white px-3 py-1 rounded-full w-max">
                  {post.button}
                </button>

                {/* Title */}
                <h3 className="text-white text-lg font-bold">{post.title}</h3>

                {/* Date & Category */}
                <div className="flex items-center font-bold gap-4 text-gray-200 text-sm">
                  <span className="flex items-center  gap-1">
                    <FaCalendar></FaCalendar>{post.date}
                    
                  </span>
                  <span className="flex items-center gap-1">
                    <FaTag /> {post.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewsBlogs;
