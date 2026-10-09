import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'صفحه اصلی', path: '/' },
  { label: 'محصولات', path: '/products', children: [
    { label: 'آلومینیومی', path: '/products?category=aluminum' },
    { label: 'UPVC دوجداره', path: '/products?category=upvc-double' },
    { label: 'آلومینیومی دوجداره', path: '/products?category=aluminum-double' },
    { label: 'شیشه رنگی دوجداره', path: '/products?category=colored-glass' },
    { label: 'توری پلیسه و کشویی', path: '/products?category=pleated-screen' },
    { label: 'هوشمند', path: '/products?category=smart' },
    { label: 'نمای مرکب', path: '/products?category=composite-facade' },
    { label: 'ایمنی', path: '/products?category=security' },
    { label: 'دیوار پرده', path: '/products?category=curtain-wall' },
  ]},
  { label: 'خدمات', path: '/services' },
  { label: 'مقالات', path: '/blog' },
  { label: 'درباره ما', path: '/about' },
  { label: 'تماس', path: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/Gemini_Generated_Image_j3hg6rj3hg6rj3hg.png"
              alt="لوگو آرتا وین"
              className="w-10 h-10 lg:w-12 lg:h-12 object-contain rounded-full"
            />
            <div className="hidden sm:block">
              <div className="text-xl lg:text-2xl font-extrabold text-steel-900">آرتا وین</div>
              <div className="text-xs text-steel-500 -mt-1">Arta Win</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.path)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                    location.pathname === item.path
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-steel-700 hover:text-primary-700 hover:bg-primary-50/50'
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>
                {item.children && openDropdown === item.path && (
                  <div className="absolute top-full right-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-steel-100 py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm text-steel-700 hover:text-primary-700 hover:bg-primary-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+989126304918"
              className="hidden sm:flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span dir="ltr">0912-630-4918</span>
            </a>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-lg text-steel-700 hover:bg-steel-100 transition-colors"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t border-steel-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-steel-700 hover:bg-steel-50'
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pr-6 space-y-1 mt-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2 rounded-lg text-sm text-steel-500 hover:text-primary-700 hover:bg-primary-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="tel:+989126304918"
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-4 py-3 rounded-lg text-sm font-medium mt-4"
            >
              <Phone className="w-4 h-4" />
              <span dir="ltr">0912-630-4918</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
