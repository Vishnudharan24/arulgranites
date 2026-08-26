import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                src="./assets/factory/IMG_5251.JPG"
                alt="Arul Granites Factory"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Accent block */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/20 -z-10" />
            
            {/* Experience badge */}
            <div className="absolute bottom-6 left-6 bg-white shadow-xl px-6 py-4">
              <div className="text-3xl font-bold text-primary">20+</div>
              <div className="text-xs text-text-muted font-medium tracking-wider uppercase">
                Years of Excellence
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="section-divider" />
              <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                About Us
              </span>
            </div>

            <h2 className="section-title text-4xl lg:text-5xl text-text-primary mb-6">
              Craftsmanship Rooted in
              <span className="text-primary"> Indian Granite</span>
            </h2>

            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Arul Granites Pvt Ltd is a leading manufacturer and exporter of premium
              Indian granite products, specializing in monuments, headstones, and
              architectural stone. Based in Tamil Nadu — the granite heartland of India
              — we have been serving clients across the globe for over two decades.
            </p>

            <p className="text-text-secondary leading-relaxed mb-8">
              Our state-of-the-art factory in Sangagiri is equipped with modern cutting,
              polishing, and finishing machinery. Every block is hand-selected from the
              finest quarries, and every product undergoes rigorous quality checks before
              export. We combine traditional stone masonry expertise with modern precision
              engineering.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: '◆', title: 'Premium Quality', desc: 'Hand-selected blocks from top quarries' },
                { icon: '◆', title: 'Global Export', desc: 'Shipping to Germany, France, USA, Canada, Poland & UK' },
                { icon: '◆', title: 'Custom Designs', desc: 'Bespoke monuments & stone products' },
                { icon: '◆', title: 'On-Time Delivery', desc: 'Reliable logistics & timely dispatch' },
              ].map((feature, i) => (
                <div key={i} className="group">
                  <div className="text-primary text-sm mb-2">{feature.icon}</div>
                  <h4 className="text-sm font-semibold text-text-primary mb-1">{feature.title}</h4>
                  <p className="text-xs text-text-muted leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
