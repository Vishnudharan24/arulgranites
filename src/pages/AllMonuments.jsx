import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { monumentImages } from '../data/monumentsData'
import Navbar from '../components/Navbar'
import { Helmet } from 'react-helmet-async'

export default function AllMonuments() {
  const [lightbox, setLightbox] = useState(null)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-surface-alt">
      <Helmet>
        <title>All Monuments | Arul Granites</title>
        <meta name="description" content="Browse our complete collection of 260+ meticulously crafted granite monuments, memorials, and headstones." />
      </Helmet>
      {/* Navbar */}
      <Navbar alwaysSolid />

      {/* Main Content */}
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-primary/30" />
            <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Full Collection
            </span>
            <div className="h-px w-8 bg-primary/30" />
          </div>
          <h1 className="text-4xl lg:text-5xl text-text-primary mb-4 font-playfair">
            All Monuments
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Browse our complete collection of meticulously crafted granite monuments and memorials.
          </p>
        </div>

        {/* Masonry-style gallery */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {monumentImages.map((src, i) => (
            <div
              key={i}
              className="group relative overflow-hidden cursor-pointer break-inside-avoid bg-white shadow-sm hover:shadow-md transition-shadow"
              onClick={() => setLightbox(i)}
            >
              <img
                src={src}
                alt={`Monument design ${i + 1}`}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-300" />
            </div>
          ))}
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
                e.stopPropagation()
                setLightbox(l => l > 0 ? l - 1 : monumentImages.length - 1)
              }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <img 
              src={monumentImages[lightbox]} 
              alt="Monument detailed view" 
              className="max-w-full max-h-[85vh] object-contain shadow-2xl"
            />
            
            <button
              className="absolute right-0 p-4 text-white/50 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setLightbox(l => l < monumentImages.length - 1 ? l + 1 : 0)
              }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute bottom-6 left-0 right-0 text-center text-white/50 text-sm">
            {lightbox + 1} / {monumentImages.length}
          </div>
        </div>
      )}
    </div>
  )
}
