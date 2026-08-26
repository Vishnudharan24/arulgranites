export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/factory/IMG_5254.JPG)` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/75 to-dark/50" />

      {/* Grid pattern overlay for texture */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 mb-8 mt-4">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-white/80 text-xs font-medium tracking-wider uppercase">
              Trusted Granite Exporters Since 2006
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up delay-100 section-title text-5xl md:text-6xl lg:text-7xl text-white mb-6 opacity-0">
            Precision in
            <span className="block text-primary-light">Every Stone</span>
          </h1>

          {/* Description */}
          <p className="animate-fade-in-up delay-200 text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-lg opacity-0">
            From quarry to continent — exporting premium Indian granite monuments
            and stone products with unmatched craftsmanship.
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4 opacity-0">
            <a
              href="#colours"
              className="inline-flex items-center px-8 py-4 bg-primary text-white text-sm font-semibold tracking-wider uppercase hover:bg-primary-dark transition-colors"
            >
              Explore Collection
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white text-sm font-semibold tracking-wider uppercase hover:bg-white/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="animate-fade-in-up delay-500 opacity-0 mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 max-w-2xl">
          {[
            { value: '20+', label: 'Years Experience' },
            { value: '6+', label: 'Countries Exported' },
            { value: '500+', label: 'Monument Designs' },
            { value: '100K+', label: 'Sq Ft Monthly' },
          ].map((stat, i) => (
            <div key={i} className="bg-dark/50 backdrop-blur-sm px-6 py-5">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/50 font-medium tracking-wider uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-500 opacity-0">
        <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
