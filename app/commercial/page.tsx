import { generatePageMetadata } from "@/lib/metadata";

// Generate metadata with custom overrides for the commercial page
export const metadata = generatePageMetadata("commercial", {
  title: "Commercial RO Systems — Kriv H2O",
  description:
    "High-capacity commercial RO water purification systems for hotels, hospitals, factories, offices, and institutions. Industrial installation and AMC support in Vadodara.",
});

import CommercialHero from "@/components/commercial/CommercialHero";
import IndustryTabs from "@/components/commercial/IndustryTabs";
import CommercialPreview from "@/components/commercial/CommercialPreview";
import CommercialBenefits from "@/components/commercial/CommercialBenefits";
import QuoteForm from "@/components/commercial/QuoteForm";
import CommercialCTA from "@/components/commercial/CommercialCTA";

export default function CommercialPage() {
  return (
    <main className="overflow-x-hidden bg-slate-950">
      <CommercialHero />
      <IndustryTabs />
      <CommercialPreview />
      <CommercialBenefits />
      <QuoteForm />
      <CommercialCTA />
    </main>
  );
}