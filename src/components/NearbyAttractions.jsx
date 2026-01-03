import { MapPin } from "lucide-react";

export default function NearbyAttractions() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair">
            Nearby Attractions
          </h2>
          <p className="text-gray-500 mt-2">
            Explore popular places around the property
          </p>
        </div>

        {/* List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <Attraction name="City Beach" distance="1.2 km" />
          <Attraction name="Shopping Mall" distance="800 m" />
          <Attraction name="Airport" distance="12 km" />
          <Attraction name="Railway Station" distance="5 km" />

        </div>
      </div>
    </section>
  );
}

function Attraction({ name, distance }) {
  return (
    <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg">
        <MapPin size={18} />
      </div>
      <div>
        <p className="font-medium text-sm">{name}</p>
        <p className="text-xs text-gray-500">{distance}</p>
      </div>
    </div>
  );
}
