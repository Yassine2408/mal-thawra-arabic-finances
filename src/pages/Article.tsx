
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams } from "react-router-dom";

// Dummy articles (should eventually be fetched from backend/db)
const articles = [
  {
    id: 1,
    title: "كيف توفر ٣٠٪ من دخلك الشهري بطرق بسيطة",
    content: "هنا المحتوى الكامل لهذا المقال حول التوفير بطرق بسيطة. يمكنك التوسع في شرح الاستراتيجيات...",
    author: "سمير الحكيم",
    date: "٢٠ أبريل ٢٠٢٥",
  },
  {
    id: 2,
    title: "دليل مبسط للاستثمار في الأسهم للمبتدئين",
    content: "هنا المحتوى الكامل لهذا الدليل المبسط حول الاستثمار في الأسهم للمبتدئين...",
    author: "نورا العلي",
    date: "١٨ أبريل ٢٠٢٥",
  },
  {
    id: 3,
    title: "التطبيقات المالية العربية: تقييم شامل لأفضل ٥ تطبيقات",
    content: "تفاصيل تقييم ومراجعة التطبيقات المالية العربية لمساعدتك في إدارة المال...",
    author: "عمر الفاروق",
    date: "١٥ أبريل ٢٠٢٥",
  },
];

export default function Article() {
  const { id } = useParams();
  const article = articles.find((a) => String(a.id) === id);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">المقال غير موجود</h2>
        <a href="/articles" className="text-teal-600 font-medium underline">العودة لكل المقالات</a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-cairo">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{article.title}</h1>
        <div className="mb-6 text-sm text-gray-500 flex items-center gap-2">
          <span>بواسطة: {article.author}</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>
        <div className="prose prose-lg max-w-2xl mx-auto text-gray-800 mb-10" dir="rtl">
          {article.content}
        </div>
        <a href="/articles" className="text-teal-600 font-medium underline">← العودة لكل المقالات</a>
      </main>
      <Footer />
    </div>
  );
}
