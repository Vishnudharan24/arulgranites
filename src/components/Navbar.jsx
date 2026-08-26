import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Factory', href: '#factory' },
  { label: 'Monuments', href: '#monuments' },
  { label: 'Colours', href: '#colours' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ alwaysSolid = false }) {
  const [scrolled, setScrolled] = useState(alwaysSolid);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (alwaysSolid) return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [alwaysSolid]);

  const getHref = (href) => (isHome ? href : `/${href}`);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_#e5e7eb]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href={getHref('#home')} className="flex items-center gap-3 group">
            <img 
              src={`${import.meta.env.BASE_URL}assets/aglogo.jpeg`} 
              alt="Arul Granites Logo" 
              className="w-10 h-10 object-cover rounded-sm" 
            />
            <div className="block">
              <span className={`text-sm font-bold tracking-wide transition-colors ${scrolled ? 'text-text-primary' : 'text-white'}`}>
                ARUL GRANITES
              </span>
              <span className={`block text-[10px] tracking-[0.2em] transition-colors ${scrolled ? 'text-text-muted' : 'text-white/70'}`}>
                PVT LTD
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={getHref(link.href)}
                className={`px-4 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors hover:text-primary ${
                  scrolled ? 'text-text-secondary' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href={getHref('#contact')}
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-primary text-white text-xs font-semibold tracking-wider uppercase hover:bg-primary-dark transition-colors"
          >
            Get Quote
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 transition-all duration-300 ${scrolled ? 'bg-text-primary' : 'bg-white'} ${
                  mobileOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ${scrolled ? 'bg-text-primary' : 'bg-white'} ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ${scrolled ? 'bg-text-primary' : 'bg-white'} ${
                  mobileOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${
          mobileOpen ? 'max-h-96 shadow-lg' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={getHref(link.href)}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-text-secondary hover:text-primary hover:bg-surface-alt transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={getHref('#contact')}
            onClick={() => setMobileOpen(false)}
            className="block mt-2 px-4 py-3 bg-primary text-white text-sm font-semibold text-center"
          >
            Get Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
