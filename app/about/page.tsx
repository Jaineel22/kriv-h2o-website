import { generatePageMetadata } from "@/lib/metadata";

// Generate metadata with custom overrides for the about page
export const metadata = generatePageMetadata("about", {
  title: "About Us — Kriv H2O Private Limited",
  description:
    "Kriv H2O is Vadodara's trusted water purification partner. Established in 2021, we serve 500+ customers with advanced RO systems, local installation, and AMC support.",
});

import AboutHero from "@/components/about/AboutHero";
import BrandStory from "@/components/about/BrandStory";
import MissionVision from "@/components/about/MissionVision";
import TrustIndicators from "@/components/about/TrustIndicators";
import LocationsSection from "@/components/about/LocationsSection";
import ServiceHighlights from "@/components/about/ServiceHighlights";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <AboutHero />
      <BrandStory />
      <MissionVision />
      <TrustIndicators />
      <LocationsSection />
      <ServiceHighlights />
    </main>
  );
}