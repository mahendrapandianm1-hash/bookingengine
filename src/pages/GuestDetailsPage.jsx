import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // if using react-router

export default function GuestDetailsPage({ selectedRoom, checkIn, checkOut, guests, roomCount }) {

    
    const navigate = useNavigate();

  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
   checkIn = "2026-01-05";
   checkOut = "2026-01-08";
   guests = 2;
   roomCount = 1;

   selectedRoom = {
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
  };

    if (!selectedRoom) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">No room selected. Please go back and select a room.</p>
      </div>
    );
  }
  const handleBooking = () => {
    // Here you can send booking details to backend or state management
    const bookingData = {
      room: selectedRoom,
      checkIn,
      checkOut,
      guests,
      roomCount,
      guestName,
      email,
      phone,
      specialRequest,
    };
    console.log("Booking Data:", bookingData);

    // Navigate to payment or confirmation page
    navigate("/payment", { state: bookingData });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 md:pt-24 px-4 md:px-20">
      <h2 className="text-3xl font-bold mb-6">Guest Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Guest Form */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Enter Your Details</h3>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-black outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-black outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-black outline-none"
            />

            <textarea
              placeholder="Special Requests (optional)"
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-black outline-none"
              rows={3}
            />

            <button
              onClick={handleBooking}
              className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition"
            >
              Proceed to Payment
            </button>
          </div>
        </div>

        {/* Booking Summary */}
        <div className="bg-white rounded-2xl shadow p-6 h-fit">
          <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>

          <div className="flex justify-between mb-2">
            <span>{selectedRoom.title}</span>
            <span>₹{selectedRoom.price}</span>
          </div>

          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>
              {roomCount} Room(s) × {guests} Guest(s)
            </span>
            <span>₹{selectedRoom.price * roomCount}</span>
          </div>

          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Check-in</span>
            <span>{checkIn}</span>
          </div>

          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <span>Check-out</span>
            <span>{checkOut}</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>₹{selectedRoom.price * roomCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
