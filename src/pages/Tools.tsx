
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calculator, PieChart, TrendingUp } from "lucide-react";

const tools = [
  {
    icon: Calculator,
    title: "حاسبة الاستثمار",
    desc: "أداة لحساب العائد المتوقع من استثمارك بناءً على المبلغ المودع، ومعدل الفائدة المركبة، والادخارات الدورية، مع توضيح قدرتها على تضخيم رأس المال بمرور الوقت.",
    case: "أمثلة:\n- إذا ادخرت 200 ريال شهريًا بمعدل 7% سنويًا، فكم سيكون لديك بعد 10 سنوات؟\n- سجّل استثماراتك وفّر دليلاً تفصيلياً لتنظيم أموالك.",
    cta: "ابدأ الحسبة",
    href: "/tools#investment"
  },
  {
    icon: PieChart,
    title: "حاسبة توزيع الأصول",
    desc: "تساعدك هذه الأداة على توزيع أصولك المالية بين الأسهم، السندات، العقارات، والنقد بطريقة متوازنة تعكس استراتيجيتك المالية الشخصية.",
    case: "أمثلة:\n- كيف يكون توزيع أموالك إذا خصصت 50% للأسهم و30% للعقارات و20% للسندات؟\n- استكشاف تأثيرات التوزيع المختلفة ضمن محفظتك الاستثمارية.",
    cta: "ابدأ الآن",
    href: "/tools#allocation"
  },
  {
    icon: TrendingUp,
    title: "أداة خطة التوفير",
    desc: "حدد هدفًا ماليًا مثل شراء منزل أو تمويل حفل زفاف، واحسب المبلغ الشهري اللازم للوصول إلى هدفك وفقًا للفترة الزمنية المختارة.",
    case: "أمثلة:\n- إذا رغبت بتوفير 20,000 ريال خلال سنتين، كم يلزمك أن تدخر شهريا؟\n- عدّل الأهداف لمعرفة كيفية تعديل مدخراتك الشهرية.",
    cta: "جرب الخطة",
    href: "/tools#saving"
  }
];

export default function Tools() {
  return (
    <div className="min-h-screen bg-white font-cairo">
      <Navbar />
      <main>
        <div className="bg-teal-600 py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              أدوات مالية مجانية
            </h1>
            <p className="text-teal-100 md:text-lg max-w-2xl mx-auto">
              استخدم أدواتنا الذكية لتحليل استثمارك، حساب التوفير، وخطط مالية وأكثر!
            </p>
          </div>
        </div>
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tools.map((tool, i) => (
                <Card key={i} className="p-8 flex flex-col items-center text-center">
                  <tool.icon className="text-teal-600 mb-4" size={40} />
                  <h2 className="text-xl font-bold mb-2">{tool.title}</h2>
                  <p className="text-gray-700 mb-3">{tool.desc}</p>
                  <div className="text-xs bg-teal-50 rounded p-2 mb-4 text-gray-700 whitespace-pre-line">{tool.case}</div>
                  <a href={tool.href} className="text-teal-600 font-medium hover:underline">{tool.cta}</a>
                </Card>
              ))}
            </div>
            <div className="mt-16">
              <p className="text-center text-teal-700 text-lg font-bold mb-2">نصائح للاستفادة الكاملة:</p>
              <ul className="text-center text-gray-600 mb-4 space-y-2">
                <li>• جرب جميع الأدوات ولا تتردد في إعادة المحاولة بتواريخ أو مبالغ مختلفة.</li>
                <li>• استشر المختصين عند التخطيط لأهداف كبيرة.</li>
                <li>• احفظ خططك ونتائجك للرجوع إليها.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
