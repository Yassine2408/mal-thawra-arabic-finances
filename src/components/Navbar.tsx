
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">مال-الثروة</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-800 hover:text-teal-600 font-medium">الرئيسية</Link>
          <Link to="/articles" className="text-gray-800 hover:text-teal-600 font-medium">المقالات</Link>
          <Link to="/categories" className="text-gray-800 hover:text-teal-600 font-medium">التصنيفات</Link>
          <Link to="/tools" className="text-gray-800 hover:text-teal-600 font-medium">أدوات مالية</Link>
          <Link to="/about" className="text-gray-800 hover:text-teal-600 font-medium">عن الموقع</Link>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white">اشترك الآن</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 animate-slide-in-right">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-gray-800 hover:text-teal-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </Link>
            <Link 
              to="/articles" 
              className="text-gray-800 hover:text-teal-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              المقالات
            </Link>
            <Link 
              to="/categories" 
              className="text-gray-800 hover:text-teal-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              التصنيفات
            </Link>
            <Link 
              to="/tools" 
              className="text-gray-800 hover:text-teal-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              أدوات مالية
            </Link>
            <Link 
              to="/about" 
              className="text-gray-800 hover:text-teal-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              عن الموقع
            </Link>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full">اشترك الآن</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
