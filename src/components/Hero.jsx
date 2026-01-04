import React from "react";
import HeroImage from "../assets/HeroSection.png";
import {useNavigate} from 'react-router-dom';
export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className='relative flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white min-h-screen  bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${HeroImage})` }}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        
        <p className="inline-block bg-[#ffc40e]/90 text-black px-4 py-1 rounded-full text-sm mt-20">
          The Ultimate Destination for Your Stay
        </p>

        <h1 className="text-white text-6xl font-bold
  tracking-tight
  [text-shadow:_0_2px_6px_rgba(0,0,0,0.8)] font-playfair text-3xl md:text-[56px] md:leading-[60px] font-extrabold mt-4">
          Discover Your Perfect Gateway Destination
        </h1>

        <p className="mt-3 text-sm md:text-base text-gray-200">
          Unparalleled luxury and comfort await at the world’s most exclusive
          hotels and resorts. Start your journey today.
        </p>

        {/* Search Form */}
        <form className="
  mt-8 bg-white/95 backdrop-blur-md text-gray-700
  rounded-3xl px-6 py-6
  flex flex-col lg:flex-row gap-5
  shadow-[0_15px_40px_rgba(79,70,229,0.25)] border border-gray-100
" onSubmit={()=>navigate('/room-info')}>

  {/* Destination */}
  <div className="flex-1 relative">
    <label className="text-xs font-semibold text-gray-500">
      Destination
    </label>
    <div className="relative mt-1">
      <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
        📍
      </span>
      <input
        type="text"
        placeholder="Where are you going?"
        className="
          w-full rounded-xl border border-gray-200
          pl-9 pr-3 py-3 text-sm
          outline-none
          focus:ring-2 focus:ring-indigo-500/30
          focus:border-indigo-500
        "
      />
    </div>
  </div>

  {/* Check-in */}
  <div className="relative w-full lg:w-44">
    <label className="text-xs font-semibold text-gray-500">
      Check-in
    </label>
    <div className="relative mt-1">
      <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
        📅
      </span>
      <input
        type="date"
        className="
          w-full rounded-xl border border-gray-200
          pl-9 pr-3 py-3 text-sm
          focus:ring-2 focus:ring-indigo-500/30
          focus:border-indigo-500
        "
      />
    </div>
  </div>

  {/* Check-out */}
  <div className="relative w-full lg:w-44">
    <label className="text-xs font-semibold text-gray-500">
      Check-out
    </label>
    <div className="relative mt-1">
      <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
        📅
      </span>
      <input
        type="date"
        className="
          w-full rounded-xl border border-gray-200
          pl-9 pr-3 py-3 text-sm
          focus:ring-2 focus:ring-indigo-500/30
          focus:border-indigo-500
        "
      />
    </div>
  </div>

  {/* Guests */}
  <div className="w-full lg:w-32">
    <label className="text-xs font-semibold text-gray-500">
      Guests
    </label>
    <input
      type="number"
      min={1}
      max={10}
      className="
        w-full mt-1 rounded-xl border border-gray-200
        px-3 py-3 text-sm
        outline-none
        focus:ring-2 focus:ring-indigo-500/30
      "
    />
  </div>

  {/* bg-black text-white px-5 py-2 rounded-full hover:bg-gray-900 transition Search Button */}
  <button
    type="submit"
    className="
      flex items-center justify-center gap-5
      bg-black text-white
      rounded-2xl px-8 py-4
      font-semibold text-sm
      hover:bg-gray-900
      transition-all duration-200
      shadow-lg shadow-indigo-600/30
      lg:mt-auto
      w-full lg:w-auto
    "
  >
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      />
    </svg>
    Check Availability
  </button>

</form>

      </div>
    </div>
  );
};
