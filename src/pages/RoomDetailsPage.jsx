import React, { useState } from "react";
import RoomCard from "../components/RoomCard";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useNavigate } from "react-router-dom";

const room = {
  title: "Deluxe Room",
  price: 4500,
  guests: 2,
  bed: "King",
  view: "Garden View",
  badge: "25% OFF",
  description:
    "Enjoy the comfort of our Deluxe Room with modern amenities, elegant décor, and a stunning garden view. Perfect for couples or solo travelers seeking luxury and tranquility.",
  amenities: ["Free Wi-Fi", "Air Conditioning", "Room Service", "Mini Bar"],
  gallery: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    "https://images.unsplash.com/photo-1576671083562-0e26e6b1b12e",
  ],
};

const otherRooms = [
  {
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    title: "Executive Suite",
    guests: 4,
    bed: "King + Sofa",
    price: 7500,
    view: "City View",
  },
  {
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    title: "Family Room",
    guests: 4,
    bed: "King + Bunk",
    price: 6000,
    view: "City View",
  },
  {
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
    title: "Standard Room",
    guests: 2,
    bed: "Queen",
    price: 3500,
    view: "Ocean View",
  },
];

export default function RoomDetailsPage() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/room-book");
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO */}
      <div className="w-full h-96 md:h-[500px] relative">
        <img
          src={room.gallery[0]}
          alt={room.title}
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => {
            setIndex(0);
            setOpen(true);
          }}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-semibold">
            {room.title}
          </h1>
        </div>
      </div>

      {/* DETAILS */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-10 flex flex-col md:flex-row gap-10">
        {/* LEFT */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">{room.title}</h2>
          <p className="text-gray-600">{room.description}</p>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">₹{room.price}/Night</span>
            <span className="text-gray-500">
              {room.guests} Guests • {room.bed} Bed
            </span>
          </div>

          {/* AMENITIES */}
          <div>
            <h3 className="font-semibold mb-2">Amenities</h3>
            <ul className="flex flex-wrap gap-3">
              {room.amenities.map((a, i) => (
                <li
                  key={i}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleBookNow}
            className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition"
          >
            Book Now
          </button>
        </div>

        {/* RIGHT GALLERY */}
        <div className="flex-1 flex flex-col gap-4">
          {room.gallery.slice(1, 3).map((img, i) => {
            const remaining = room.gallery.length - 2;
            const isLast = i === 1 && remaining > 0;

            return (
              <div key={i} className="relative">
                <img
                  src={img}
                  alt=""
                  className="w-full h-48 object-cover rounded-2xl cursor-pointer"
                  onClick={() => {
                    setIndex(i + 1);
                    setOpen(true);
                  }}
                />

                {isLast && (
                  <div
                    onClick={() => {
                      setIndex(i + 1);
                      setOpen(true);
                    }}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-2xl text-white text-3xl font-bold cursor-pointer"
                  >
                    +{remaining}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* OTHER ROOMS */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Other Room Types
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {otherRooms.map((r, i) => (
            <RoomCard key={i} {...r} />
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={room.gallery.map((src) => ({ src }))}
      />
    </div>
  );
}
