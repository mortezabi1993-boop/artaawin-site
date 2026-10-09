import { Link } from 'react-router-dom';
import { Clock, ArrowLeft } from 'lucide-react';
import { articles } from '../data/articles';
import FallbackImage from '../components/FallbackImage';

export default function Blog() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-l from-primary-800 to-primary-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">مقالات آموزشی</h1>
          <p className="text-primary-200 text-lg max-w-2xl">
            راهنماها و مقالات تخصصی درباره پنجره، درب، عایق‌بندی و نکات مهم برای انتخاب بهتر
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-steel-100"
            >
              <div className="relative h-56 overflow-hidden">
                <FallbackImage
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  fallbackFrom="#064e3b"
                  fallbackTo="#10b981"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-900/40 to-transparent" />
                <div className="absolute bottom-4 right-4 flex items-center gap-2 text-xs text-steel-200 bg-steel-900/60 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime} دقیقه مطالعه
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-steel-400 mb-2">{article.date}</div>
                <h2 className="text-lg font-bold text-steel-900 mb-3 group-hover:text-primary-700 transition-colors leading-7">
                  {article.title}
                </h2>
                <p className="text-sm text-steel-500 leading-7 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center gap-2 mt-4 text-primary-600 text-sm font-medium">
                  ادامه مطلب
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
