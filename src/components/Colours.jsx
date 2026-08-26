import { useScrollReveal } from '../hooks/useScrollReveal';

const colourSwatches = [
  { src: '/assets/colours/IMG_4220.PNG', name: 'Granite 1' },
  { src: '/assets/colours/IMG_4222.WEBP', name: 'Granite 2' },
  { src: '/assets/colours/IMG_4224.WEBP', name: 'Granite 3' },
  { src: '/assets/colours/IMG_4226.PNG', name: 'Granite 4' },
  { src: '/assets/colours/IMG_4227.JPG', name: 'Granite 5' },
  { src: '/assets/colours/IMG_4228.JPG', name: 'Granite 6' },
  { src: '/assets/colours/IMG_4229.JPG', name: 'Granite 7' },
  { src: '/assets/colours/IMG_4230.JPG', name: 'Granite 8' },
  { src: '/assets/colours/IMG_4231.JPG', name: 'Granite 9' },
  { src: '/assets/colours/IMG_4232.JPG', name: 'Granite 10' },
  { src: '/assets/colours/IMG_4233.JPG', name: 'Granite 11' },
  { src: '/assets/colours/IMG_4234.jpg', name: 'Granite 12' },
  { src: '/assets/colours/IMG_4235.jpg', name: 'Granite 13' },
  { src: '/assets/colours/IMG_4236.WEBP', name: 'Granite 14' },
  { src: '/assets/colours/IMG_4237.WEBP', name: 'Granite 15' },
  { src: '/assets/colours/IMG_4238.JPG', name: 'Granite 16' },
  { src: '/assets/colours/IMG_4239.PNG', name: 'Granite 17' },
  { src: '/assets/colours/IMG_4240.JPG', name: 'Granite 18' },
  { src: '/assets/colours/IMG_4244.PNG', name: 'Granite 19' },
  { src: '/assets/colours/IMG_4245.PNG', name: 'Granite 20' },
  { src: '/assets/colours/IMG_4246.PNG', name: 'Granite 21' },
  { src: '/assets/colours/IMG_4247.jpg', name: 'Granite 22' },
  { src: '/assets/colours/IMG_4248.jpg', name: 'Granite 23' },
  { src: '/assets/colours/IMG_4249.AVIF', name: 'Granite 24' },
  { src: '/assets/colours/IMG_4250.jpg', name: 'Granite 25' },
  { src: '/assets/colours/IMG_4251.WEBP', name: 'Granite 26' },
];

export default function Colours() {
  const ref = useScrollReveal();

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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1">
          {colourSwatches.map((swatch, i) => (
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

        {/* Note */}
        <p className="text-center text-text-muted text-sm mt-8">
          Colours shown may vary slightly from actual stone due to natural variations and screen display.
          Contact us for physical samples.
        </p>
      </div>
    </section>
  );
}
