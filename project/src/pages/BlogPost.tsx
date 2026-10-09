import { useParams, Link } from 'react-router-dom';
import { Clock, ArrowLeft, Phone, Share2 } from 'lucide-react';
import { articles } from '../data/articles';
import FallbackImage from '../components/FallbackImage';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-steel-900 mb-4">مقاله یافت نشد</h2>
          <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-medium">
            بازگشت به مقالات
          </Link>
        </div>
      </div>
    );
  }

  const otherArticles = articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-steel-500 mb-8">
          <Link to="/" className="hover:text-primary-600 transition-colors">صفحه اصلی</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-primary-600 transition-colors">مقالات</Link>
          <span>/</span>
          <span className="text-steel-900 font-medium line-clamp-1">{article.title}</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-steel-900 leading-tight mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-steel-500">
            <span>{article.date}</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} دقیقه مطالعه</span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden mb-10 shadow-lg h-64 sm:h-96">
          <FallbackImage
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            fallbackFrom="#0b875d"
            fallbackTo="#3de9a5"
          />
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none text-steel-700 leading-9">
          {article.content.split('\n').map((paragraph, i) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={i} className="text-2xl font-extrabold text-steel-900 mt-10 mb-4">{paragraph.replace('## ', '')}</h2>;
            }
            if (paragraph.startsWith('### ')) {
              return <h3 key={i} className="text-xl font-bold text-steel-900 mt-8 mb-3">{paragraph.replace('### ', '')}</h3>;
            }
            if (paragraph.startsWith('| ')) {
              return null;
            }
            if (paragraph.trim() === '') {
              return <div key={i} className="h-4" />;
            }
            return <p key={i} className="text-steel-600 leading-8 mb-4">{paragraph}</p>;
          })}
        </article>

        {/* CTA */}
        <div className="mt-12 p-8 bg-steel-50 rounded-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-steel-900 mb-1">سوالی درباره پنجره دارید؟</h3>
              <p className="text-sm text-steel-500">با کارشناسان آرتا وین تماس بگیرید</p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                <Phone className="w-4 h-4" />
                تماس با ما
              </Link>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: article.title, url: window.location.href });
                  }
                }}
                className="inline-flex items-center gap-2 bg-steel-200 hover:bg-steel-300 text-steel-700 px-6 py-3 rounded-xl font-medium transition-colors"
              >
                <Share2 className="w-4 h-4" />
                اشتراک‌گذاری
              </button>
            </div>
          </div>
        </div>

        {/* Other Articles */}
        {otherArticles.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-extrabold text-steel-900 mb-8">مقالات دیگر</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherArticles.map((a) => (
                <Link
                  key={a.id}
                  to={`/blog/${a.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-steel-100"
                >
                  <div className="h-40 overflow-hidden">
                    <FallbackImage
                      src={a.image}
                      alt={a.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      fallbackFrom="#064e3b"
                      fallbackTo="#10b981"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm text-steel-900 group-hover:text-primary-700 transition-colors leading-6">
                      {a.title}
                    </h3>
                    <div className="text-xs text-steel-400 mt-2">{a.date}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
