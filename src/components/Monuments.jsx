import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import { monumentImages } from '../data/monumentsData';

export default function Monuments() {
  const [lightbox, setLightbox] = useState(null);
  const { ref } = useScrollReveal();

  // Only show the first 3 images on the home page
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
            Monument Collection
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Exquisitely crafted granite monuments — headstones, memorials, and
            custom designs built to last for generations.
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
                alt={`Monument design preview ${i + 1}`}
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
          >
            View All Monuments
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative w-full max-w-5xl max-h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute left-0 p-4 text-white/50 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(l => l > 0 ? l - 1 : displayImages.length - 1);
              }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <img
              src={displayImages[lightbox]}
              alt="Monument detailed view"
              className="max-w-full max-h-[85vh] object-contain shadow-2xl"
            />

            <button
              className="absolute right-0 p-4 text-white/50 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(l => l < displayImages.length - 1 ? l + 1 : 0);
              }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="absolute bottom-6 left-0 right-0 text-center text-white/50 text-sm">
            {lightbox + 1} / {displayImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
