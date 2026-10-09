import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, Smartphone } from 'lucide-react';
import { testimonials } from '../data/articles';
import { Star } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-l from-primary-800 to-primary-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">تماس با ما</h1>
          <p className="text-primary-200 text-lg max-w-2xl">
            آماده پاسخگویی به سوالات و ارائه مشاوره رایگان هستیم
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg border border-steel-100 p-8">
              <h2 className="text-2xl font-extrabold text-steel-900 mb-2">درخواست مشاوره و سفارش</h2>
              <p className="text-steel-500 text-sm mb-8">فرم زیر را پر کنید، کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.</p>

              {submitted && (
                <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-green-700 font-medium">پیام شما با موفقیت ارسال شد. به‌زودی با شما تماس می‌گیریم.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-2">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 border border-steel-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                    placeholder="نام خود را وارد کنید"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-steel-700 mb-2">ایمیل</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 border border-steel-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                      placeholder="email@example.com"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-steel-700 mb-2">شماره تماس</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-steel-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                      placeholder="09123456789"
                      dir="ltr"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-2">پیام</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 border border-steel-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow resize-none"
                    placeholder="پیام یا توضیحات خود را بنویسید..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  <Send className="w-5 h-5" />
                  ارسال پیام
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-steel-100 p-6 space-y-6">
              <h3 className="text-lg font-bold text-steel-900">اطلاعات تماس</h3>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-medium text-steel-900 text-sm">آدرس</div>
                  <div className="text-sm text-steel-500 mt-1">پاسداران ضلع جنوبی میدان اختیاریه، تهران</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-medium text-steel-900 text-sm">تلفن</div>
                  <a href="tel:+989126304918" className="text-sm text-primary-600 hover:text-primary-700 mt-1 block" dir="ltr">
                    0912-630-4918
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-medium text-steel-900 text-sm">ایمیل</div>
                  <a href="mailto:mortezabi1993@gmail.com" className="text-sm text-primary-600 hover:text-primary-700 mt-1 block" dir="ltr">
                    mortezabi1993@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-medium text-steel-900 text-sm">ساعات کاری</div>
                  <div className="text-sm text-steel-500 mt-1">شنبه تا پنج‌شنبه: ۸ صبح تا ۹ شب</div>
                </div>
              </div>
            </div>

            {/* Rubika */}
            <a
              href="https://rubika.ir/09126304918"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl p-6 transition-colors shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div>
                <div className="font-bold text-lg">مشاوره آنلاین روبیکا</div>
                <div className="text-sm text-orange-100" dir="ltr">0912-630-4918</div>
              </div>
            </a>

            {/* اچاره */}
            <a
              href="https://achareh.co/expert/H0UO9H"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl p-6 transition-colors shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <Star className="w-7 h-7" />
              </div>
              <div>
                <div className="font-bold text-lg">صفحه اچاره</div>
                <div className="text-sm text-amber-100">مشاهده پروفایل و نظرات در اچاره</div>
              </div>
            </a>

            {/* خدمت از ما */}
            <a
              href="https://khedmatazma.com/reviews/preCustomer/2773293/UWiBDpo2q9EmL7Jf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-teal-500 hover:bg-teal-600 text-white rounded-2xl p-6 transition-colors shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <Star className="w-7 h-7" />
              </div>
              <div>
                <div className="font-bold text-lg">صفحه خدمت از ما</div>
                <div className="text-sm text-teal-100">مشاهده پروفایل و نظرات در خدمت از ما</div>
              </div>
            </a>

            {/* Quick Call */}
            <a
              href="tel:+989126304918"
              className="flex items-center gap-4 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl p-6 transition-colors shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <div className="font-bold text-lg">تماس تلفنی</div>
                <div className="text-sm text-primary-200" dir="ltr">0912-630-4918</div>
              </div>
            </a>

          </div>
        </div>

        {/* Testimonials */}
        <section className="mt-20">
          <h2 className="text-2xl font-extrabold text-steel-900 mb-8 text-center">نظرات مشتریان</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-steel-100 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-accent-400 fill-accent-400" />
                  ))}
                </div>
                <p className="text-sm text-steel-600 leading-7 mb-4">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-steel-900">{t.name}</div>
                    <div className="text-xs text-steel-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
