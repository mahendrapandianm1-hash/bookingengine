import React, { useState } from "react";
import RoomCard from "../components/RoomCard"; // Your reusable card component
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
import {useNavigate} from 'react-router-dom';

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
    badge: "",
    view: "City View",
  },
  {
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    title: "Family Room",
    guests: 4,
    bed: "King + Bunk",
    price: 6000,
    badge: "",
    view: "City View",
  },
  {
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
    title: "Standard Room",
    guests: 2,
    bed: "Queen",
    price: 3500,
    badge: "Recommended",
    view: "Ocean View",
  },
];

export default function RoomDetailsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const navigate = useNavigate();
  const handleBookNow = () =>
  {
    navigate('/room-book'); 
  }    
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Image */}
      <div className="w-full h-96 md:h-[500px] relative">
        <img
          src={room.gallery[0]}
          alt={room.title}
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => {
            setIsOpen(true);
            setPhotoIndex(0);
          }}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-playfair font-semibold">
            {room.title}
          </h1>
        </div>
      </div>

      {/* Room Info */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-10 flex flex-col md:flex-row gap-10">
        {/* Left Details */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">{room.title}</h2>
          <p className="text-gray-600">{room.description}</p>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">₹{room.price}/Night</span>
            <span className="text-gray-500">
              {room.guests} Guests • {room.bed} Bed
            </span>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="font-semibold mb-2">Amenities</h3>
            <ul className="flex flex-wrap gap-3">
              {room.amenities.map((amenity, i) => (
                <li
                  key={i}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          {/* Book Now */}
          <button onClick={handleBookNow} className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition">
            Book Now
          </button>
        </div>
{/* Right Gallery */}
<div className="flex-1 flex flex-col gap-4">
  {room.gallery.slice(1, 3).map((img, i) => {
    const isLastVisible = i === 1 && room.gallery.length > 2; // last image visible
    const remainingCount = room.gallery.length - 2; // remaining images

    return (
      <div key={i} className="relative group">
        <img
          src={img}
          alt={`Gallery ${i + 1}`}
          className="w-full h-48 object-cover rounded-2xl cursor-pointer transform transition-transform duration-300 group-hover:scale-105"
          onClick={() => {
            setIsOpen(true);
            setPhotoIndex(i + 1);
          }}
        />

        {/* Overlay for remaining images */}
        {isLastVisible && (
          <div onClick={()=>{setIsOpen(true);setPhotoIndex(i + 1);}} className="absolute inset-0 bg-black/60 flex items-center cursor-pointer transform transition-transform  justify-center rounded-2xl text-white text-3xl font-bold">
            +{remainingCount}
          </div>
        )}
      </div>
    );
  })}
</div>

      </div>

      {/* Other Rooms */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <h2 className="text-3xl font-playfair font-semibold mb-8 text-center">
          Other Room Types
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {otherRooms.map((r, i) => (
            <RoomCard key={i} {...r} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={room.gallery[photoIndex]}
          nextSrc={room.gallery[(photoIndex + 1) % room.gallery.length]}
          prevSrc={
            room.gallery[
              (photoIndex + room.gallery.length - 1) % room.gallery.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + room.gallery.length - 1) % room.gallery.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % room.gallery.length)
          }
        />
      )}
    </div>
  );
}
