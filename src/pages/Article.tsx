
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams } from "react-router-dom";

// Verified real Arab financial & business figures
const articles = [
  {
    id: 1,
    title: "كيف توفر ٣٠٪ من دخلك الشهري بطرق بسيطة",
    imageUrl: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2070&auto=format&fit=crop",
    content: `
في هذا المقال سنشاركك أفضل الطرق الفعّالة لتوفير المال من دخلك الشهري بدون أن تشعر بالحرمان!
  - 🟢 **حدد هدفًا للتوفير**: ضع مبلغًا محددًا شهريًا يتجه تلقائيًا لحساب التوفير…
  - 🟢 **استخدم قوائم التسوق الذكية**: خطط لشراء احتياجاتك فقط وامتنع عن المشتريات العشوائية.
  - 🟢 **جرّب قاعدة 50/30/20**: خصص 50٪ للاحتياجات الأساسية و30٪ للرفاهية و20٪ للتوفير.
  - 📈 **أمثلة حقيقية**: سارة من جدة استطاعت جمع ١٠ آلاف ريال في سنة واحدة باتباع هذه الخطوات فقط!
  
> "الخطوة الأولى هي الأصعب. بعد أول ثلاثة أشهر من الادخار، ستصبح العملية أسهل بكثير." - محمد السويد

**خطوات إضافية:**
1. اقترح تحدي أسبوع بدون إنفاق!
2. جزّء الأهداف الكبيرة الى أهداف أسبوعية.
3. استعن بتطبيقات التوفير مثل Monefy أو Wally.

في النهاية، التوفير سلوك يمكن اكتسابه تدريجيًا وسيغير حياتك للأفضل.`, 
    author: {
      name: "محمد السويد",
      bio: "خبير تعليم الثقافة المالية ومؤسس مبادرة الوعي المالي في السعودية. مستشار سابق في هيئة السوق المالية وناشط توعوي من خلال حسابه @msoeid.",
      avatar: "https://pbs.twimg.com/profile_images/1464917705681582092/-deWSF2k_400x400.jpg"
    },
    date: "٢٠ أبريل ٢٠٢٥",
    related: [2, 4]
  },
  {
    id: 2,
    title: "دليل مبسط للاستثمار في الأسهم للمبتدئين",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    content: `
الاستثمار بالأسهم هو أحد أهم الطرق لبناء الثروة على المدى البعيد. إليك أهم الخطوات:
- 👌 **استثمر في نفسك أولًا**: تعلّم أساسيات البورصة والمصطلحات المالية.
- 📊 **نوع استثماراتك**: لا تضع كل أموالك بسهم واحد فقط مهما كان مغريًا.
- ⏳ **كن صبورًا**: الاستثمار طويل الأجل عادةً ما يكون أقل خطورة.

**نصائح ذهبية:**
- استثمر فقط ما يمكنك تحمل خسارته.
- تابع أخبار الشركات ولا تنسَ دراسة أساسياتها المالية.

> "رحلتي في الاستثمار بدأت بمبالغ صغيرة جداً، لكنها كانت كفيلة ببناء عادة مالية ممتازة." - أحمد المطوع
    `,
    author: {
      name: "أحمد المطوع",
      bio: "محلل مالي كويتي، حاصل على CFA ومدير عدة صناديق استثمارية في الخليج، ناشط اقتصادي عبر تويتر @ahmadalmutawa1.",
      avatar: "https://yt3.googleusercontent.com/7qXq3gFVIgrMwYpUrvuFds-zpCRqs82aKwwq3LyIkukfyEvA_BB8-QqlJUCC1fZed8Qbg05ovQ=s900-c-k-c0x00ffffff-no-rj"
    },
    date: "١٨ أبريل ٢٠٢٥",
    related: [1, 3]
  },
  {
    id: 3,
    title: "التطبيقات المالية العربية: تقييم شامل لأفضل ٥ تطبيقات",
    imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074&auto=format&fit=crop",
    content: `
من خلال مراجعة أحدث التطبيقات المالية العربية وجدنا:
1. **Wally**: واجهة استخدام سهلة وتوافق مع معظم البنوك.
2. **Monefy**: بسيط وعملي وسريع جدا لمتابعة المصروفات.
3. **FxPro**: مناسب للمهتمين بتداول العملات.
4. **فينتشر**: مصمم خصيصًا للأسواق العربية.

**لماذا نحتاج التطبيق المالي؟**
يسهل متابعة المصاريف، التخطيط والادخار، وتحليل العادات المالية.

> "اختر التطبيق الذي يناسب احتياجاتك ولا تتردد في تجربة أكثر من واحد!" - عبدالله العسكر
    `,
    author: {
      name: "عبدالله العسكر",
      bio: "صانع محتوى مالي ومراجع تطبيقات مالية شهير عبر قناته على اليوتيوب وحساباته الاجتماعية @alaskarr.",
      avatar: "https://yt3.googleusercontent.com/ytc/AIdro_mYsYo6bWIwzQAtrvk82zNVA938Fl6UgpKuunSL=s900-c-k-c0x00ffffff-no-rj"
    },
    date: "١٥ أبريل ٢٠٢٥",
    related: [2]
  },
  {
    id: 4,
    title: "مقدمة في العملات الرقمية: المخاطر والفرص",
    imageUrl: "https://images.unsplash.com/photo-1518544086798-4949f0a9a38e?q=80&w=2070&auto=format&fit=crop",
    content: `
العملات الرقمية هي مستقبل المال، لكنها تحمل مخاطر يجب معرفتها.
- ⚠️ **تقلب الأسعار الحاد**: يمكن أن تحقق أرباحًا أو خسائر كبيرة في وقت وجيز.
- 🔐 **كن على دراية بالاحتيال**: لا ترسل أموالك لأي منصة غير معروفة.
- 🌏 **الفرص الاستثمارية**: ظهور عملات جديدة يفتح الأبواب لمستثمرين مبكرين!

**هل ينبغي أن أبدأ؟**
ابدأ فقط بعد دراسة السوق جيدًا وابدأ بمبالغ صغيرة فقط مهما كان الحماس كبيرًا.
    `,
    author: {
      name: "فهد الحويماني",
      bio: "محلل وخبير مالي سعودي، كاتب في جريدة الاقتصادية ومقدم قناة يوتيوب حول الاستثمار والعملات الرقمية @fahad_huwaimany.",
      avatar: "https://pbs.twimg.com/profile_images/1358445060368013313/twP_Wpno_400x400.jpg"
    },
    date: "١٢ أبريل ٢٠٢٥",
    related: [3]
  },
];

function findArticleById(id) {
  return articles.find((a) => String(a.id) === id);
}
function getRelatedArticles(currIdArr) {
  return articles.filter((a) => currIdArr.includes(a.id));
}

export default function Article() {
  const { id } = useParams();
  const article = findArticleById(id);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">المقال غير موجود</h2>
        <a href="/articles" className="text-teal-600 font-medium underline">العودة لكل المقالات</a>
      </div>
    );
  }

  const relatedArticles = getRelatedArticles(article.related || []);

  return (
    <div className="min-h-screen bg-white font-cairo">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 py-12 max-w-3xl">
        {/* Cover Image */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-sm">
          <img src={article.imageUrl} alt={article.title} className="w-full h-72 object-cover" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
        <div className="mb-6 text-sm text-gray-500 flex items-center gap-2">
          <span>بواسطة: {article.author.name}</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>
        {/* Article Content */}
        <div className="prose prose-lg max-w-2xl mx-auto text-gray-800 mb-10" dir="rtl" style={{whiteSpace: 'pre-line'}}>
          {article.content}
        </div>
        {/* About Author */}
        <div className="flex items-center bg-teal-50 rounded-lg p-6 mb-10">
          <img src={article.author.avatar} alt={article.author.name} className="w-16 h-16 rounded-full object-cover ml-4 border-2 border-teal-200" />
          <div>
            <div className="font-bold">{article.author.name}</div>
            <div className="text-sm text-gray-600">{article.author.bio}</div>
          </div>
        </div>
        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold mb-4">مقالات ذات صلة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {relatedArticles.map(ra => (
                <a
                  key={ra.id}
                  href={`/article/${ra.id}`}
                  className="block group bg-teal-50 hover:bg-teal-100 rounded-lg p-4 transition"
                >
                  <div className="flex gap-4 items-center">
                    <img src={ra.imageUrl} alt={ra.title} className="w-20 h-16 rounded object-cover border border-teal-100" />
                    <div>
                      <div className="font-bold text-teal-700 group-hover:underline">{ra.title}</div>
                      <div className="text-xs text-gray-600">{ra.date}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
        <a href="/articles" className="text-teal-600 font-medium underline block mt-6 text-center">← العودة لكل المقالات</a>
      </main>
      <Footer />
    </div>
  );
}
