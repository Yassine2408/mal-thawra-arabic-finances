
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-white font-cairo">
      <Navbar />
      <main>
        {/* Header */}
        <div className="bg-teal-600 py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              عن مال-الثروة
            </h1>
            <p className="text-teal-100 md:text-lg max-w-2xl mx-auto">
              دليلك الموثوق لفهم عالم المال والاستثمار باللغة العربية
            </p>
          </div>
        </div>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6 inline-block bg-teal-100 text-teal-800 px-4 py-1.5 rounded-full text-sm font-medium">
                  قصتنا
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  رحلتنا في تبسيط المعرفة المالية
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  بدأت رحلة مال-الثروة من إيماننا العميق بأن المعرفة المالية حق للجميع. لاحظنا نقصاً في المحتوى المالي العربي الموثوق والمبسط، فقررنا سد هذه الفجوة.
                </p>
                <p className="text-gray-600 mb-6">
                  أسسنا المدونة في عام ٢٠٢٠ بهدف واضح: تقديم محتوى مالي عربي عالي الجودة، مبسط وخالٍ من المصطلحات المعقدة، يساعد القارئ العربي على اتخاذ قرارات مالية سليمة تناسب احتياجاته وظروفه.
                </p>
                <p className="text-gray-600">
                  اليوم، أصبحنا منصة رائدة في مجال التثقيف المالي العربي، نصل إلى مئات الآلاف من القراء شهرياً، ونساهم في نشر الوعي المالي في مختلف أنحاء الوطن العربي.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                    alt="فريق مال-الثروة" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full -z-10 transform translate-x-6 translate-y-6">
                  <div className="w-full h-full bg-teal-200 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="mb-4 inline-block bg-gold-100 text-gold-800 px-4 py-1.5 rounded-full text-sm font-medium">
                مهمتنا
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                نسعى لبناء مجتمع عربي واعٍ مالياً
              </h2>
              <p className="text-gray-600 text-lg">
                نؤمن أن التثقيف المالي هو حجر الأساس لبناء مستقبل مالي أفضل للأفراد والمجتمعات العربية.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-teal-100 text-teal-800 rounded-lg flex items-center justify-center mb-4 text-xl font-bold">
                  ١
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">تبسيط المعرفة المالية</h3>
                <p className="text-gray-600">
                  نقدم محتوى مالياً مبسطاً يسهل فهمه واستيعابه من قبل مختلف شرائح المجتمع، بغض النظر عن خلفيتهم المالية.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-teal-100 text-teal-800 rounded-lg flex items-center justify-center mb-4 text-xl font-bold">
                  ٢
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">المحتوى الموثوق</h3>
                <p className="text-gray-600">
                  نلتزم بتقديم معلومات دقيقة وموثوقة، معتمدة على مصادر موثوقة ومراجعة من قبل خبراء في المجال المالي.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-teal-100 text-teal-800 rounded-lg flex items-center justify-center mb-4 text-xl font-bold">
                  ٣
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">تمكين القرار المالي</h3>
                <p className="text-gray-600">
                  نسعى لتمكين القراء من اتخاذ قرارات مالية مدروسة تناسب ظروفهم وأهدافهم الشخصية، بعيداً عن الضغوط والتوجيه المتحيز.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="mb-4 inline-block bg-teal-100 text-teal-800 px-4 py-1.5 rounded-full text-sm font-medium">
                فريقنا
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                خبراء متخصصون في عالم المال
              </h2>
              <p className="text-gray-600 text-lg">
                يضم فريقنا نخبة من الخبراء والمتخصصين في مجالات المال والاستثمار والاقتصاد والتقنية المالية.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="mb-4 aspect-square max-w-[200px] mx-auto overflow-hidden rounded-full">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                    alt="أحمد الشمري" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">أحمد الشمري</h3>
                <p className="text-teal-600 mb-3">المؤسس والرئيس التنفيذي</p>
                <p className="text-gray-600 text-sm">
                  خبير مالي واستثماري مع خبرة ١٥ عاماً في الأسواق المالية والاستثمارات المتنوعة.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 aspect-square max-w-[200px] mx-auto overflow-hidden rounded-full">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                    alt="نورا العلي" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">نورا العلي</h3>
                <p className="text-teal-600 mb-3">رئيسة قسم المحتوى</p>
                <p className="text-gray-600 text-sm">
                  متخصصة في التخطيط المالي الشخصي وإدارة الثروات مع شغف بتبسيط المفاهيم المالية المعقدة.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 aspect-square max-w-[200px] mx-auto overflow-hidden rounded-full">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" 
                    alt="سامر القحطاني" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">سامر القحطاني</h3>
                <p className="text-teal-600 mb-3">خبير التقنية المالية</p>
                <p className="text-gray-600 text-sm">
                  متخصص في التقنية المالية والعملات الرقمية مع خبرة في تقييم التطبيقات المالية وتوجهات السوق الرقمية.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 aspect-square max-w-[200px] mx-auto overflow-hidden rounded-full">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" 
                    alt="هدى المنصور" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">هدى المنصور</h3>
                <p className="text-teal-600 mb-3">مستشارة الاستثمار</p>
                <p className="text-gray-600 text-sm">
                  مستشارة استثمارية معتمدة مع خبرة واسعة في أسواق الأسهم وإدارة المحافظ الاستثمارية.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-teal-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">شاركنا رحلة التثقيف المالي</h2>
            <p className="text-teal-100 max-w-2xl mx-auto mb-8 text-lg">
              انضم إلى الآلاف من القراء الذين يتلقون أفضل النصائح والمقالات المالية في بريدهم الإلكتروني أسبوعياً
            </p>
            <Button className="bg-white text-teal-600 hover:bg-teal-50">
              اشترك في النشرة البريدية
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
