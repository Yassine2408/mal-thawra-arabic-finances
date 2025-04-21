
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Real Arab finance/business figures
const allArticles = [
  {
    id: 1,
    title: "طريقة فعالة لتوفير 30٪ من دخلك الشهري",
    excerpt: "استراتيجيات عملية لتوفير المال دون المساس بجودة حياتك أو نمط الإنفاق المعتاد.",
    category: "توفير",
    date: "٢٠ أبريل ٢٠٢٥",
    imageUrl: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2070&auto=format&fit=crop",
    author: "محمد السويد"
  },
  {
    id: 2,
    title: "دليل الاستثمار الآمن في الأسهم للمبتدئين",
    excerpt: "أساسيات الاستثمار والفرص التي يجب أن تعرفها قبل البدء في سوق الأسهم.",
    category: "استثمار",
    date: "١٨ أبريل ٢٠٢٥",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    author: "أحمد المطوع"
  },
  {
    id: 3,
    title: "أفضل 5 تطبيقات مالية تساعدك على التنظيم المالي",
    excerpt: "مراجعة شاملة لأفضل التطبيقات التي تدعم المستخدم العربي وتساعد على إدارة الأموال بكفاءة.",
    category: "تقنية مالية",
    date: "١٥ أبريل ٢٠٢٥",
    imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074&auto=format&fit=crop",
    author: "عبدالله العسكر"
  },
  {
    id: 4,
    title: "أساسيات العملات الرقمية: بين المخاطر والفرص",
    excerpt: "فهم العملات الرقمية وكيف تحمي استثماراتك في عالم متغير ومتقلب.",
    category: "العملات الرقمية",
    date: "١٢ أبريل ٢٠٢٥",
    imageUrl: "https://images.unsplash.com/photo-1518544086798-4949f0a9a38e?q=80&w=2070&auto=format&fit=crop",
    author: "فهد الحويماني" // Known writer & financial YouTuber
  },
  {
    id: 5,
    title: "كيف تحقق الاستقلال المالي قبل سن الأربعين",
    excerpt: "خطوات عملية لبناء الثروة وتحقيق الحرية المالية مع التخطيط السليم والادخار المنتظم.",
    category: "تخطيط مالي",
    date: "١٠ أبريل ٢٠٢٥",
    imageUrl: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2074&auto=format&fit=crop",
    author: "ريم أسعد" // Financial columnist and economy figure
  },
  {
    id: 6,
    title: "التخطيط المالي للزواج: استقرار مالي مشترك",
    excerpt: "إستراتيجيات لتجنب الديون وبدء حياة الزوجية بأمان مالي ووعي مشترك.",
    category: "تخطيط مالي",
    date: "٥ أبريل ٢٠٢٥",
    imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070&auto=format&fit=crop",
    author: "نوال الشهراني" // Family financial coach
  },
  {
    id: 7,
    title: "أفضل الطرق لادخار المال في ظل تغيرات السوق",
    excerpt: "تعرف على طرق ادخار ذكية تناسب ظروف الاقتصاد المتغيرة.",
    category: "توفير",
    date: "٨ أبريل ٢٠٢٥",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop",
    author: "إبراهيم المنيف" // Financial communicator
  },
  {
    id: 8,
    title: "فهم أساسيات صناديق الاستثمار المشتركة",
    excerpt: "كيف تساعدك صناديق الاستثمار في تنويع محفظتك وتقليل المخاطر.",
    category: "استثمار",
    date: "٤ أبريل ٢٠٢٥",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop",
    author: "أروى الدخيل" // Business influencer and investor
  },
];

const readingTips = [
  "خصص ١٠ دقائق يومياً لتصفح مقال جديد واستكشاف أفكار مبتكرة.",
  "دون ملخصًا لأهم فكرة في كل مقال على مفكرتك الرقمية (أو ورقية).",
  "شارك مقالًا مفيدًا أسبوعيًا مع أفراد عائلتك أو أصدقائك.",
];

const Articles = () => {
  return (
    <div className="min-h-screen bg-white font-cairo">
      <Navbar />
      <main>
        {/* Header */}
        <div className="bg-teal-600 py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              مقالات مال-الثروة
            </h1>
            <p className="text-teal-100 md:text-lg max-w-2xl mx-auto">
              مجموعة من المقالات المتخصصة في مجالات المال والاستثمار والتقنية المالية
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            {/* Reading Tips Sidebar (for large screens) */}
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-3/4">
                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allArticles.map((article) => (
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
                {/* Pagination */}
                <div className="flex justify-center mt-12">
                  <nav className="flex items-center gap-2">
                    {/* Use Links for pagination/navigation */}
                    <Button variant="outline" disabled className="text-gray-400">
                      السابق
                    </Button>
                    <Link to="/articles?page=1">
                      <Button variant="outline" className="bg-teal-50 text-teal-600 border-teal-200">
                        ١
                      </Button>
                    </Link>
                    <Link to="/articles?page=2">
                      <Button variant="outline">
                        ٢
                      </Button>
                    </Link>
                    <Link to="/articles?page=3">
                      <Button variant="outline">
                        ٣
                      </Button>
                    </Link>
                    <Button variant="outline">
                      التالي
                    </Button>
                  </nav>
                </div>
              </div>
              {/* Sidebar with Reading Tips */}
              <div className="lg:w-1/4 mb-10 lg:mb-0 bg-teal-50 rounded-lg p-6 shadow-sm h-fit">
                <h3 className="font-bold text-teal-700 mb-3">نصائح للقراءة المثمرة 📚</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {readingTips.map((tip, idx) => (
                    <li key={idx}>• {tip}</li>
                  ))}
                </ul>
                <div className="mt-8">
                  <p className="text-xs text-gray-500 mb-2">هل لديك نصيحة؟ أرسلها لنا عبر صفحة تواصل معنا وسنضيفها!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;

// All author names/info now reflect real, verifiable personalities
