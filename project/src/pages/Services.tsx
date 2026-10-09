import { Link } from 'react-router-dom';
import { Ruler, HardHat, Wrench, Building2, Phone, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Ruler,
      title: 'اندازه‌گیری و مشاوره رایگان',
      desc: 'کارشناسان ما به محل پروژه مراجعه کرده و اندازه‌گیری دقیق و مشاوره تخصصی رایگان ارائه می‌دهند. انتخاب بهترین محصول مطابق با نیاز و بودجه شما.',
    },
    {
      icon: HardHat,
      title: 'تخصصی‌سازی و تولید',
      desc: 'محصولات مطابق با ابعاد و مشخصات پروژه شما تولید می‌شوند. از پروفیل و شیشه تا یراق‌آلات، همه قابل شخصی‌سازی هستند.',
    },
    {
      icon: Wrench,
      title: 'نصب حرفه‌ای',
      desc: 'تیم نصب متخصص با تجربه اجرای پروژه‌های بزرگ، نصب استاندارد و دقیق را تضمین می‌کند. رعایت تمام اصول فنی و استانداردها.',
    },
    {
      icon: Building2,
      title: 'اجرای نمای مرکب و فاساد',
      desc: 'طراحی، تولید و نصب نمای مرکب و دیوار پرده برای ساختمان‌های تجاری و اداری. اجرای پروژه‌های بزرگ با کیفیت و زمان‌بندی دقیق.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-l from-primary-800 to-primary-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">خدمات آرتا وین</h1>
          <p className="text-primary-200 text-lg max-w-2xl">
            از مشاوره و اندازه‌گیری تا تولید و نصب، تمام خدمات درب و پنجره در یک نقطه
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="group bg-white rounded-2xl p-8 border border-steel-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary-100 group-hover:bg-primary-600 flex items-center justify-center mb-6 transition-colors">
                  <service.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-steel-900 mb-3">{service.title}</h3>
                <p className="text-steel-500 leading-7 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-steel-900 mb-4">مراحل کار</h2>
            <p className="text-steel-500 text-lg">از تماس اول تا تحویل نهایی</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '۱', title: 'تماس و مشاوره', desc: 'با ما تماس بگیرید و نیاز خود را بیان کنید. کارشناسان ما بهترین راهکار را پیشنهاد می‌دهند.' },
              { step: '۲', title: 'اندازه‌گیری', desc: 'کارشناس به محل مراجعه و اندازه‌گیری دقیق انجام می‌دهد. مشاوره رایگان در محل.' },
              { step: '۳', title: 'تخصصی‌سازی', desc: 'محصول مطابق ابعاد و مشخصات شما تولید می‌شود. کنترل کیفیت در تمام مراحل.' },
              { step: '۴', title: 'نصب و تحویل', desc: 'تیم نصب حرفه‌ای محصول را نصب و تحویل می‌کند. گارانتی و خدمات پس‌از‌فروش.' },
            ].map((item, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-6 border border-steel-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-extrabold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-steel-900 mb-2">{item.title}</h3>
                <p className="text-sm text-steel-500 leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-steel-900 mb-4">تضمین‌های آرتا وین</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'گارانتی معتبر تمام محصولات',
              'نصب استاندارد و حرفه‌ای',
              'خدمات پس‌از‌فروش و پشتیبانی',
              'استفاده از متریال استاندارد اروپا',
              'تحویل به‌موقع پروژه‌ها',
              'مشاوره رایگان قبل از خرید',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-steel-50 rounded-xl p-5">
                <CheckCircle2 className="w-6 h-6 text-primary-600 shrink-0" />
                <span className="text-sm font-medium text-steel-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-l from-primary-700 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">نیاز به مشاوره دارید؟</h2>
          <p className="text-primary-200 text-lg leading-8 mb-8">
            تیم متخصص آرتا وین آماده ارائه مشاوره رایگان و اندازه‌گیری در محل است. همین حالا تماس بگیرید.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              درخواست مشاوره
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-white/20"
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
