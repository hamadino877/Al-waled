import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-dark border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="text-center md:text-right">
            <img
              src="/images/3cf0b681-58e1-4188-a22d-de32efe87232.jpg"
              alt="مصنع الوليد"
              className="w-24 h-24 object-contain rounded-xl mx-auto md:mx-0 mb-4"
            />
            <h3 className="text-2xl font-bold gold-text mb-2">مصنع الوليد</h3>
            <p className="text-white/50 text-sm">
              للملابس الجاهزة
            </p>
            <p className="text-white/40 text-sm mt-2">
              صناعة وتجارة الملابس الجاهزة
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-white font-bold text-lg mb-6">روابط سريعة</h4>
            <div className="space-y-3">
              {[
                { name: 'الرئيسية', href: '#hero' },
                { name: 'من نحن', href: '#about' },
                { name: 'خدماتنا', href: '#services' },
                { name: 'معرض الأعمال', href: '#gallery' },
                { name: 'تواصل معنا', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-white/50 hover:text-gold transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-lg mb-6">تواصل معنا</h4>
            <div className="space-y-4">
              <a
                href="tel:01099553770"
                className="flex items-center justify-center md:justify-start gap-3 text-white/70 hover:text-gold transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>01099553770</span>
              </a>
              <a
                href="https://wa.me/201099553770"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>واتساب</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} مصنع الوليد للملابس الجاهزة
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 hover:scale-110"
          >
            <ArrowUp className="w-5 h-5 text-dark" />
          </button>
        </div>
      </div>
    </footer>
  );
}
