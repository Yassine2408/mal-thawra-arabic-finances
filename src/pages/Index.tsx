import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedArticles from "@/components/FeaturedArticles";
import CategoriesSection from "@/components/CategoriesSection";
import FinancialTips from "@/components/FinancialTips";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-cairo">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedArticles />
        <CategoriesSection />
        <FinancialTips />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
