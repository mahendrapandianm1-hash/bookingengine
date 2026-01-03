import React from "react";
import { Link } from "react-router-dom"; // if using react-router

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 px-6 text-center">
      
      {/* Illustration / Icon */}
      <svg
        className="w-40 h-40 text-gray-300 mb-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l2-2 2 2m0 0l2-2 2 2m-6 0V4m0 10h6" />
      </svg>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
        404
      </h1>

      {/* Subheading */}
      <h2 className="text-2xl md:text-3xl font-playfair text-gray-700 mb-4">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-500 max-w-md mb-6">
        Sorry, the page you’re looking for doesn’t exist. It might have been removed,
        had its name changed, or is temporarily unavailable.
      </p>

      {/* CTA Button */}
      <Link
        to="/"
        className="bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300"
      >
        Go Back Home
      </Link>

    </div>
  );
}
