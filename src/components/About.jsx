import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const mainRef = useScrollReveal();
  const noteRef = useScrollReveal();

  return (
    <section id="about" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={mainRef} className="reveal grid lg:grid-cols-2 gap-16 items-center">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

        {/* Founder's Note */}
        <div ref={noteRef} className="reveal mt-24 bg-white p-8 lg:p-12 border-l-4 border-primary shadow-sm relative overflow-hidden">
          {/* Decorative quote icon */}
          <div className="absolute -top-4 -right-4 p-8 text-primary/5">
            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Founder's Note
              </span>
              <div className="section-divider" />
            </div>
            
            <div className="space-y-4 text-text-secondary text-lg leading-relaxed max-w-4xl font-playfair italic">
              <p>
                Mr. N. K. Arul founded Arul Granites Private Limited in 2005, after gaining 25 years of experience in the granite quarrying industry, working alongside his father.
              </p>
              <p>
                With this strong foundation of experience and knowledge, he established Arul Granites with a vision to deliver quality natural stone products and build lasting relationships with customers.
              </p>
              <p>
                Over the past 20+ years, Arul Granites has grown into an established granite monument manufacturer and exporter, while continuing to follow the values of quality, reliability, craftsmanship, and timely delivery that our founder believed in from the beginning.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border-light flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center text-primary font-playfair font-bold text-xl">
                A
              </div>
              <div>
                <div className="font-semibold text-text-primary tracking-wide">Mr. N. K. Arul</div>
                <div className="text-sm text-text-muted">Founder, Arul Granites Private Limited</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
