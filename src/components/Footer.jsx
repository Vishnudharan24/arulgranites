export default function Footer() {
  return (
    <footer id="contact" className="bg-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={`${import.meta.env.BASE_URL}assets/aglogo.jpeg`} 
                alt="Arul Granites Logo" 
                className="w-10 h-10 object-cover rounded-sm" 
              />
              <div>
                <span className="text-sm font-bold tracking-wide">ARUL GRANITES</span>
                <span className="block text-[10px] tracking-[0.2em] text-white/50">PVT LTD</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-md mb-6">
              Leading manufacturer and exporter of premium Indian granite monuments
              and stone products. Trusted by clients across Germany, France, USA,
              Canada, Poland, and the UK for quality, precision, and timely delivery.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 text-white/40">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Factory', href: '#factory' },
                { label: 'Monuments', href: '#monuments' },
                { label: 'Granite Colours', href: '#colours' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 text-white/40">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="square" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-white/60 leading-relaxed">
                  Nattampalayam, 76, Pallipalayam - Sankari Rd,<br />
                  Sangagiri, Tamil Nadu 637303
                </span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919443146055" className="text-sm text-white/60 hover:text-white transition-colors">
                  +91 94431 46055
                </a>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:arulgranites@gmail.com" className="text-sm text-white/60 hover:text-white transition-colors">
                  arulgranites@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Arul Granites Pvt Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Manufacturers & Exporters of Premium Indian Granite
          </p>
        </div>
      </div>
    </footer>
  );
}
