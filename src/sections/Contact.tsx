import { Phone, MessageCircle, Clock, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `مرحباً، أنا ${formData.name}%0A${formData.message}%0Aرقمي: ${formData.phone}`;
    window.open(`https://wa.me/201099553770?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="gold-text text-lg font-medium mb-3 block">تواصل معنا</span>
          <h2 className="font-amiri font-bold text-4xl md:text-5xl text-white mb-6">
            نحن هنا لخدمتكِ
          </h2>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full mb-6" />
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            لا تترددي في التواصل معنا لأي استفسار أو طلب
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">معلومات التواصل</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-dark" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">اتصل بنا</p>
                    <a
                      href="tel:01099553770"
                      className="text-xl font-bold text-white hover:text-gold transition-colors"
                    >
                      01099553770
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-dark" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">واتساب</p>
                    <a
                      href="https://wa.me/201099553770"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-white hover:text-gold transition-colors"
                    >
                      01099553770
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-dark" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">ساعات العمل</p>
                    <p className="text-lg font-medium text-white">
                      السبت - الخميس: 9 صباحاً - 9 مساءً
                    </p>
                    <p className="text-white/50 text-sm">الجمعة: إجازة</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-dark" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">الموقع</p>
                    <p className="text-lg font-medium text-white">مصر</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp */}
            <a
              href="https://wa.me/201099553770"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-green-600/20"
            >
              <MessageCircle className="w-6 h-6" />
              تواصل معنا عبر واتساب
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">أرسلي رسالتكِ</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">
                  الاسم
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-dark border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                  placeholder="أدخلي اسمكِ"
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-dark border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
                  placeholder="01xxxxxxxxx"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">
                  الرسالة
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-dark border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                  placeholder="اكتبي رسالتكِ أو طلبكِ هنا..."
                />
              </div>

              <button
                type="submit"
                className="w-full gold-gradient text-dark font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-gold/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <Send className="w-5 h-5" />
                إرسال عبر واتساب
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
