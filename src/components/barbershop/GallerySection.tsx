import { useState } from "react";
import { X } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
    alt: "Классическая мужская стрижка",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80",
    alt: "Оформление бороды",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?w=600&q=80",
    alt: "Модельная стрижка",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80",
    alt: "Стрижка машинкой",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
    alt: "Работа барбера",
  },
  {
    src: "https://images.unsplash.com/photo-1587909209111-5097ee578ec3?w=600&q=80",
    alt: "Результат стрижки",
  },
];

export function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 px-4 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <div className="reveal">
          <SectionTitle
            title="Наши работы"
            subtitle="Каждая стрижка — это искусство"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="reveal group relative aspect-square overflow-hidden cursor-pointer"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                <span className="text-white/0 group-hover:text-white text-sm font-medium tracking-wider uppercase transition-colors duration-500">
                  Смотреть
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setLightboxIndex(null);
            if (e.key === "ArrowRight") setLightboxIndex((prev) => prev !== null ? (prev + 1) % galleryImages.length : 0);
            if (e.key === "ArrowLeft") setLightboxIndex((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0);
          }}
          role="dialog"
          tabIndex={0}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Nav arrows */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-4xl transition-colors"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => prev !== null ? (prev + 1) % galleryImages.length : 0);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-4xl transition-colors"
          >
            ›
          </button>

          <img
            src={galleryImages[lightboxIndex].src.replace("w=600", "w=1200")}
            alt={galleryImages[lightboxIndex].alt}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
