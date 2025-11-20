import React from "react";
import Link from "next/link";
import { FaUserGraduate, FaEye, FaStar } from "react-icons/fa";

// Server component: async fetch allowed
const Courses= async () => {
  const res = await fetch("http://localhost:5000/courses", { cache: "no-store" });
  const courses = await res.json();

  return (
    <div className="container mx-auto px-24 mt-10">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Explore Featured Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col items-center p-6 shadow-lg rounded-lg border bg-white hover:shadow-xl transition"
          >
            {/* Course Image */}
            <img
              src={course.image}
              alt={course.title}
              className="rounded-lg h-48 w-full object-cover mb-4"
            />

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-900 mb-2 text-start">
              {course.title}
            </h2>

            {/* Lesson, Students, Views */}
            <div className="flex justify-between w-full text-gray-600 mb-3 text-sm">
              <span>{course.lesson} Lessons</span>
              <span className="flex items-center gap-1">
                <FaUserGraduate /> {course.students}
              </span>
              <span className="flex items-center gap-1">
                <FaEye /> {course.views}
              </span>
            </div>

            {/* Instructor + Designation + Rating */}
            <div className="flex items-center justify-between w-full mb-3 text-gray-800">
              <div className="flex items-center gap-1">
                {/* Instructor Image */}
                <img
                  src={course.instructor_image}
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full"
                />
                {/* Name + Designation */}
                <div className="flex flex-col">
                  <span className="font-medium">{course.instructor}</span>
                  <span className="text-sm text-gray-500">{course.designation}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="text-gray-600 ml-2 text-sm">({course.rating})</span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full border-t border-gray-300 my-3"></div>

            {/* Price + Button */}
            <div className="flex justify-between items-center w-full">
              <p className="text-gray-800 font-semibold text-lg">{course.price}</p>
              <Link
                href={`/course/${course.id}`}
                className="bg-[#38b7a6] hover:bg-blue-700 text-white py-2 px-4 rounded-full transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;