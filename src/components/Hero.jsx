import React from "react";
import HeroImage from "../assets/HeroSection.png";
export const Hero = () => {
  return (
    <div className='relative flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white h-screen  bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${HeroImage})` }}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        
        <p className="inline-block bg-[#ffc40e]/90 text-black px-4 py-1 rounded-full text-sm mt-20">
          The Ultimate Destination for Your Stay
        </p>

        <h1 className="font-playfair text-3xl md:text-[56px] md:leading-[60px] font-extrabold mt-4">
          Discover Your Perfect Gateway Destination
        </h1>

        <p className="mt-3 text-sm md:text-base text-gray-200">
          Unparalleled luxury and comfort await at the world’s most exclusive
          hotels and resorts. Start your journey today.
        </p>

        {/* Search Form */}
        <form className="mt-8 bg-white/90 backdrop-blur-md text-gray-700 rounded-2xl px-6 py-5 flex flex-col md:flex-row gap-4 shadow-xl">

          {/* Destination */}
          <div className="flex-1">
            <label className="text-xs font-medium">Destination</label>
            <input
              type="text"
              placeholder="Where are you going?"
              className="w-full mt-1 rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/20"
            />
          </div>

          {/* Check-in */}
          <div>
            <label className="text-xs font-medium">Check In</label>
            <input
              type="date"
              className="mt-1 rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none"
            />
          </div>

          {/* Check-out */}
          <div>
            <label className="text-xs font-medium">Check Out</label>
            <input
              type="date"
              className="mt-1 rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none"
            />
          </div>

          {/* Guests */}
          <div className="w-24">
            <label className="text-xs font-medium">Guests</label>
            <input
              type="number"
              min={1}
              max={4}
              className="w-full mt-1 rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none"
            />
          </div>

          {/* Button */}
          <button className="flex items-center justify-center gap-2 bg-black text-white rounded-xl px-6 py-3 mt-auto hover:bg-gray-900 transition max-md:w-full">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>
            Search
          </button>

        </form>
      </div>
    </div>
  );
};
