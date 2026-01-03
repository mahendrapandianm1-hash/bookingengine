import React from "react";
import RoomCard from "../components/RoomCard"; // Reusable RoomCard component
import {useNavigate} from 'react-router-dom';
const rooms = [
  {
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    title: "Deluxe Room",
    guests: 2,
    bed: "King",
    price: 4500,
    view: "Garden View",
    badge: "25% OFF",
  },
  {
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    title: "Executive Suite",
    guests: 4,
    bed: "King + Sofa",
    price: 7500,
    view: "City View",
    badge: "",
  },
  {
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    title: "Family Room",
    guests: 4,
    bed: "King + Bunk",
    price: 6000,
    view: "City View",
    badge: "",
  },
  {
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
    title: "Standard Room",
    guests: 2,
    bed: "Queen",
    price: 3500,
    view: "Ocean View",
    badge: "Recommended",
  },
];

export default function RoomTypePage() {
   const navigate = useNavigate();
  const handleBookNow = () =>
  {
    navigate('/room-info'); 
  }  
  return (
    <div className="bg-slate-50 min-h-screen px-6 md:px-16 lg:px-24 py-12">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-playfair font-semibold mb-4 mt-20">
          Choose Your Room
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Select from our handpicked rooms that offer comfort, style, and
          luxury. Every room is designed to provide an unforgettable stay.
        </p>
      </div>

      {/* Room Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {rooms.map((room, i) => (
          <RoomCard key={i} {...room}  onBookNow={handleBookNow} />
        ))}
      </div>

      {/* Optional Pagination / Load More */}
      <div className="flex justify-center mt-12">
        <button className="px-6 py-3 rounded-full bg-black text-white shadow-lg hover:bg-gray-900 transition-all">
          Load More Rooms
        </button>
      </div>
    </div>
  );
}
