import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

export default function PaymentPage() {
  const selectedRoom = {
    title: "Deluxe Room",
    price: 4500,
    guests: 2,
    bed: "King Bed",
  };
  const navigation = useNavigate();
  const checkIn = "2026-01-05";
  const checkOut = "2026-01-08";
  const roomCount = 1;
  const totalNights =
    (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);
  const totalAmount = selectedRoom.price * roomCount * totalNights;

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [status, setStatus] = useState(""); // '', 'success', 'failed'

  const handlePaymentSuccess = () => setStatus("success");
  const handlePaymentFailed = () => setStatus("failed");
  const handleRetry = () => setStatus("");
  const handleHome = () => {
    // Redirect or reset
    //alert("Go to Home Page");
    navigation('/');
  };
  const handleClose = () => {
    // Close modal or navigate back
    navigation('/');
  };

  // ------------------------- SUCCESS SCREEN -------------------------
  if (status === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50 p-6">
        <div className="bg-white p-8 rounded-3xl shadow-lg text-center max-w-md">
          <svg className="mx-auto mb-6 w-24 h-24" viewBox="0 0 52 52">
            <circle
              className="stroke-green-600 stroke-2 fill-none"
              cx="26"
              cy="26"
              r="25"
              style={{
                strokeDasharray: 157,
                strokeDashoffset: 157,
                animation: "circleDraw 0.6s forwards",
              }}
            />
            <path
              className="stroke-green-600 stroke-2 fill-none"
              d="M14 27l7 7 17-17"
              style={{
                strokeDasharray: 38,
                strokeDashoffset: 38,
                animation: "tickDraw 0.5s 0.6s forwards",
              }}
            />
          </svg>

          <h1 className="text-3xl font-bold text-green-600 mb-2">
            Payment Successful!
          </h1>
          <p className="mb-4 text-gray-700">
            Your booking for <strong>{selectedRoom.title}</strong> is confirmed.
          </p>
          <p className="text-gray-500 mb-4">
            A confirmation email has been sent to your registered email address.
          </p>
          <p className="font-semibold mb-6">Total Paid: ₹{totalAmount}</p>

          <div className="flex gap-4">
      
            <button
              onClick={handleRetry}
              className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
            >
              Book Another
            </button>
         
          </div>

          <style>{`
            @keyframes circleDraw { to { stroke-dashoffset: 0; } }
            @keyframes tickDraw { to { stroke-dashoffset: 0; } }
          `}</style>
        </div>
      </div>
    );
  }

  // ------------------------- FAILED SCREEN -------------------------
  if (status === "failed") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50 p-6">
        <div className="bg-white p-8 rounded-3xl shadow-lg text-center max-w-md">
          <svg className="mx-auto mb-6 w-24 h-24" viewBox="0 0 52 52">
            <circle
              className="stroke-red-600 stroke-2 fill-none"
              cx="26"
              cy="26"
              r="25"
              style={{
                strokeDasharray: 157,
                strokeDashoffset: 157,
                animation: "circleDraw 0.6s forwards",
              }}
            />
            <line
              x1="16"
              y1="16"
              x2="36"
              y2="36"
              className="stroke-red-600 stroke-2"
              style={{
                strokeDasharray: 28.28,
                strokeDashoffset: 28.28,
                animation: "crossDraw 0.5s 0.6s forwards",
              }}
            />
            <line
              x1="36"
              y1="16"
              x2="16"
              y2="36"
              className="stroke-red-600 stroke-2"
              style={{
                strokeDasharray: 28.28,
                strokeDashoffset: 28.28,
                animation: "crossDraw 0.5s 1.1s forwards",
              }}
            />
          </svg>

          <h1 className="text-3xl font-bold text-red-600 mb-2">
            Payment Failed!
          </h1>
          <p className="mb-4 text-gray-700">
            Your payment for <strong>{selectedRoom.title}</strong> could not be processed.
          </p>
          <p className="text-gray-500 mb-4">
            Please check your payment details or try another payment method.
          </p>
          <p className="font-semibold mb-6">Amount: ₹{totalAmount}</p>

          <div className="flex gap-4">
           
            <button
              onClick={handleRetry}
              className="flex-1 bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition"
            >
              Retry Payment
            </button>
            
          </div>

          <style>{`
            @keyframes circleDraw { to { stroke-dashoffset: 0; } }
            @keyframes crossDraw { to { stroke-dashoffset: 0; } }
          `}</style>
        </div>
      </div>
    );
  }

  // ------------------------- PAYMENT FORM -------------------------
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-lg max-w-2xl w-full p-8">
        {/* Header with Home/Close */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handleHome}
            className="text-gray-600 hover:text-gray-800 font-semibold"
          >
            Home
          </button>
          <h1 className="text-2xl font-bold">Payment Summary</h1>
          
          <button
            onClick={handleClose}
            className="text-gray-600 hover:text-gray-800 font-semibold"
          >
            Close
          </button>

          
        </div>
 <p className="text-gray-600 mb-6">
          This is a dummy payment page. <br />
          Here will appear the <span className="font-medium text-gray-800">Razor Payment UI</span> 
           &nbsp;which is provided by Razorpay Payment Company.
        </p>

        <div className="mb-6 p-4 bg-gray-100 rounded-xl">
          <h2 className="font-semibold">{selectedRoom.title}</h2>
          <p>
            Guests: {selectedRoom.guests} | Rooms: {roomCount}
          </p>
          <p>
            Check-in: {checkIn} | Check-out: {checkOut} ({totalNights} nights)
          </p>
          <p className="mt-2 font-semibold text-lg">
            Price per night: ₹{selectedRoom.price}
          </p>
          <p className="mt-2 font-bold text-xl">
            Total: ₹{totalAmount}
          </p>
        </div>

        <div className="mb-6">
          <h2 className="font-semibold mb-2">Payment Method</h2>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Credit/Debit Card
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="upi"
                checked={paymentMethod === "upi"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              UPI
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="netbanking"
                checked={paymentMethod === "netbanking"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Net Banking
            </label>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handlePaymentSuccess}
            className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Simulate Success
          </button>
          <button
            onClick={handlePaymentFailed}
            className="flex-1 bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition"
          >
            Simulate Failure
          </button>
        </div>
      </div>
    </div>
  );
}
