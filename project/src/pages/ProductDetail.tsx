import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Phone, CheckCircle2, ShieldCheck, MessageCircle } from 'lucide-react';
import { products } from '../data/products';
import ProductImage from '../components/ProductImage';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-steel-900 mb-4">محصول یافت نشد</h2>
          <Link to="/products" className="text-primary-600 hover:text-primary-700 font-medium">
            بازگشت به محصولات
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-steel-500 mb-8">
          <Link to="/" className="hover:text-primary-600 transition-colors">صفحه اصلی</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary-600 transition-colors">محصولات</Link>
          <span>/</span>
          <Link to={`/products?category=${product.categorySlug}`} className="hover:text-primary-600 transition-colors">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-steel-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-96 lg:h-[500px]">
            <ProductImage
              src={product.image}
              alt={product.name}
              categorySlug={product.categorySlug}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 right-6 bg-primary-600 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-md">
              {product.category}
            </div>
          </div>

          {/* Details */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-steel-900 mb-4">{product.name}</h1>
            <p className="text-steel-600 text-lg leading-8 mb-8">{product.description}</p>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-steel-900 mb-4">ویژگی‌های محصول</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 bg-steel-50 rounded-xl p-4">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" />
                    <span className="text-sm text-steel-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                درخواست مشاوره و قیمت
              </Link>
              <a
                href="https://rubika.ir/09126304918"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                مشاوره روبیکا
              </a>
            </div>

            <div className="bg-steel-50 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-primary-600" />
                <div>
                  <div className="font-bold text-steel-900 text-sm">گارانتی کیفیت</div>
                  <div className="text-xs text-steel-500">تمام محصولات با گارانتی معتبر عرضه می‌شوند</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary-600" />
                <div>
                  <div className="font-bold text-steel-900 text-sm">نصب حرفه‌ای</div>
                  <div className="text-xs text-steel-500">تیم نصب متخصص با تجربه اجرای پروژه‌های بزرگ</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-extrabold text-steel-900 mb-8">محصولات مشابه</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/products/${p.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-steel-100"
                >
                  <div className="h-48 overflow-hidden">
                    <ProductImage
                      src={p.image}
                      alt={p.name}
                      categorySlug={p.categorySlug}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-steel-900 mb-1 group-hover:text-primary-700 transition-colors">{p.name}</h3>
                    <p className="text-sm text-steel-500 line-clamp-2">{p.description}</p>
                    <div className="flex items-center gap-2 mt-3 text-primary-600 text-sm font-medium">
                      مشاهده جزئیات
                      <ArrowLeft className="w-4 h-4" />
                    </div>
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
