import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageLightbox({ images, index, onClose, setIndex }) {
  if (!images?.length) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center">
      
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:scale-110 transition"
      >
        <X size={32} />
      </button>

      {/* Prev */}
      <button
        onClick={() =>
          setIndex((index - 1 + images.length) % images.length)
        }
        className="absolute left-6 text-white hover:scale-110 transition"
      >
        <ChevronLeft size={40} />
      </button>

      {/* Image */}
      <img
        src={images[index]}
        alt="Gallery"
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl"
      />

      {/* Next */}
      <button
        onClick={() => setIndex((index + 1) % images.length)}
        className="absolute right-6 text-white hover:scale-110 transition"
      >
        <ChevronRight size={40} />
      </button>
    </div>
  );
}
