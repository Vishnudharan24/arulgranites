import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { colourSwatches } from '../components/Colours';
import { useScrollReveal } from '../hooks/useScrollReveal';

import { Helmet } from 'react-helmet-async'

export default function AllColours() {
  const ref = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-surface-alt">
      <Helmet>
        <title>Granite Colours | Arul Granites</title>
        <meta name="description" content="Explore our premium collection of 26 Indian granite colours including Absolute Black, Premium Black, and more." />
      </Helmet>
      <Navbar alwaysSolid />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={ref} className="reveal text-center mb-16">
            <h1 className="section-title text-4xl lg:text-5xl text-text-primary mb-6">
              Complete Colour Collection
            </h1>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
              Explore our full range of 26 premium Indian granite colours. We offer
              everything from deep, uniform blacks to intricate, multi-coloured patterns.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
            {colourSwatches.map((swatch, i) => (
              <div
                key={i}
                className="group relative bg-white overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${(i % 6) * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={swatch.src.replace('./', '/')}
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
          
          {/* Note */}
          <p className="text-center text-text-muted text-sm mt-12 max-w-3xl mx-auto">
            Colours shown may vary slightly from actual stone due to natural variations and screen display.
            Contact us for physical samples and custom requirements.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
