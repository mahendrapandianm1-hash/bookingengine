import { Star } from "lucide-react";

export default function GuestReviews() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair">
            Guest Reviews
          </h2>
          <p className="text-gray-500 mt-2">
            What our guests say about their stay
          </p>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <ReviewCard
            name="Ramesh Kumar"
            place="Chennai, India"
            review="Excellent service and very clean rooms. Highly recommended!"
            rating={5}
          />

          <ReviewCard
            name="Anita Sharma"
            place="Bangalore, India"
            review="Great location and friendly staff. Will book again."
            rating={4}
          />

          <ReviewCard
            name="David John"
            place="Dubai, UAE"
            review="Smooth booking experience and comfortable stay."
            rating={5}
          />

        </div>
      </div>
    </section>
  );
}

function ReviewCard({ name, place, review, rating }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
      
      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      <p className="text-gray-600 text-sm mb-4">“{review}”</p>

      <div className="text-sm">
        <p className="font-semibold">{name}</p>
        <p className="text-gray-500">{place}</p>
      </div>
    </div>
  );
}
