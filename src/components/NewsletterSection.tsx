
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would call an API to subscribe the user
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section className="py-16 bg-teal-50 arabic-pattern relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 bg-teal-100 text-teal-800 px-4 py-1.5 rounded-full text-sm font-medium">
            النشرة البريدية
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            احصل على أفضل النصائح المالية في بريدك
          </h2>
          
          <p className="text-gray-600 mb-8 md:text-lg">
            اشترك في نشرتنا البريدية واحصل على أحدث المقالات وأفضل النصائح المالية مباشرة في بريدك الإلكتروني، مرة واحدة أسبوعياً
          </p>
          
          {isSubmitted ? (
            <div className="p-4 bg-green-100 text-green-800 rounded-lg animate-fade-in">
              شكراً لاشتراكك! تم تسجيل بريدك الإلكتروني بنجاح.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 bg-white border-0 focus-visible:ring-teal-500"
                dir="rtl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                className="bg-teal-600 hover:bg-teal-700 text-white shrink-0"
              >
                اشترك الآن
              </Button>
            </form>
          )}
          
          <p className="text-xs text-gray-500 mt-4">
            لن نشارك بريدك الإلكتروني مع أي جهة أخرى ويمكنك إلغاء الاشتراك في أي وقت.
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-200 rounded-full opacity-20 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200 rounded-full opacity-20 -translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}
