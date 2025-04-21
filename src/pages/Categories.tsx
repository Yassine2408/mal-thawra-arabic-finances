
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  DollarSign, 
  TrendingUp, 
  PieChart, 
  Coins, 
  Smartphone, 
  BookText 
} from "lucide-react";

// Mock data for categories
const categories = [
  {
    id: 1,
    name: "الاستثمار",
    description: "دليلك للاستثمار في الأسهم والعقارات والأصول الرقمية",
    longDescription: "اكتشف استراتيجيات الاستثمار الناجحة، وكيفية اختيار الأصول المناسبة، والتوقيت الأمثل للدخول والخروج من الاستثمارات. نقدم محتوى متخصص حول الأسهم والعقارات والاستثمارات البديلة بطريقة مبسطة تناسب المستثمر العربي.",
    icon: TrendingUp,
    color: "bg-blue-500",
    articles: 78,
    featuredArticle: {
      id: 101,
      title: "دليل شامل للاستثمار في الأسهم السعودية",
      excerpt: "كل ما تحتاج معرفته عن سوق الأسهم السعودية وكيفية بدء الاستثمار فيه بثقة ونجاح",
      imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop"
    }
  },
  {
    id: 2,
    name: "التوفير",
    description: "استراتيجيات فعالة لتوفير المال وبناء عادات مالية صحية",
    longDescription: "تعلم أفضل الطرق لتوفير المال دون التضحية بنمط حياتك، وكيفية بناء عادات مالية صحية تساعدك على تحقيق أهدافك. نقدم نصائح عملية للتوفير في مختلف جوانب الحياة مع الاستمتاع بها.",
    icon: DollarSign,
    color: "bg-green-500",
    articles: 65,
    featuredArticle: {
      id: 102,
      title: "تحدي توفير ٥٠٪ من الدخل: هل هو ممكن؟",
      excerpt: "قصص نجاح حقيقية لأشخاص تمكنوا من توفير نصف رواتبهم وكيف يمكنك تطبيق استراتيجياتهم",
      imageUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop"
    }
  },
  {
    id: 3,
    name: "التقنية المالية",
    description: "أحدث التطبيقات والخدمات التقنية لإدارة أموالك",
    longDescription: "اكتشف عالم التقنية المالية المتطور وكيف يمكن للتطبيقات الذكية أن تساعدك في إدارة أموالك بكفاءة. استعراض لأفضل الحلول التقنية في مجال المال والاستثمار المتاحة باللغة العربية.",
    icon: Smartphone,
    color: "bg-purple-500",
    articles: 42,
    featuredArticle: {
      id: 103,
      title: "٥ تطبيقات عربية لإدارة الميزانية الشخصية",
      excerpt: "مراجعة تفصيلية لأفضل التطبيقات العربية التي تساعدك على تتبع مصاريفك وإدارة ميزانيتك",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop"
    }
  },
  {
    id: 4,
    name: "التخطيط المالي",
    description: "خطط مالية للتقاعد والطوارئ وتحقيق الأهداف المالية",
    longDescription: "التخطيط المالي هو الطريق نحو تحقيق أهدافك المالية على المدى القصير والطويل. تعلم كيفية وضع خطة مالية متكاملة للتقاعد، شراء منزل، تعليم الأبناء، وبناء صندوق للطوارئ.",
    icon: PieChart,
    color: "bg-orange-500",
    articles: 53,
    featuredArticle: {
      id: 104,
      title: "خطة مالية للتقاعد المبكر في سن الخمسين",
      excerpt: "دليل خطوة بخطوة لوضع خطة مالية محكمة تمكنك من التقاعد المبكر بأريحية مالية",
      imageUrl: "https://images.unsplash.com/photo-1559519529-0936e4058364?q=80&w=2070&auto=format&fit=crop"
    }
  },
  {
    id: 5,
    name: "العملات الرقمية",
    description: "كل ما تحتاج معرفته عن البيتكوين والعملات الرقمية",
    longDescription: "تعرف على عالم العملات الرقمية من الألف إلى الياء، بداية من فهم تقنية البلوكتشين وصولاً إلى استراتيجيات الاستثمار الآمن في هذا المجال الحديث والمتطور باستمرار.",
    icon: Coins,
    color: "bg-yellow-500",
    articles: 31,
    featuredArticle: {
      id: 105,
      title: "البيتكوين بين الحقيقة والخيال: دليل المستثمر العربي",
      excerpt: "تحليل موضوعي للفرص والمخاطر في عالم البيتكوين وكيف يمكن للمستثمر العربي التعامل معه بحكمة",
      imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2069&auto=format&fit=crop"
    }
  },
  {
    id: 6,
    name: "المعرفة المالية",
    description: "مفاهيم وأساسيات لفهم عالم المال والأعمال",
    longDescription: "بناء أساس قوي من المعرفة المالية يساعدك على اتخاذ قرارات مالية سليمة. تعلم أساسيات الاقتصاد والاستثمار والمصطلحات المالية الضرورية بأسلوب مبسط وسهل الفهم.",
    icon: BookText,
    color: "bg-red-500",
    articles: 94,
    featuredArticle: {
      id: 106,
      title: "مفاهيم مالية أساسية يجب أن يعرفها كل شخص",
      excerpt: "شرح مبسط لأهم ١٠ مفاهيم مالية ستغير طريقة تعاملك مع المال وتساعدك على بناء ثروتك",
      imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2022&auto=format&fit=crop"
    }
  }
];

const globalIntro = `
في مال-الثروة، قمنا بتقسيم المحتوى إلى تصنيفات واضحة بحيث تجد كل ما تبحث عنه بسهولة. اختر التصنيف الذي يناسب اهتماماتك واستكشف مقالات وشروحات وأدوات فريدة أعددناها خصيصاً لجمهورنا العربي.

كل تصنيف يحوي مقالات متجددة وأهم النصائح العملية بالإضافة لمقال مميز يُرشح للقراءة أولاً!
`;

const Categories = () => {
  return (
    <div className="min-h-screen bg-white font-cairo">
      <Navbar />
      <main>
        {/* Header */}
        <div className="bg-teal-600 py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              تصنيفات المحتوى
            </h1>
            <p className="text-teal-100 md:text-lg max-w-2xl mx-auto">
              استكشف مقالاتنا حسب المواضيع التي تهمك وتساعدك على تحقيق أهدافك المالية
            </p>
          </div>
        </div>
        {/* Intro */}
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="my-12 text-center text-lg text-gray-700 leading-relaxed">
            {globalIntro}
          </div>
        </div>
        {/* Categories List */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-16">
              {categories.map((category) => (
                <div key={category.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {/* Category Info */}
                    <div className="lg:col-span-2 p-6 md:p-8 flex flex-col">
                      <div className={`w-14 h-14 ${category.color} rounded-lg text-white flex items-center justify-center mb-4`}>
                        <category.icon size={28} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{category.name}</h2>
                      <p className="text-gray-600 mb-6">{category.longDescription}</p>
                      <div className="mt-auto">
                        <div className="mb-4 text-sm text-gray-500">
                          <span className="font-semibold text-gray-900">{category.articles}</span> مقال في هذا التصنيف
                        </div>
                        <div className="flex gap-4 flex-wrap">
                          <Link 
                            to={`/category/${category.id}`}
                            className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md transition-colors"
                          >
                            تصفح المقالات
                          </Link>
                          <Link 
                            to={`/article/${category.featuredArticle.id}`}
                            className="inline-flex items-center bg-teal-100 hover:bg-teal-200 text-teal-800 px-4 py-2 rounded-md transition-colors border border-teal-200"
                          >
                            قراءة المقال المميز
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Featured Article */}
                    <div className="lg:col-span-3 bg-gray-50">
                      <div className="h-full relative overflow-hidden">
                        <img 
                          src={category.featuredArticle.imageUrl} 
                          alt={category.featuredArticle.title}
                          className="w-full h-full object-cover brightness-[0.85] lg:min-h-[320px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-6 md:p-8">
                          <div className="max-w-xl">
                            <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white mb-3">
                              مقال مميز
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                              {category.featuredArticle.title}
                            </h3>
                            <p className="text-gray-200 mb-4">
                              {category.featuredArticle.excerpt}
                            </p>
                            <Link 
                              to={`/article/${category.featuredArticle.id}`}
                              className="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-md transition-colors"
                            >
                              قراءة المقال
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
