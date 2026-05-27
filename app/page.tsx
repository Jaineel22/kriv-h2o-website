import HeroSection from "@/components/home/HeroSection";
import StatsStrip from "@/components/home/StatsStrip";
import WhyKriv from "@/components/home/WhyKriv";
import ProductCategories from "@/components/home/ProductCategories";
import TechnologyShowcase from "@/components/home/TechnologyShowcase";
import FeaturedProducts from "@/components/residential/FeaturedProducts";
import CommercialPreview from "@/components/commercial/CommercialPreview";
import Testimonials from "@/components/home/Testimonials";
import LocationsBanner from "@/components/home/LocationsBanner";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <StatsStrip />
      <WhyKriv />
      <ProductCategories />
      <TechnologyShowcase />
      <FeaturedProducts />
      <CommercialPreview />
      <Testimonials />
      <LocationsBanner />
      <CTASection />
    </main>
  );
}