import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, ArrowLeft, Grid3X3, List } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductImage from '../components/ProductImage';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const activeCategory = searchParams.get('category') || '';

  const filtered = useMemo(() => {
    let result = products;
    if (activeCategory) {
      result = result.filter((p) => p.categorySlug === activeCategory);
    }
    if (search) {
      const s = search.toLowerCase();
      result = result.filter(
        (p) => p.name.includes(s) || p.description.includes(s) || p.category.includes(s)
      );
    }
    return result;
  }, [activeCategory, search]);

  const activeCategoryName = categories.find((c) => c.slug === activeCategory)?.name;

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-l from-primary-800 to-primary-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            {activeCategoryName || 'محصولات آرتا وین'}
          </h1>
          <p className="text-primary-200 text-lg max-w-2xl">
            مجموعه‌ای کامل از پنجره، درب و راهکارهای عایق‌بندی حرارتی و صوتی با کیفیت بالا
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-72 shrink-0">
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="relative">
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-steel-400" />
                <input
                  type="text"
                  placeholder="جستجوی محصول..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pr-12 pl-4 py-3 border border-steel-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div className="bg-white rounded-2xl border border-steel-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5 text-primary-600" />
                  <h3 className="font-bold text-steel-900">دسته‌بندی‌ها</h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setSearchParams({})}
                      className={`w-full text-right px-3 py-2 rounded-lg text-sm transition-colors ${
                        !activeCategory ? 'bg-primary-50 text-primary-700 font-medium' : 'text-steel-600 hover:bg-steel-50'
                      }`}
                    >
                      همه محصولات
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.slug}>
                      <button
                        onClick={() => setSearchParams({ category: cat.slug })}
                        className={`w-full text-right px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between ${
                          activeCategory === cat.slug ? 'bg-primary-50 text-primary-700 font-medium' : 'text-steel-600 hover:bg-steel-50'
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className="text-xs text-steel-400">{cat.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden lg:flex items-center gap-2 bg-white rounded-xl border border-steel-100 p-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-primary-50 text-primary-600' : 'text-steel-400 hover:text-steel-600'}`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-primary-50 text-primary-600' : 'text-steel-400 hover:text-steel-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-steel-500">
                {filtered.length} محصول
                {activeCategoryName && <span className="text-primary-600"> در دسته {activeCategoryName}</span>}
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-steel-900 mb-2">محصولی یافت نشد</h3>
                <p className="text-steel-500">لطفاً عبارت جستجو یا دسته‌بندی دیگری را امتحان کنید.</p>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-steel-100"
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
                      <div className="flex flex-wrap gap-2 mt-4">
                        {product.features.slice(0, 3).map((f, i) => (
                          <span key={i} className="text-xs bg-steel-50 text-steel-600 px-2 py-1 rounded-md">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filtered.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className="group flex bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-steel-100"
                  >
                    <div className="w-48 shrink-0 overflow-hidden">
                      <ProductImage
                        src={product.image}
                        alt={product.name}
                        categorySlug={product.categorySlug}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="text-xs text-primary-600 font-medium mb-1">{product.category}</div>
                      <h3 className="text-lg font-bold text-steel-900 mb-2 group-hover:text-primary-700 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-steel-500 leading-6">{product.description}</p>
                      <div className="flex items-center gap-2 mt-4 text-primary-600 text-sm font-medium">
                        مشاهده جزئیات
                        <ArrowLeft className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
