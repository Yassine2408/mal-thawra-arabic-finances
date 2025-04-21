
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-teal-600 to-teal-400 overflow-hidden">
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 arabic-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="md:w-1/2 text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              طريقك نحو الحرية المالية
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              نساعدك على فهم وإدارة أموالك وبناء ثروتك من خلال مقالات ونصائح وأدوات مالية بلغة عربية واضحة
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/articles">
                <Button className="bg-white text-teal-600 hover:bg-teal-50">
                  استكشف مقالاتنا
                </Button>
              </Link>
              <Link to="/tools">
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  أدوات مالية مجانية
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-scale-in">
            <div className="relative aspect-[4/3] bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-300/50 to-gold-500/50"></div>
              <div className="relative p-6 text-center flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 mb-4 bg-gold-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  ﷼
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">حاسبة الاستثمار</h3>
                <p className="text-gray-600 mb-4">احسب عائد استثمارك والمكاسب المحتملة</p>
                <Link to="/tools">
                  <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                    ابدأ الآن
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-3xl font-bold">+٥٠٠</div>
            <div className="text-sm opacity-90">مقال متخصص</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-3xl font-bold">+٢٠٠ ألف</div>
            <div className="text-sm opacity-90">قارئ شهرياً</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-3xl font-bold">+١٠</div>
            <div className="text-sm opacity-90">أدوات مالية</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-3xl font-bold">+٥ سنوات</div>
            <div className="text-sm opacity-90">خبرة مالية</div>
          </div>
        </div>
      </div>
    </div>
  );
}
