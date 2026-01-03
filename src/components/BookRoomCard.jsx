import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

export default function RoomCard({
  title,
  price,
  guests,
  bed,
  image,
  amenities = [],
  gallery = [],
  onSelect, // 🔥 ADD THIS
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const previewImages = gallery.slice(0, 2);
  const remainingCount = gallery.length - 2;

  return (
    <>
      <div className="bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col md:flex-row overflow-hidden">

        {/* Image */}
        <div className="relative md:w-64">
          <img
            src={image}
            alt={title}
            className="w-full h-48 md:h-full object-cover cursor-pointer"
            onClick={() => {
              setIndex(0);
              setOpen(true);
            }}
          />

          {/* Mini Gallery */}
          <div className="absolute bottom-2 left-2 flex gap-2">
            {previewImages.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-12 h-12 rounded-md border border-white cursor-pointer"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              />
            ))}

            {remainingCount > 0 && (
              <div
                onClick={() => {
                  setIndex(2);
                  setOpen(true);
                }}
                className="w-12 h-12 bg-black/60 text-white rounded-md flex items-center justify-center cursor-pointer text-sm font-semibold"
              >
                +{remainingCount}
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1 justify-between">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-500 text-sm">
              {guests} Guests • {bed}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {amenities.slice(0, 4).map((a, i) => (
              <span
                key={i}
                className="text-xs bg-gray-100 px-3 py-1 rounded-full"
              >
                {a}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <span className="text-2xl font-bold">
              ₹{price}
              <span className="text-sm text-gray-500"> / Night</span>
            </span>

            {/* 🔥 IMPORTANT CHANGE */}
            <button
              onClick={() =>
                onSelect?.({
                  title,
                  price,
                  guests,
                  bed,
                  image,
                  amenities,
                  gallery,
                })
              }
              className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-900 transition"
            >
              Select Room
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <ImageLightbox
          images={gallery}
          index={index}
          setIndex={setIndex}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
