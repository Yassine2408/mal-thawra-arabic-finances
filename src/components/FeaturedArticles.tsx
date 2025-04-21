import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

// Mock data for featured articles
const articles = [
  {
    id: 1,
    title: "كيف توفر ٣٠٪ من دخلك الشهري بطرق بسيطة",
    excerpt: "تعرف على أفضل الاستراتيجيات لتوفير جزء من دخلك دون التأثير على نمط حياتك",
    category: "توفير",
    date: "٢٠ أبريل ٢٠٢٥",
    imageUrl: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2070&auto=format&fit=crop",
    author: "سمير الحكيم"
  },
  {
    id: 2,
    title: "دليل مبسط للاستثمار في الأسهم للمبتدئين",
    excerpt: "كل ما تحتاج معرفته لبدء رحلتك في الاستثمار بالأسهم بشكل آمن ومدروس",
    category: "استثمار",
    date: "١٨ أبريل ٢٠٢٥",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    author: "نورا العلي"
  },
  {
    id: 3,
    title: "التطبيقات المالية العربية: تقييم شامل لأفضل ٥ تطبيقات",
    excerpt: "مراجعة تفصيلية لأفضل التطبيقات المالية التي تساعدك على إدارة أموالك باللغة العربية",
    category: "تقنية مالية",
    date: "١٥ أبريل ٢٠٢٥",
    imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074&auto=format&fit=crop",
    author: "عمر الفاروق"
  },
];

export default function FeaturedArticles() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">أحدث المقالات</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            تصفح أحدث المقالات في عالم المال والاستثمار والتقنية المالية بلغة عربية مبسطة
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-teal-100 text-teal-800">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>
                <Link to={`/article/${article.id}`} className="hover:text-teal-600">
                  <h3 className="text-xl font-bold text-gray-900">{article.title}</h3>
                </Link>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center border-t pt-4">
                <div className="text-sm text-gray-500">
                  بواسطة: <span className="font-medium">{article.author}</span>
                </div>
                <Link to={`/article/${article.id}`}>
                  <Button variant="ghost" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-0">
                    اقرأ المزيد
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/articles">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              عرض جميع المقالات
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
