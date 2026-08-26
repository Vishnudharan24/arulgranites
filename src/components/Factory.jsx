import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const factoryImages = [
  { src: './assets/factory/IMG_5255.JPG', alt: 'Large block cutting machine' },
  { src: './assets/factory/94046add-c144-403e-9c82-d8c9b7379a06.JPG', alt: 'Overhead crane and logistics' },
  { src: './assets/factory/IMG_5251.JPG', alt: 'Factory overview — granite processing facility' },
  { src: './assets/factory/IMG_5252.JPG', alt: 'Cutting machines in operation' },
  { src: './assets/factory/IMG_5253.JPG', alt: 'Polishing and finishing area' },
  { src: './assets/factory/IMG_5254.JPG', alt: 'Stone blocks storage yard' },
];

export default function Factory() {
  const ref = useScrollReveal();
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="factory" className="py-24 lg:py-32 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="section-divider" />
            <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Our Facility
            </span>
            <div className="section-divider" />
          </div>
          <h2 className="section-title text-4xl lg:text-5xl text-text-primary mb-4">
            State-of-the-Art Factory
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Our manufacturing unit in Sangagiri, Tamil Nadu is equipped with modern
            machinery for precision cutting, polishing, and finishing of granite products.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {factoryImages.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden cursor-pointer aspect-[4/3]"
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 border-2 border-white flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
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
              setLightbox((lightbox - 1 + factoryImages.length) % factoryImages.length);
            }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <img
            src={factoryImages[lightbox].src}
            alt={factoryImages[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % factoryImages.length);
            }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {lightbox + 1} / {factoryImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
