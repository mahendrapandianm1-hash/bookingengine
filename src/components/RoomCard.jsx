import { Users, BedDouble, Eye } from "lucide-react";

export default function RoomCard({
  image,
  title,
  guests,
  bed,
  view,
  price,
  oldPrice,
  badge,
  onBookNow,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-sm hover:shadow-xl transition">
      
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover"
        />

        {badge && (
          <span className="absolute top-3 left-3 bg-yellow-500 text-white text-sm px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>

        {/* Room features */}
        <div className="space-y-2 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <Users size={16} /> {guests} Guests
          </div>
          <div className="flex items-center gap-2">
            <BedDouble size={16} /> {bed}
          </div>
          <div className="flex items-center gap-2">
            <Eye size={16} /> {view}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mt-5">
          <div>
            <p className="text-2xl font-bold text-gray-900">
              ₹{price}
              <span className="text-sm text-gray-500"> / night</span>
            </p>

            {oldPrice && (
              <p className="text-sm text-gray-400 line-through">
                ₹{oldPrice}
              </p>
            )}
          </div>

          <button onClick={onBookNow} className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-900 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
