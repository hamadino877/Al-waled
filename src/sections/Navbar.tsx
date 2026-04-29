import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'معرض الأعمال', href: '#gallery' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-dark/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <img
              src="/images/3cf0b681-58e1-4188-a22d-de32efe87232.jpg"
              alt="مصنع الوليد"
              className="h-14 w-auto rounded-md"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-white/80 hover:text-gold transition-colors duration-300 text-sm font-medium rounded-lg hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:01099553770"
              className="gold-gradient text-dark font-bold px-5 py-2.5 rounded-lg flex items-center gap-2 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 text-sm"
            >
              <Phone className="w-4 h-4" />
              01099553770
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-dark-dark/95 backdrop-blur-md border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-white/80 hover:text-gold transition-colors duration-300 font-medium rounded-lg hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:01099553770"
            className="gold-gradient text-dark font-bold px-5 py-3 rounded-lg flex items-center justify-center gap-2 mt-4 text-sm"
          >
            <Phone className="w-4 h-4" />
            01099553770
          </a>
        </div>
      </div>
    </nav>
  );
}
