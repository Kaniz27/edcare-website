import React from "react";
import Link from "next/link";
import { FaRegCalendarAlt, FaTag, FaArrowRight } from "react-icons/fa";

// Server Component: async fetch allowed
const BlogCard = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();

  return (
    <div className="container mx-auto px-6 py-20 md:px-12 lg:px-24 mt-10">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center text-gray-500 text-sm mb-2 space-x-4">
                <div className="flex items-center gap-1">
                  <FaRegCalendarAlt /> <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaTag /> <span>{blog.category}</span>
                </div>
              </div>
              <h2 className="font-semibold text-lg mb-4">{blog.title}</h2>
              <Link href={`/blog/${blog.id}`}>
                <button className="flex items-center text-[#38b7a6] border border-gray-300 px-8 rounded-full py-2 gap-2  hover:text-blue-800 font-medium">
                  {blog.button} <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
