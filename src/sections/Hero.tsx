import { useEffect, useRef } from 'react';
import { ChevronDown, Phone, MapPin } from 'lucide-react';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      heroRef.current.style.setProperty('--mouse-x', `${x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 40%, #0f0f0f 100%)',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gold particles */}
        <div
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)',
            top: '10%',
            right: '10%',
            transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))',
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div
          className="absolute w-72 h-72 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #e8d179 0%, transparent 70%)',
            bottom: '20%',
            left: '5%',
            transform: 'translate(calc(var(--mouse-x, 0) * -0.5), calc(var(--mouse-y, 0) * -0.5))',
            transition: 'transform 0.3s ease-out',
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(201, 168, 76, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201, 168, 76, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo with glow effect */}
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full scale-150" />
            <img
              src="/images/3cf0b681-58e1-4188-a22d-de32efe87232.jpg"
              alt="مصنع الوليد"
          className="relative w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-xl shadow-2xl shadow-gold/10"            />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="font-amiri font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
          <span className="gold-text">مصنع الوليد</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gold font-medium mb-4">
          للملابس الجاهزة
        </p>

        {/* Description */}
        <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          صناعة وتجارة الملابس الجاهزة بأعلى معايير الجودة
          <br className="hidden sm:block" />
          خبرة سنوات في عالم الموضة والأناقة
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#gallery"
            className="gold-gradient text-dark font-bold px-8 py-4 rounded-xl text-lg hover:shadow-xl hover:shadow-gold/20 transition-all duration-300 hover:scale-105"
          >
            معرض أعمالنا
          </a>
          <a
            href="#contact"
            className="border-2 border-gold/50 text-gold font-bold px-8 py-4 rounded-xl text-lg hover:bg-gold hover:text-dark transition-all duration-300"
          >
            تواصل معنا
          </a>
        </div>

        {/* Info badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/50">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gold" />
            <span className="text-sm">01099553770</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="text-sm">مصر</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gold/50 hover:text-gold transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}
