
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calculator, PieChart, TrendingUp } from "lucide-react";

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
              <Card className="p-8 flex flex-col items-center text-center">
                <Calculator className="text-teal-600 mb-4" size={40} />
                <h2 className="text-xl font-bold mb-2">حاسبة الاستثمار</h2>
                <p className="text-gray-600 mb-4">
                  اكتشف مقدار العائد المحتمل لاستثمارك بمرور الوقت ومدى تأثير نسبة العائد السنوية.
                </p>
                <a href="#" className="text-teal-600 font-medium hover:underline">ابدأ الحسبة</a>
              </Card>
              <Card className="p-8 flex flex-col items-center text-center">
                <PieChart className="text-teal-600 mb-4" size={40} />
                <h2 className="text-xl font-bold mb-2">حاسبة توزيع الأصول</h2>
                <p className="text-gray-600 mb-4">
                  حدد التوزيع المثالي لأموالك بين الأسهم، والسندات، والعقارات… بسهولة.
                </p>
                <a href="#" className="text-teal-600 font-medium hover:underline">ابدأ الآن</a>
              </Card>
              <Card className="p-8 flex flex-col items-center text-center">
                <TrendingUp className="text-teal-600 mb-4" size={40} />
                <h2 className="text-xl font-bold mb-2">أداة خطة التوفير</h2>
                <p className="text-gray-600 mb-4">
                  خطط لتوفير الهدف المالي الشهري أو السنوي واحسب المسار لتحقيقه!
                </p>
                <a href="#" className="text-teal-600 font-medium hover:underline">جرب الخطة</a>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
