
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

// Mock data for tips
const financialTips = [
  {
    id: 1,
    title: "خطة الطوارئ المالية",
    content: "احتفظ بمدخرات تعادل 3-6 أشهر من المصاريف الأساسية لمواجهة الطوارئ المالية غير المتوقعة.",
    category: "توفير"
  },
  {
    id: 2,
    title: "قاعدة 50/30/20",
    content: "خصص 50% من دخلك للاحتياجات الأساسية، 30% للرغبات، و20% للادخار والاستثمار.",
    category: "ميزانية"
  },
  {
    id: 3,
    title: "الاستثمار المبكر",
    content: "كلما بدأت الاستثمار مبكراً، كلما استفدت من قوة الفائدة المركبة وزاد عائدك على المدى الطويل.",
    category: "استثمار"
  },
  {
    id: 4,
    title: "تنويع المحفظة",
    content: "وزع استثماراتك بين فئات أصول مختلفة (أسهم، صكوك، عقار) لتقليل المخاطر وتحسين العوائد.",
    category: "استثمار"
  },
  {
    id: 5,
    title: "الوعي بالرسوم",
    content: "انتبه للرسوم المصرفية والعمولات في المنتجات المالية، فهي قد تأكل جزءاً كبيراً من عوائدك على المدى الطويل.",
    category: "مصارف"
  },
  {
    id: 6,
    title: "التأمين الصحي",
    content: "احرص على وجود تغطية تأمينية صحية مناسبة لحمايتك من النفقات الطبية الكبيرة غير المتوقعة.",
    category: "تأمين"
  }
];

export default function FinancialTips() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  
  const categories = ["الكل", ...Array.from(new Set(financialTips.map(tip => tip.category)))];
  
  const filteredTips = activeCategory === "الكل" 
    ? financialTips 
    : financialTips.filter(tip => tip.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <div className="inline-block mb-4 bg-gold-100 text-gold-800 px-4 py-1.5 rounded-full text-sm font-medium">
            نصائح ذهبية
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            نصائح مالية قيّمة
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            مجموعة من النصائح المالية المختصرة التي ستساعدك في رحلتك نحو الاستقرار والنجاح المالي
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={
                activeCategory === category 
                  ? "bg-teal-600 hover:bg-teal-700 text-white" 
                  : "text-gray-700 hover:text-teal-600"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category === "الكل" ? "الكل" : category}
            </Button>
          ))}
        </div>

        {/* Tips grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTips.map((tip) => (
            <Card 
              key={tip.id} 
              className="bg-white hover:shadow-md transition-shadow overflow-hidden border-2 border-transparent hover:border-teal-100"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded bg-teal-100 text-teal-800">
                    {tip.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600">{tip.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
