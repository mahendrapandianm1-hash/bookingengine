import React from "react";
import RoomCard from "./RoomCard";
import {useNavigate} from 'react-router-dom';
export const FeaturedDestination = () => {
  const navigate = useNavigate();
  const handleBookNow = () =>
  {
    navigate('/room-book'); 
  }
  return (
    <div className="flex flex-col min-h-screen px-6 md:px-16 lg:px-24 bg-slate-50 py-5">
      
      {/* Heading */}
<div className="flex flex-col items-center text-center mb-12">
  {/* Accent line */}
  <span className="uppercase tracking-[0.3em] text-xs font-medium text-primary-600 mb-3">
    Handpicked Stays
  </span>

  <h1 className="text-3xl md:text-4xl lg:text-[42px] font-playfair font-semibold leading-tight">
    Featured Destinations
  </h1>

  <p className="text-sm md:text-base text-gray-500 mt-4 max-w-2xl leading-relaxed">
    Discover our curated collection of exceptional properties, designed to offer luxury,
    comfort, and unforgettable experiences across the world.
  </p>
</div>


      {/* Cards */}
      <div className="mt-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <RoomCard
            image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            title="Deluxe Room"
            guests={2}
            bed="King"
            price="4500"
            view="Garden View"
            badge="25% OFF"
            onBookNow={handleBookNow}
          />

          <RoomCard
            image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
            title="Executive Suite"
            guests={4}
            bed="King + Sofa"
            price="7500"
            view="City View"
            onBookNow={handleBookNow}
          />

          <RoomCard
            image="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
            title="Family Room"
            guests={4}
            bed="King + Bunk"
            price="6000"
            view="City View"
            onBookNow={handleBookNow} 
          />

          <RoomCard
            image="https://images.unsplash.com/photo-1618773928121-c32242e63f39"
            title="Standard Room"
            guests={2}
            bed="Queen"
            price="3500"
            badge="Recommended"
            view="Ocean View"
            onBookNow={handleBookNow}            
          />

        </div>
      </div>
    </div>
  );
};
