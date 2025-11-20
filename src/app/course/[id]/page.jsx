// /app/course/[course_id]/page.jsx
import Link from "next/link";
import React from "react";
import { FaUserGraduate, FaEye, FaStar } from "react-icons/fa";

const Page = async ({ params }) => {
  // 1. Get dynamic route ID
  const { id } = await params;
  console.log (id)

  // 2. Fetch selected course
  const res = await fetch(`http://localhost:5000/courses/${id}`, {
    cache: "no-store",
  });


  const course = await res.json();

  // 4. UI rendering
  return (
    <div>
      <div className="container mx-auto px-24 mt-10 mb-20 grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* LEFT SIDE (70%) */}
      <div className="md:col-span-2 space-y-6">

        {/* CARD */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">

          {/* Small Image */}
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          {/* BUTTONS */}
          <div className="flex gap-3 mb-4">
            <button className="bg-green-600 text-white px-4 py-1 rounded-full font-semibold text-sm">
              Best Seller
            </button>
            <button className="bg-blue-600 text-white px-4 py-1 rounded-full font-semibold text-sm">
              Latest
            </button>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>

          {/* Instructor Section */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src={course.instructor_image}
              className="w-14 h-14 rounded-full shadow"
            />
            <div className="text-gray-700">
              <p className="font-semibold text-lg">{course.instructor}</p>
              <p className="text-sm text-gray-500">{course.designation}</p>
            </div>
          </div>

          {/* Course Meta */}
          <div className="flex flex-wrap gap-6 text-gray-700 text-lg mb-6">

            <span className="flex items-center gap-2">
              Lessons: {course.lesson}
            </span>

            <span className="flex items-center gap-2">
              <FaUserGraduate /> {course.students} Students
            </span>

            <span className="flex items-center gap-2">
              <FaEye /> {course.views} Views
            </span>

            <span className="flex items-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="text-gray-700 ml-2">({course.rating})</span>
            </span>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Course Details
            </h2>

            <p className="text-gray-700 leading-relaxed">
              {course.description
                ? course.description
                : "This course provides full step-by-step guidance for beginners and professionals."}
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (30%) FIXED SIDEBAR */}
      <div className="space-y-6 sticky top-20 h-fit">

        {/* PRICE + BUTTONS */}
        <div className="border border-gray-200 rounded-xl p-6 shadow bg-white">

          <p className="text-3xl font-bold text-green-600 mb-6">
            {course.price}
          </p>

          {/* ADD TO CART */}
          <Link href="/cart">
            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-full font-semibold">
              ADD TO CART
            </button>
          </Link>

          {/* BUY NOW */}
          <Link href="/checkout">
            <button className="w-full bg-gray-900 hover:bg-black text-white py-3 rounded-full mt-3 font-semibold">
              BUY NOW
            </button>
          </Link>
        </div>

        {/* Course Information Box — Lomba + Stylish */}
        <div className="border border-gray-200 rounded-xl p-8 shadow bg-white">

          <h3 className="text-xl font-bold mb-6">Course Information</h3>

          <div className="space-y-4 text-gray-700">
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Designation:</strong> {course.designation}</p>
            <p><strong>Lessons:</strong> {course.lesson}</p>
            <p><strong>Students:</strong> {course.students}</p>
            <p><strong>Views:</strong> {course.views}</p>
            <p><strong>Rating:</strong> {course.rating}</p>
            <p><strong>ID:</strong> {course.id}</p>
            <p><strong>Type:</strong> {course.type}</p>
          </div>

          <button className="w-full bg-blue-500 text-white py-2 rounded-full mt-6 font-semibold">
            Share This Course
          </button>
        </div>
      </div>

    </div>
    </div>
  );
};

export default Page;