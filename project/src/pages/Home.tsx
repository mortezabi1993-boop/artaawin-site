import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Wrench, Clock, ArrowLeft, Star, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { products, categories, galleryImages } from '../data/products';
import { articles, testimonials } from '../data/articles';
import ProductImage from '../components/ProductImage';
import FallbackImage from '../components/FallbackImage';

export default function Home() {
  const featuredProducts = products.slice(0, 6);
  const featuredArticles = articles.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/1782488720964-019f049a-b0ea-7b77-94ef-c6326e626aad.png"
            alt="نمای ساختمان مدرن با پنجره‌های آلومینیومی"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-steel-950/90 via-steel-900/80 to-primary-950/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full px-4 py-1.5 text-primary-200 text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              بیش از یک دهه تجربه در صنعت درب و پنجره
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 text-shadow-lg">
              درب و پنجره دوجداره
              <br />
              <span className="text-primary-400">با کیفیت و دوام بالا</span>
            </h1>
            <p className="text-lg text-steel-300 leading-8 mb-8">
              آرتا وین، تولید کننده درب و پنجره دوجداره عایق حرارتی UPVC و آلومینیومی. با تجهیزات مدرن، قیمت منطقی و خدمات پس‌از‌فروش، تجربه‌ای مطمئن از کیفیت.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                درخواست مشاوره رایگان
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
              >
                مشاهده محصولات
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Strengths */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-steel-900 mb-4">چرا آرتا وین؟</h2>
            <p className="text-steel-500 text-lg max-w-2xl mx-auto">نقاط قوت ما که تفاوت آرتا وین را نشان می‌دهد</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: 'کیفیت بالا', desc: 'استفاده از بهترین متریال‌ها و پروفیل‌های استاندارد اروپایی با گارانتی معتبر' },
              { icon: Clock, title: 'دوام و پایداری', desc: 'محصولاتی با طول عمر بالا، مقاوم در برابر شرایط جوی و تغییرات دمایی' },
              { icon: Award, title: 'قیمت منطقی', desc: 'بهترین نسبت کیفیت به قیمت بازار، بدون کاستن از استانداردها' },
              { icon: Wrench, title: 'خدمات پس‌از‌فروش', desc: 'تضمین کیفیت، پشتیبانی فنی و خدمات تعمیر و نگهداری پس از فروش' },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-steel-50 hover:bg-primary-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-100 group-hover:bg-white/20 flex items-center justify-center mb-5 transition-colors">
                  <item.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-steel-900 group-hover:text-white mb-3 transition-colors">{item.title}</h3>
                <p className="text-steel-500 group-hover:text-primary-100 text-sm leading-7 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-steel-900 mb-4">محصولات ما</h2>
              <p className="text-steel-500 text-lg">مجموعه‌ای کامل از پنجره، درب و راهکارهای عایق‌بندی</p>
            </div>
            <Link
              to="/products"
              className="hidden sm:inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              مشاهده همه
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <ProductImage
                    src={product.image}
                    alt={product.name}
                    categorySlug={product.categorySlug}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-lg">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-steel-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-steel-500 leading-6 line-clamp-2">{product.description}</p>
                  <div className="flex items-center gap-2 mt-4 text-primary-600 text-sm font-medium">
                    مشاهده جزئیات
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              مشاهده تمام محصولات
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-steel-900 mb-4">دسته‌بندی محصولات</h2>
            <p className="text-steel-500 text-lg">انتخاب از بین دسته‌های متنوع محصولات</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/products?category=${cat.slug}`}
                className="group p-6 rounded-2xl bg-steel-50 hover:bg-primary-600 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="font-bold text-steel-900 group-hover:text-white text-sm transition-colors">{cat.name}</h3>
                <p className="text-xs text-steel-400 group-hover:text-primary-200 mt-1 transition-colors">{cat.count} محصول</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 bg-steel-50" aria-labelledby="brands-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-primary-600 uppercase mb-3">
              برترین برندهای جهانی
            </span>
            <h2 id="brands-heading" className="text-3xl sm:text-4xl font-extrabold text-steel-900 mb-4">
              برترین برندهای پروفیل UPVC
            </h2>
            <p className="text-steel-500 text-lg max-w-2xl mx-auto">
              آرتا وین با معتبرترین برندهای پروفیل UPVC اروپا همکاری مستقیم دارد تا بهترین کیفیت را به شما تحویل دهد
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'هوبر',
                nameEn: 'Hoobr',
                origin: 'آلمان',
                desc: 'پروفیل UPVC هوبر با بیش از ۵۰ سال تجربه در صنعت درب و پنجره اروپا، به عنوان یکی از پیشروترین برندهای جهان شناخته می‌شود. مقاومت بالا در برابر شرایط جوی و عایق‌بندی حرارتی فوق‌العاده از ویژگی‌های بارز این برند است.',
                features: ['عایق حرارتی A+', 'مقاومت ۵۰+ سال', 'استاندارد ISO'],
                color: 'from-blue-600 to-blue-800',
                badge: 'bg-blue-100 text-blue-700',
              },
              {
                name: 'هافمن',
                nameEn: 'Hafmen',
                origin: 'آلمان',
                desc: 'پروفیل UPVC هافمن با فناوری پیشرفته آلمانی، بهترین گزینه برای پنجره‌های دوجداره در آب و هوای ایران است. پروفیل هافمن با رنگ‌پذیری بالا و طراحی زیبا، انتخاب محبوب معماران و سازندگان حرفه‌ای است.',
                features: ['فناوری آلمانی', 'رنگ‌پذیری بالا', 'عایق صوتی عالی'],
                color: 'from-slate-600 to-slate-800',
                badge: 'bg-slate-100 text-slate-700',
              },
              {
                name: 'وین تک',
                nameEn: 'WinTec',
                origin: 'اتریش',
                desc: 'پروفیل UPVC وین تک ساخت اتریش، با ترکیب فرمول اختصاصی مواد اولیه، دوامی بی‌نظیر در برابر تابش UV و تغییرات دمایی شدید ارائه می‌دهد. انتخاب ایده‌آل برای نقاط با آب‌وهوای گرم و آفتابی.',
                features: ['مقاوم در برابر UV', 'تغییر رنگ صفر', 'دوام ۶۰ سال'],
                color: 'from-emerald-600 to-emerald-800',
                badge: 'bg-emerald-100 text-emerald-700',
              },
              {
                name: 'ویتانوا',
                nameEn: 'Vitanoa',
                origin: 'لهستان',
                desc: 'پروفیل UPVC ویتانوا با استانداردهای اروپایی و قیمت رقابتی، گزینه‌ای هوشمندانه برای پروژه‌های ساختمانی بزرگ است. این برند لهستانی با بیش از ۳ میلیون پنجره نصب‌شده در اروپا، اعتبار جهانی خود را ثابت کرده است.',
                features: ['قیمت رقابتی', 'کیفیت اروپایی', 'سری‌های متنوع'],
                color: 'from-amber-600 to-amber-800',
                badge: 'bg-amber-100 text-amber-700',
              },
              {
                name: 'ویستابست',
                nameEn: 'Vestabest',
                origin: 'ترکیه',
                desc: 'پروفیل UPVC ویستابست با فناوری مشترک اروپا و تولید در ترکیه، بهترین تعادل بین کیفیت و قیمت را ارائه می‌دهد. مناسب برای پروژه‌های مسکونی و تجاری با رنج قیمتی متنوع.',
                features: ['تولید مشترک اروپا', 'نصب سریع', 'پشتیبانی قطعات'],
                color: 'from-rose-600 to-rose-800',
                badge: 'bg-rose-100 text-rose-700',
              },
            ].map((brand) => (
              <article
                key={brand.nameEn}
                className="group bg-white rounded-2xl border border-steel-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                aria-label={`برند ${brand.name} - پروفیل UPVC`}
              >
                <div className={`h-2 bg-gradient-to-r ${brand.color}`} />
                <div className="p-7">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-extrabold text-steel-900 group-hover:text-primary-700 transition-colors">
                        {brand.name}
                      </h3>
                      <p className="text-sm text-steel-400 font-medium">{brand.nameEn}</p>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${brand.badge}`}>
                      {brand.origin}
                    </span>
                  </div>
                  <p className="text-sm text-steel-600 leading-7 mb-5">{brand.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {brand.features.map((f) => (
                      <span key={f} className="text-xs bg-primary-50 text-primary-700 font-medium px-3 py-1 rounded-lg">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="text-center text-steel-400 text-sm mt-10">
            جهت مشاوره در انتخاب برند مناسب با کارشناسان آرتا وین تماس بگیرید
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-steel-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">نظرات مشتریان</h2>
            <p className="text-steel-400 text-lg">آنچه مشتریان درباره ما می‌گویند</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-steel-800 rounded-2xl p-6 border border-steel-700">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-accent-400 fill-accent-400" />
                  ))}
                </div>
                <p className="text-sm text-steel-300 leading-7 mb-4">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-xs text-steel-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-steel-900 mb-4">گالری پروژه‌ها</h2>
            <p className="text-steel-500 text-lg">نمونه‌ای از اجرای پروژه‌های درب و پنجره آرتا وین</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 ${
                  i % 7 === 0 ? 'row-span-2 h-64 sm:h-80' : 'h-32 sm:h-40'
                }`}
              >
                <img
                  src={src}
                  alt={`پروژه ${i + 1} آرتا وین`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-steel-900 mb-4">مقالات آموزشی</h2>
              <p className="text-steel-500 text-lg">آخرین مقالات و راهنماهای تخصصی درب و پنجره</p>
            </div>
            <Link
              to="/blog"
              className="hidden sm:inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              مشاهده تمام مقالات
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className="group"
              >
                <div className="relative h-52 rounded-2xl overflow-hidden mb-5">
                  <FallbackImage
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fallbackFrom="#064e3b"
                    fallbackTo="#10b981"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-steel-900/50 to-transparent" />
                  <div className="absolute bottom-4 right-4 text-xs text-steel-200 bg-steel-900/60 backdrop-blur-sm px-3 py-1 rounded-lg">
                    {article.readTime} دقیقه مطالعه
                  </div>
                </div>
                <h3 className="text-lg font-bold text-steel-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-steel-500 leading-6 line-clamp-2">{article.excerpt}</p>
                <div className="text-xs text-steel-400 mt-3">{article.date}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-l from-primary-700 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">آماده سفارش هستید؟</h2>
          <p className="text-primary-200 text-lg leading-8 mb-8">
            همین حالا با ما تماس بگیرید و از مشاوره رایگان بهره‌مند شوید. تیم متخصص آرتا وین آماده پاسخگویی به سوالات شماست.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              درخواست مشاوره رایگان
            </Link>
            <a
              href="https://rubika.ir/09126304918"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              مشاوره آنلاین روبیکا
            </a>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle2, title: 'گارانتی معتبر', desc: 'تضمین کیفیت تمام محصولات با گارانتی رسمی' },
              { icon: Wrench, title: 'نصب حرفه‌ای', desc: 'تیم نصب متخصص با تجربه اجرای پروژه‌های بزرگ' },
              { icon: ShieldCheck, title: 'استاندارد اروپا', desc: 'محصولات مطابق با استانداردهای اروپایی و بین‌المللی' },
              { icon: Phone, title: 'پشتیبانی دائم', desc: 'پاسخگویی تلفنی از ۸ صبح تا ۹ شب شنبه تا پنج‌شنبه' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-steel-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-steel-500 leading-6">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
