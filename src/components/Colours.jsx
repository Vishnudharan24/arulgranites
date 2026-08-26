import { useScrollReveal } from '../hooks/useScrollReveal';

export const colourSwatches = [
  { src: './assets/colours/IMG_4220.PNG', name: 'India Black (Absolute Black)' },
  { src: './assets/colours/IMG_4222.WEBP', name: 'Wiscont white' },
  { src: './assets/colours/IMG_4224.WEBP', name: 'Sapphire blue' },
  { src: './assets/colours/IMG_4226.PNG', name: 'Aurora' },
  { src: './assets/colours/IMG_4227.JPG', name: 'Indian Mahagony' },
  { src: './assets/colours/IMG_4228.JPG', name: 'Indian Grey' },
  { src: './assets/colours/IMG_4229.JPG', name: 'Tan Brown' },
  { src: './assets/colours/IMG_4230.JPG', name: 'Steel Grey' },
  { src: './assets/colours/IMG_4231.JPG', name: 'Cats eye' },
  { src: './assets/colours/IMG_4232.JPG', name: 'Galaxy' },
  { src: './assets/colours/IMG_4233.JPG', name: 'Royal impla' },
  { src: './assets/colours/IMG_4234.jpg', name: 'Ruby red' },
  { src: './assets/colours/IMG_4235.jpg', name: 'Romantica' },
  { src: './assets/colours/IMG_4236.WEBP', name: 'Regal black' },
  { src: './assets/colours/IMG_4237.WEBP', name: 'Bahama blue' },
  { src: './assets/colours/IMG_4238.JPG', name: 'Coffee brown' },
  { src: './assets/colours/IMG_4239.PNG', name: 'NH red' },
  { src: './assets/colours/IMG_4240.JPG', name: 'Himalayan blue' },
  { src: './assets/colours/IMG_4244.PNG', name: 'Multi Red' },
  { src: './assets/colours/IMG_4245.PNG', name: 'Kuppam green' },
  { src: './assets/colours/IMG_4246.PNG', name: 'Paradiso violet' },
  { src: './assets/colours/IMG_4247.jpg', name: 'India pink' },
  { src: './assets/colours/IMG_4248.jpg', name: 'Dakota' },
  { src: './assets/colours/IMG_4249.AVIF', name: 'India mist' },
  { src: './assets/colours/IMG_4250.jpg', name: 'Autumn red' },
  { src: './assets/colours/IMG_4251.WEBP', name: 'Indian juparana' },
];

import { Link } from 'react-router-dom';

export default function Colours() {
  const ref = useScrollReveal();
  const displayColours = colourSwatches.slice(0, 4);

  return (
    <section id="colours" className="py-24 lg:py-32 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="reveal text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="section-divider" />
            <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Stone Palette
            </span>
            <div className="section-divider" />
          </div>
          <h2 className="section-title text-4xl lg:text-5xl text-text-primary mb-4">
            Available Granite Colours
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            We offer a wide range of natural Indian granite colours — from jet blacks
            to multi-coloured varieties. Each stone is unique in its pattern and character.
          </p>
        </div>

        {/* Swatch grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {displayColours.map((swatch, i) => (
            <div
              key={i}
              className="group relative bg-white overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={swatch.src}
                  alt={swatch.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              {/* Label */}
              <div className="px-3 py-3 border-t border-border-light">
                <h4 className="text-xs font-semibold text-text-primary tracking-wide uppercase text-center">
                  {swatch.name}
                </h4>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 mb-8">
          <Link
            to="/colours"
            className="inline-flex items-center px-8 py-4 bg-primary text-white text-sm font-semibold tracking-wider uppercase hover:bg-primary-dark transition-colors"
          >
            View All Colours
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Note */}
        <p className="text-center text-text-muted text-sm mt-8">
          Colours shown may vary slightly from actual stone due to natural variations and screen display.
          Contact us for physical samples.
        </p>
      </div>
    </section>
  );
}
