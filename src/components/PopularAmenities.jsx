import {
  Wifi,
  Car,
  Utensils,
  Waves,
  Snowflake,
  PawPrint,
  Dumbbell,
  Tv,
} from "lucide-react";

export default function PopularAmenities() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair">
            Popular Amenities
          </h2>
          <p className="text-gray-500 mt-2">
            Everything you need for a comfortable stay
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          
          <Amenity icon={<Wifi />} label="Free Wi-Fi" />
          <Amenity icon={<Car />} label="Free Parking" />
          <Amenity icon={<Utensils />} label="Breakfast Included" />
          <Amenity icon={<Waves />} label="Swimming Pool" />
          <Amenity icon={<Snowflake />} label="Air Conditioning" />
          <Amenity icon={<Tv />} label="Smart TV" />
          <Amenity icon={<Dumbbell />} label="Fitness Center" />
          <Amenity icon={<PawPrint />} label="Pet Friendly" />

        </div>
      </div>
    </section>
  );
}

function Amenity({ icon, label }) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
      
      <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg">
        {icon}
      </div>

      <span className="text-sm font-medium text-gray-700">
        {label}
      </span>
    </div>
  );
}
