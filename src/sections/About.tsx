import { useEffect, useRef, useState } from 'react';
import { Award, Users, TrendingUp, Calendar } from 'lucide-react';

function CountUp({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  const stats = [
    { icon: Calendar, value: 15, suffix: '+', label: 'سنة خبرة' },
    { icon: Users, value: 5000, suffix: '+', label: 'عميل سعيد' },
    { icon: Award, value: 50, suffix: '+', label: 'تصميم حصري' },
    { icon: TrendingUp, value: 98, suffix: '%', label: 'رضا العملاء' },
  ];

  return (
    <section id="about" className="py-24 bg-dark-dark pattern-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="gold-text text-lg font-medium mb-3 block">من نحن</span>
          <h2 className="font-amiri font-bold text-4xl md:text-5xl text-white mb-6">
            مصنع الوليد للملابس الجاهزة
          </h2>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" />
            <div className="relative">
              <img
                src="/images/4e3ca3cb-888e-40f4-acd9-02fc1aa7cdc1.jpg"
                alt="هوية مصنع الوليد"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-dark border border-gold/30 rounded-xl p-4 shadow-xl">
                <p className="gold-text text-3xl font-bold font-amiri">الوليد</p>
                <p className="text-white/60 text-sm">للملابس الجاهزة</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              نصنع الأناقة بأيدي مصرية، ونلبي تطلعات كل سيدة تبحث عن التميز
            </h3>
            <p className="text-white/60 text-lg leading-relaxed">
              مصنع الوليد للملابس الجاهزة هو أحد المصادر الرائدة في صناعة وتجارة الملابس الجاهزة في مصر.
              نتميز بتقديم تشكيلة واسعة من الملابس الحريمي الجاهزة التي تجمع بين الأناقة العصرية
              والجودة العالية بأسعار تنافسية.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              نؤمن بأن الأناقة حق لكل سيدة، ولذلك نحرص على توفير تصاميم متنوعة تلبي جميع
              الأذواق والمناسبات. من الملابس الكاجوال اليومية إلى قطع السهرة الفاخرة،
              نضع بين يديكِ خيارات لا حدود لها.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {['أعلى جودة خامات', 'تصاميم عصرية', 'أسعار تنافسية', 'تشكيلة واسعة'].map(
                (feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <div className="w-2 h-2 bg-gold rounded-full" />
                    <span className="font-medium">{feature}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-gold/30 transition-all duration-300 group"
            >
              <stat.icon className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-3xl md:text-4xl font-bold gold-text mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white/50 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
