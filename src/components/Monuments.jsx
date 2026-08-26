import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { monumentImages } from '../data/monumentsData';
import { Link } from 'react-router-dom';

export default function Monuments() {
  const ref = useScrollReveal();
  const [lightbox, setLightbox] = useState(null);

  // Take first 3 images for preview
  const displayImages = monumentImages.slice(0, 3);

  return (
    <section id="monuments" className="py-24 lg:py-32 bg-white">
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
            Premium Monuments
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Browse our extensive collection of meticulously crafted granite memorials,
            headstones, and architectural monuments.
          </p>
        </div>

        {/* Gallery Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {displayImages.map((src, i) => (
            <div
              key={i}
              className="group relative overflow-hidden cursor-pointer aspect-[3/4]"
              onClick={() => setLightbox(i)}
            >
              <img
                src={src}
                alt={`Premium Indian Granite Monument and Headstone Design ${i + 1} by Arul Granites`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/monuments"
            className="inline-flex items-center px-8 py-4 bg-primary text-white text-sm font-semibold tracking-wider uppercase hover:bg-primary-dark transition-colors"
            title="View all our monument designs"
            aria-label="View all our monument designs"
          >
            View Full Collection
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
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

          <img
            src={displayImages[lightbox]}
            alt={`Premium Indian Granite Monument and Headstone Design ${lightbox + 1} by Arul Granites`}
            className="max-w-full max-h-[85vh] object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
