import { Link } from 'react-router-dom';
import { Award, Users, Target, ShieldCheck, Wrench, TrendingUp, Phone, ArrowLeft } from 'lucide-react';
import FallbackImage from '../components/FallbackImage';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-l from-primary-800 to-primary-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">درباره آرتا وین</h1>
          <p className="text-primary-200 text-lg max-w-2xl">
            بیش از یک دهه تجربه در تولید و اجرای پروژه‌های درب و پنجره
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-steel-900 mb-6">داستان ما</h2>
              <div className="space-y-4 text-steel-600 leading-8">
                <p>
                  آرتا وین با هدف ارائه محصولات باکیفیت و قابل اعتماد در حوزه درب و پنجره تأسیس شد. ما از همان ابتدا بر دو اصل کیفیت و صداقت با مشتری تأکید داشتیم و این رویکرد باعث رشد و توسعه شرکت شده است.
                </p>
                <p>
                  تیم آرتا وین متشکل از متخصصان باتجربه در زمینه طراحی، تولید و نصب انواع درب و پنجره دوجداره UPVC و آلومینیومی است. ما با استفاده از تجهیزات مدرن و متریال‌های استاندارد اروپایی، محصولاتی با دوام و کارایی بالا تولید می‌کنیم.
                </p>
                <p>
                  اجرای پروژه‌های بزرگ مسکونی، تجاری و اداری، ما را به یکی از نام‌های شناخته‌شده در صنعت درب و پنجره تبدیل کرده است. افتخار ما رضایت مشتریان و حفظ کیفیت در تمام مراحل تولید و نصب است.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-medium mt-8 transition-colors"
              >
                <Phone className="w-4 h-4" />
                تماس با ما
              </Link>
            </div>
            <div className="relative">
              <FallbackImage
                src="/1782488945742-019f049e-77f9-7fb6-b540-585601e1ec7b.png"
                alt="کارخانه تولید آرتا وین"
                className="w-full h-96 rounded-2xl object-cover shadow-xl"
                fallbackFrom="#0c4a6e"
                fallbackTo="#3b82f6"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-extrabold">+۱۰</div>
                <div className="text-sm text-primary-200">سال تجربه</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-steel-900 mb-4">ارزش‌های ما</h2>
            <p className="text-steel-500 text-lg">اصولی که آرتا وین بر آن‌ها استوار است</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'کیفیت بدون مصالحه', desc: 'ما هرگز از کیفیت محصول کوتاه نمی‌آییم. تمام محصولات با استانداردهای اروپایی و متریال‌های مرغوب تولید می‌شوند.' },
              { icon: Users, title: 'مشتری‌مداری', desc: 'رضایت مشتری اولویت اصلی ماست. از مشاوره تا خدمات پس‌از‌فروش، همراه شما هستیم.' },
              { icon: Target, title: 'دقت و ظرافت', desc: 'در تولید و نصب محصولات دقت بالایی به خرج می‌دهیم. هر جزء با ظرافت و وسواس اجرا می‌شود.' },
              { icon: TrendingUp, title: 'نوآوری مستمر', desc: 'همواره به دنبال فناوری‌ها و روش‌های جدید هستیم تا محصولات بهتری ارائه دهیم.' },
              { icon: Wrench, title: 'خدمات حرفه‌ای', desc: 'تیم نصب و خدمات ما حرفه‌ای و باتجربه است. از نصب تا نگهداری، خدمات کامل ارائه می‌دهیم.' },
              { icon: Award, title: 'صداقت و شفافیت', desc: 'در قیمت‌گذاری، توضیحات محصول و تعهدات خود صادق و شفاف هستیم.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-steel-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-steel-900 mb-3">{item.title}</h3>
                <p className="text-sm text-steel-500 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '+۵۰۰', label: 'پروژه موفق' },
              { value: '+۱۰', label: 'سال تجربه' },
              { value: '+۱۰۰', label: 'نوع محصول' },
              { value: '۹۸٪', label: 'رضایت مشتری' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2">{stat.value}</div>
                <div className="text-primary-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-steel-900 mb-4">آماده همکاری هستیم</h2>
          <p className="text-steel-500 text-lg leading-8 mb-8">
            چه به دنبال پنجره برای منزل باشید و چه پروژه بزرگی در دست اجرا، تیم آرتا وین آماده ارائه بهترین راهکارهاست.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              تماس با ما
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 bg-steel-100 hover:bg-steel-200 text-steel-700 px-8 py-4 rounded-xl font-bold transition-colors"
            >
              مشاهده محصولات
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
