
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand and About */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
                مال-الثروة
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              دليلك الشامل نحو الحرية المالية من خلال محتوى عربي موثوق وأدوات مالية مبتكرة.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-teal-400 transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-400 hover:text-teal-400 transition-colors">
                  أحدث المقالات
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-400 hover:text-teal-400 transition-colors">
                  التصنيفات
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-gray-400 hover:text-teal-400 transition-colors">
                  الأدوات المالية
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-teal-400 transition-colors">
                  عن الموقع
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">أهم التصنيفات</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/1" className="text-gray-400 hover:text-teal-400 transition-colors">
                  الاستثمار
                </Link>
              </li>
              <li>
                <Link to="/category/2" className="text-gray-400 hover:text-teal-400 transition-colors">
                  التوفير
                </Link>
              </li>
              <li>
                <Link to="/category/3" className="text-gray-400 hover:text-teal-400 transition-colors">
                  التقنية المالية
                </Link>
              </li>
              <li>
                <Link to="/category/4" className="text-gray-400 hover:text-teal-400 transition-colors">
                  التخطيط المالي
                </Link>
              </li>
              <li>
                <Link to="/category/5" className="text-gray-400 hover:text-teal-400 transition-colors">
                  العملات الرقمية
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} className="flex-shrink-0" />
                <span>info@mal-altharwa.com</span>
              </li>
              <li className="text-gray-400">
                نستقبل اقتراحاتكم واستفساراتكم بكل سرور
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} مال-الثروة. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-4 text-sm">
              <Link to="/privacy" className="text-gray-500 hover:text-teal-400 transition-colors">
                سياسة الخصوصية
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-teal-400 transition-colors">
                شروط الاستخدام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
