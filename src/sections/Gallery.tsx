import { useState, useEffect, useRef } from 'react';
import { X, ZoomIn, Shirt, Tag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'فستان فاخر ', category: 'فساتين', image: '/images/prod-1.jpg' },
  { id: 2, name: 'بلوزة كاجوال', category: 'بلوزات', image: '/images/prod-2.jpg' },
  { id: 3, name: 'عباية رياضية', category: 'رياضي', image: '/images/prod-3.jpg' },
  { id: 4, name: 'عباية فاخرة', category: 'عبايات', image: '/images/prod-4.jpg' },
  { id: 5, name: 'جاكيت أنيق', category: 'جاكيتات', image: '/images/prod-5.jpg' },
  { id: 6, name: 'الوليد', category: 'الوليد', image: '/images/prod-6.jpg' },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<Product | null>(null);
  const [activeFilter, setActiveFilter] = useState('الكل');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const categories = ['الكل', ...new Set(products.map((p) => p.category))];
  const filtered = activeFilter === 'الكل' ? products : products.filter((p) => p.category === activeFilter);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 bg-dark-dark pattern-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="gold-text text-lg font-medium mb-3 block">معرض الأعمال</span>
          <h2 className="font-amiri font-bold text-4xl md:text-5xl text-white mb-6">
            نماذج من منتجاتنا
          </h2>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full mb-6" />
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            تشكيلة من أحدث التصاميم والموديلات التي نفخر بتصنيعها
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'gold-gradient text-dark font-bold'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, index) => (
            <div
              key={product.id}
              className={`group relative bg-dark border border-white/10 rounded-2xl overflow-hidden hover:border-gold/40 transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(product)}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                {/* Category badge */}
                <div className="absolute top-4 right-4 bg-gold/90 text-dark text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {product.category}
                </div>
                {/* Zoom icon */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Shirt className="w-4 h-4 text-gold" />
                    <span className="text-gold text-xs font-medium">{product.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                    {product.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 left-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div
            className="max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.name}
              className="w-full h-full object-contain rounded-2xl"
            />
            <div className="text-center mt-4">
              <span className="text-gold text-sm font-medium">{selectedImage.category}</span>
              <h3 className="text-2xl font-bold text-white mt-1">{selectedImage.name}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
