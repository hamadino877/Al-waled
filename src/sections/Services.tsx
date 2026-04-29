import { useEffect, useRef, useState } from 'react';
import { Scissors, Shirt, Palette, Truck, Sparkles, Crown, ShoppingBag, Clock, Phone } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gold/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
          <Icon className="w-7 h-7 text-dark" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/50 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function Services() {
  const services = [
    {
      icon: Scissors,
      title: 'صناعة وتفصيل',
      description: 'تصنيع الملابس بأعلى معايير الجودة باستخدام أحدث الماكينات والتقنيات',
    },
    {
      icon: Shirt,
      title: 'تشكيلة واسعة',
      description: 'تنوع كبير في التصاميم يناسب جميع الأذواق والمناسبات',
    },
    {
      icon: Palette,
      title: 'تصاميم حصرية',
      description: 'تصاميم فريدة ومميزة تجمع بين الموضة العالمية والطابع المحلي',
    },
    {
      icon: Truck,
      title: 'توصيل سريع',
      description: 'خدمة توصيل موثوقة وسريعة لجميع المحافظات',
    },
    {
      icon: Sparkles,
      title: 'خامات ممتازة',
      description: 'نستخدم أفضل أنواع الأقمشة والخامات لضمان راحة وأناقة دائمة',
    },
    {
      icon: Crown,
      title: 'جودة عالية',
      description: 'فحص جودة صارم على كل قطعة لضمان تسليم منتج مثالي',
    },
    {
      icon: ShoppingBag,
      title: 'بيع جملة',
      description: 'أسعار مميزة للتجار وأسواق الجملة بكميات كبيرة',
    },
    {
      icon: Clock,
      title: 'سرعة تنفيذ',
      description: 'التزام تام بمواعيد التسليم مع الحفاظ على أعلى معايير الجودة',
    },
  ];

  return (
    <section id="services" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/[0.02] skew-x-12" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gold/[0.02] -skew-x-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="gold-text text-lg font-medium mb-3 block">خدماتنا</span>
          <h2 className="font-amiri font-bold text-4xl md:text-5xl text-white mb-6">
            كل ما تحتاجينه في مكان واحد
          </h2>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full mb-6" />
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات لتلبية جميع احتياجاتكِ في عالم الموضة
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-dark" />
            </div>
            <div className="text-right">
              <p className="text-white/50 text-sm">للاستفسار والطلب</p>
              <p className="gold-text text-2xl font-bold">01099553770</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
