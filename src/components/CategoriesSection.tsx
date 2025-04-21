
import { Link } from "react-router-dom";
import { 
  DollarSign, 
  TrendingUp, 
  PieChart, 
  Coins, 
  Smartphone, 
  BookText 
} from "lucide-react";

// Realistic and accurate category info
const categories = [
  {
    id: 1,
    name: "الاستثمار",
    description: "تعلم استراتيجيات الاستثمار الذكية والأساسية في الأسهم والعقارات والأصول الرقمية لزيادة رأس مالك بشكل مستدام.",
    icon: TrendingUp,
    color: "bg-blue-500",
    articles: 78
  },
  {
    id: 2,
    name: "التوفير",
    description: "أساليب علمية وعملية لبناء عادات الادخار وتحسين إنفاقك لتحقيق الاستقرار المالي.",
    icon: DollarSign,
    color: "bg-green-500",
    articles: 65
  },
  {
    id: 3,
    name: "التقنية المالية",
    description: "أحدث الخدمات والتطبيقات الذكية التي تساعدك على إدارة أموالك بكفاءة وسهولة من خلال التطور التكنولوجي المستمر.",
    icon: Smartphone,
    color: "bg-purple-500",
    articles: 42
  },
  {
    id: 4,
    name: "التخطيط المالي",
    description: "تخطيط مالي استراتيجي للتقاعد، الطوارئ، وتحقيق الخطط الطويلة والقصيرة المدى بأدوات معتمدة وفعالة.",
    icon: PieChart,
    color: "bg-orange-500",
    articles: 53
  },
  {
    id: 5,
    name: "العملات الرقمية",
    description: "كل ما يتعلق بفهم البيتكوين والعملات الرقمية، وأساليب التداول الآمن والاستثمار في هذا المجال الحديث.",
    icon: Coins,
    color: "bg-yellow-500",
    articles: 31
  },
  {
    id: 6,
    name: "المعرفة المالية",
    description: "مبادئ وأساسيات financiële لفهم عالم الأعمال والاستثمار بعمق ووعي أكبر.",
    icon: BookText,
    color: "bg-red-500",
    articles: 94
  }
];

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">استكشف التصنيفات</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            تصفح مقالاتنا حسب المواضيع التي تهمك واكتشف محتوى متخصص في مختلف مجالات المال والاستثمار
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/category/${category.id}`}
              className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg bg-white border border-gray-100"
            >
              <div className="p-6 flex flex-col h-full">
                <div className={`w-12 h-12 ${category.color} rounded-lg text-white flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  <category.icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600">
                  {category.name}
                </h3>
                
                <p className="text-gray-600 mb-4 flex-grow">
                  {category.description}
                </p>
                
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-sm text-gray-500">
                    {category.articles} مقال
                  </span>
                  <span className="text-teal-600 font-medium group-hover:translate-x-[-4px] transition-transform">
                    استكشف &larr;
                  </span>
                </div>
              </div>
              
              {/* Decorative diagonal stripe */}
              <div className={`absolute top-0 left-0 w-20 h-20 ${category.color} opacity-10 -rotate-45 translate-x-[-50%] translate-y-[-50%]`}></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
