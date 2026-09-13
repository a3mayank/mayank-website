import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Platform', href: '#platform' },
    { name: 'Projects', href: '#projects' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Changelog', href: '#changelog' },
    { name: 'Pricing / Hire', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 border-b-2 border-[#1d1f24] bg-[#eeece9]/95 backdrop-blur-md ${
        scrolled ? 'py-3 shadow-sm' : 'py-3.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo & Developer Badge */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#f7a501] border-2 border-[#1d1f24] flex items-center justify-center text-base shadow-retro-sm group-hover:rotate-6 transition-transform">
                👨🏽‍💻
              </div>
              <span className="text-lg font-black tracking-tight text-[#1d1f24]">
                Mayank Attri
              </span>
            </a>

            <div className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded border border-[#1d1f24] bg-[#f7a501]/30 text-[10px] font-mono font-bold uppercase tracking-wider text-[#1d1f24]">
              <span>v8.0 PROD</span>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#e3e0d8] p-1 rounded-lg border border-[#1d1f24]/30 text-xs font-bold text-[#1d1f24]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-md hover:bg-white hover:text-[#1d1f24] hover:shadow-sm transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="flex items-center gap-2.5">
            <a
              href="#contact"
              className="btn-retro px-3.5 py-1.5 rounded-lg text-xs flex items-center gap-1.5"
            >
              <span>Hire Mayank Attri</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg border-2 border-[#1d1f24] bg-white text-[#1d1f24] shadow-retro-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-white border-2 border-[#1d1f24] rounded-xl shadow-retro space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-bold text-[#1d1f24] hover:bg-[#eeece9] rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-[#1d1f24]/20">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center py-2.5 rounded-lg btn-retro text-xs"
              >
                Get Started &rarr;
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
