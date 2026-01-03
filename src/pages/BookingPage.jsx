import React, { useState } from "react";
import RoomCard from "../components/BookRoomCard";
import {useNavigate} from 'react-router-dom';
const rooms = [
  {
    title: "Deluxe Room",
    price: 4500,
    guests: 2,
    bed: "King Bed",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    amenities: ["Free Wi-Fi", "AC", "Room Service", "Mini Bar"],
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    ],
  },
  {
    title: "Family Room",
    price: 6000,
    guests: 4,
    bed: "King + Bunk",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    amenities: ["Free Wi-Fi", "AC", "Room Service", "Mini Bar"],
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    ],
  },
  {
    title: "Executive Suite",
    price: 7500,
    guests: 3,
    bed: "King Bed",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    amenities: ["Free Wi-Fi", "AC", "Room Service", "Mini Bar"],
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    ],
  },
];

export default function BookingPage() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [location, setLocation] = useState("");
  const [roomCount, setRoomCount] = useState(1);
  
  const navigate = useNavigate();
  // 🔥 Selected room state
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Calculate nights
  const nights =
    checkIn && checkOut
      ? Math.max(
          1,
          (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
        )
      : 1;

  const total = selectedRoom
    ? selectedRoom.price * nights * roomCount
    : 0;

  return (
    <div className="min-h-screen pt-20 md:pt-13 bg-gradient-to-b from-slate-100 via-slate-50 to-white">

      {/* 🔍 HERO SEARCH SECTION */}
      <div className="relative pt-5 pb-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
           <h1 className="text-white text-6xl font-bold
  tracking-tight
  mt-4">
        Find your next stay
        </h1>
<p className="mt-3 text-sm md:text-base text-gray-200">Search deals on Rooms...</p>
          <div
  className="
    bg-white/95 backdrop-blur-md
    rounded-3xl
    shadow-[0_20px_40px_rgba(0,0,0,0.12)]
    border border-gray-100
    p-4 md:p-6
    grid grid-cols-1 md:grid-cols-7
    gap-4 items-end
  "
>
  {/* Location */}
  <div className="md:col-span-2">
    <label className="block text-xs font-semibold text-gray-500 mb-1">
      Location
    </label>
    <input
      type="text"
      placeholder="City, hotel, landmark"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      className="
        w-full rounded-xl border border-gray-200
        px-4 py-3 text-sm
        outline-none
        focus:border-indigo-500
        focus:ring-2 focus:ring-indigo-500/30
      "
    />
  </div>

  {/* Check-in */}
  <div>
    <label className="block text-xs font-semibold text-gray-500 mb-1">
      Check-in
    </label>
    <input
      type="date"
      value={checkIn}
      onChange={(e) => setCheckIn(e.target.value)}
      className="
        w-full rounded-xl border border-gray-200
        px-4 py-3 text-sm
        outline-none
        focus:border-indigo-500
        focus:ring-2 focus:ring-indigo-500/30
      "
    />
  </div>

  {/* Check-out */}
  <div>
    <label className="block text-xs font-semibold text-gray-500 mb-1">
      Check-out
    </label>
    <input
      type="date"
      value={checkOut}
      onChange={(e) => setCheckOut(e.target.value)}
      className="
        w-full rounded-xl border border-gray-200
        px-4 py-3 text-sm
        outline-none
        focus:border-indigo-500
        focus:ring-2 focus:ring-indigo-500/30
      "
    />
  </div>

  {/* Guests */}
  <div>
    <label className="block text-xs font-semibold text-gray-500 mb-1">
      Guests
    </label>
    <select
      value={guests}
      onChange={(e) => setGuests(Number(e.target.value))}
      className="
        w-full rounded-xl border border-gray-200
        px-4 py-3 text-sm bg-white
        outline-none
        focus:border-indigo-500
        focus:ring-2 focus:ring-indigo-500/30
      "
    >
      <option value="1">1 Guest</option>
      <option value="2">2 Guests</option>
      <option value="3">3 Guests</option>
      <option value="4">4 Guests</option>
    </select>
  </div>

  {/* Rooms */}
  {/*<div>
    <label className="block text-xs font-semibold text-gray-500 mb-1">
      Rooms
    </label>
    <select
      value={roomCount}
      onChange={(e) => setRoomCount(Number(e.target.value))}
      className="
        w-full rounded-xl border border-gray-200
        px-4 py-3 text-sm bg-white
        outline-none
        focus:border-indigo-500
        focus:ring-2 focus:ring-indigo-500/30
      "
    >
      <option value="1">1 Room</option>
      <option value="2">2 Rooms</option>
      <option value="3">3 Rooms</option>
      <option value="4">4 Rooms</option>
    </select>
  </div> */}

  {/* Search Button */}
  <div>
    <button
      className="
       flex items-center justify-center gap-5
      bg-black text-white
      rounded-2xl px-8 py-4
      font-semibold text-sm
      hover:bg-gray-900
      transition-all duration-200
      shadow-lg shadow-indigo-600/30
      lg:mt-auto
      w-full lg:w-[220px]
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
  </div>
</div>

        </div>
      </div>

      {/* 🧩 CONTENT AREA */}
      <div className="max-w-6xl mx-auto px-6 py-14 flex gap-8 relative">

        {/* ⬅️ FILTERS */}
        

        {/* ➡️ ROOMS + PRICE SUMMARY */}
        <main className="flex-1 flex gap-6">

          {/* ROOM LIST */}
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold">Available Rooms</h2>

            {rooms.map((room, i) => (
              <RoomCard
                key={i}
                {...room}
                onSelect={setSelectedRoom} // 🔥 select room
              />
            ))}
          </div>

          {/* PRICE SUMMARY */}
{/* Desktop Sidebar */}
<aside className="hidden md:block w-80 sticky top-28 h-fit">
  <div className="bg-white rounded-3xl shadow-xl p-6">
    <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>

    {!selectedRoom ? (
      <p className="text-gray-500 text-sm">
        Select a room to see price details
      </p>
    ) : (
      <>
        <div className="flex justify-between mb-2">
          <span>{selectedRoom.title}</span>
          <span>₹{selectedRoom.price}</span>
        </div>

        <div className="flex justify-between mb-2 text-sm text-gray-600">
          <span>
            {nights} Night × {roomCount} Room
          </span>
          <span>₹{selectedRoom.price * nights * roomCount}</span>
        </div>

        <hr className="my-4" />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <button onClick={()=>navigate('/guest-info')} className="mt-6 w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition">
          Continue Booking
        </button>
      </>
    )}
  </div>
</aside>

{/* Mobile View */}
<div className="md:hidden mt-6">
  <div className="bg-white rounded-3xl shadow-xl p-6">
    <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>

    {!selectedRoom ? (
      <p className="text-gray-500 text-sm">
        Select a room to see price details
      </p>
    ) : (
      <>
        <div className="flex justify-between mb-2">
          <span>{selectedRoom.title}</span>
          <span>₹{selectedRoom.price}</span>
        </div>

        <div className="flex justify-between mb-2 text-sm text-gray-600">
          <span>
            {nights} Night × {roomCount} Room
          </span>
          <span>₹{selectedRoom.price * nights * roomCount}</span>
        </div>

        <hr className="my-4" />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <button className="mt-6 w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition">
          Continue Booking
        </button>
      </>
    )}
  </div>
</div>

        </main>
      </div>
    </div>
  );
}
