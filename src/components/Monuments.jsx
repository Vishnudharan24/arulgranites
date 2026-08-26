import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const monumentImages = [
  './assets/monuments/IMG_4729.JPG',
  './assets/monuments/IMG_4730.JPG',
  './assets/monuments/IMG_4731.JPG',
  './assets/monuments/IMG_4732.JPG',
  './assets/monuments/IMG_4733.JPG',
  './assets/monuments/IMG_4735.JPG',
  './assets/monuments/IMG_4736.JPG',
  './assets/monuments/IMG_4738.JPG',
  './assets/monuments/IMG_4739.JPG',
  './assets/monuments/IMG_4740.JPG',
  './assets/monuments/IMG_4741.JPG',
  './assets/monuments/IMG_4742.JPG',
  './assets/monuments/IMG_4743.JPG',
  './assets/monuments/IMG_4745.JPG',
  './assets/monuments/IMG_4746.JPG',
  './assets/monuments/IMG_4747.JPG',
];

export default function Monuments() {
  const ref = useScrollReveal();
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="monuments" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="section-divider" />
            <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Our Products
            </span>
            <div className="section-divider" />
          </div>
          <h2 className="section-title text-4xl lg:text-5xl text-text-primary mb-4">
            Monument Collection
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Exquisitely crafted granite monuments — headstones, memorials, and
            custom designs built to last for generations.
          </p>
        </div>

        {/* Masonry-style gallery */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-1 space-y-1">
          {monumentImages.map((src, i) => (
            <div
              key={i}
              className="group relative overflow-hidden cursor-pointer break-inside-avoid"
              onClick={() => setLightbox(i)}
            >
              <img
                src={src}
                alt={`Monument design ${i + 1}`}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-all duration-300 flex items-end">
                <div className="w-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="text-white text-xs font-medium tracking-wider uppercase">
                    View Full Size
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + monumentImages.length) % monumentImages.length);
            }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <img
            src={monumentImages[lightbox]}
            alt={`Monument design ${lightbox + 1}`}
            className="max-w-full max-h-[85vh] object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % monumentImages.length);
            }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {lightbox + 1} / {monumentImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
