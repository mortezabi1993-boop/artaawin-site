import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-steel-950 text-steel-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/Gemini_Generated_Image_j3hg6rj3hg6rj3hg.png"
                alt="لوگو آرتا وین"
                className="w-12 h-12 object-contain rounded-full"
              />
              <div>
                <div className="text-xl font-extrabold text-white">آرتا وین</div>
                <div className="text-xs text-steel-400">Arta Win</div>
              </div>
            </div>
            <p className="text-sm leading-7 text-steel-400">
              تولید کننده درب و پنجره دوجداره عایق حرارتی UPVC و آلومینیومی با کیفیت بالا و قیمت منطقی. بیش از یک دهه تجربه در تولید و اجرای پروژه‌های بزرگ.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">دسترسی سریع</h3>
            <ul className="space-y-3">
              {[
                { label: 'صفحه اصلی', path: '/' },
                { label: 'محصولات', path: '/products' },
                { label: 'خدمات', path: '/services' },
                { label: 'مقالات', path: '/blog' },
                { label: 'درباره ما', path: '/about' },
                { label: 'تماس با ما', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-steel-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">دسته‌بندی محصولات</h3>
            <ul className="space-y-3">
              {[
                { label: 'پنجره آلومینیومی', path: '/products?category=aluminum' },
                { label: 'پنجره UPVC دوجداره', path: '/products?category=upvc-double' },
                { label: 'شیشه رنگی دوجداره', path: '/products?category=colored-glass' },
                { label: 'توری پلیسه', path: '/products?category=pleated-screen' },
                { label: 'نمای مرکب', path: '/products?category=composite-facade' },
                { label: 'پنجره هوشمند', path: '/products?category=smart' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-steel-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">اطلاعات تماس</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                <span className="text-sm text-steel-400">پاسداران ضلع جنوبی میدان اختیاریه، تهران</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400 shrink-0" />
                <a href="tel:+989126304918" className="text-sm text-steel-400 hover:text-primary-400 transition-colors" dir="ltr">
                  0912-630-4918
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400 shrink-0" />
                <a href="mailto:mortezabi1993@gmail.com" className="text-sm text-steel-400 hover:text-primary-400 transition-colors" dir="ltr">
                  mortezabi1993@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary-400 shrink-0" />
                <span className="text-sm text-steel-400">شنبه تا پنج‌شنبه: ۸ صبح تا ۹ شب</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-steel-500">
            تمامی حقوق مادی و معنوی این وب‌سایت متعلق به آرتا وین است.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-steel-800 text-steel-400 hover:bg-primary-600 hover:text-white transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
