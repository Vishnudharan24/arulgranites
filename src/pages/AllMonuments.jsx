import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { monumentImages } from '../data/monumentsData'

export default function AllMonuments() {
  const [lightbox, setLightbox] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-surface-alt">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_#e5e7eb]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={`${import.meta.env.BASE_URL}assets/aglogo.jpeg`} 
                alt="Arul Granites Logo" 
                className="w-10 h-10 object-cover rounded-sm" 
              />
              <div className="hidden sm:block">
                <span className={`text-sm font-bold tracking-wide transition-colors ${scrolled ? 'text-text-primary' : 'text-dark'}`}>
                  ARUL GRANITES
                </span>
                <span className={`block text-[10px] tracking-[0.2em] transition-colors ${scrolled ? 'text-text-muted' : 'text-dark/70'}`}>
                  PVT LTD
                </span>
              </div>
            </Link>
            <Link 
              to="/" 
              className={`text-sm font-semibold tracking-wider uppercase transition-colors ${
                scrolled ? 'text-text-primary hover:text-primary' : 'text-dark hover:text-primary'
              }`}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

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
