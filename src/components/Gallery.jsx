import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { galleryData } from "../data/galleryData";

const Gallery = () => {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("All");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Categories
  const categories = ["All", ...new Set(galleryData.map(i => i.category))];

  // Filter images
  const filteredImages =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter(i => i.category === activeCategory);

  // Lightbox slides
  const slides = filteredImages.map(img => ({
    src: img.image,
    title: img.title,
  }));

  return (
    <div className="min-h-screen pt-20 md:pt-24 px-4 md:px-10 py-8">

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition
              ${
                activeCategory === cat
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((item, i) => (
          <div
            key={item.id}
            className="relative cursor-pointer overflow-hidden rounded-lg group"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Category Badge */}
            <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
              {item.category}
            </div>

            {/* Book Now Button (Bottom-Right) */}
            {item.category === "Rooms" && (
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent lightbox
                  navigate("/room-book"); // Or open booking modal
                }}
                className="
                  absolute bottom-4 right-4
                  bg-white text-black text-sm font-semibold
                  px-4 py-2 rounded-full
                  opacity-100 md:opacity-0 md:group-hover:opacity-100
                  transition-all duration-300
                  hover:bg-black hover:text-white
                  shadow-lg shadow-black/40
                "
              >
                Book Now
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        on={{
          view: ({ index }) => setIndex(index),
        }}
      />
    </div>
  );
};

export default Gallery;
