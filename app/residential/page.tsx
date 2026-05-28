import ResidentialHero from "@/components/residential/ResidentialHero";
import FilterBar from "@/components/residential/FilterBar";
import ProductGrid from "@/components/residential/ProductGrid";
import ProductComparison from "@/components/residential/ProductComparison";
import ResidentialCTA from "@/components/residential/ResidentialCTA";
import FAQAccordion from "@/components/shared/FAQAccordion";

const residentialFaqs = [
  {
    question: "How often should I replace the RO filters?",
    answer:
      "Sediment and carbon pre-filters should be replaced every 6–12 months. The RO membrane typically lasts 2–3 years depending on water quality and usage. Kriv H2O's AMC plan includes timely filter replacement reminders and service visits.",
  },
  {
    question: "What is included in the AMC (Annual Maintenance Contract)?",
    answer:
      "Our AMC covers periodic servicing, filter health checks, membrane inspection, sanitisation of the purifier, and priority support for breakdowns. It also includes one complimentary filter replacement per year.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Standard residential installation is completed within 1–2 hours by our trained local technicians. We schedule installation within 24–48 hours of purchase in the Vadodara service area.",
  },
  {
    question: "What is TDS and why does it matter?",
    answer:
      "TDS (Total Dissolved Solids) measures the concentration of dissolved minerals and contaminants in water. Our purifiers maintain an optimal TDS level of 100–150 ppm — safe and healthy, without stripping beneficial minerals.",
  },
  {
    question: "What is the benefit of Alkaline water technology?",
    answer:
      "Alkaline water has a higher pH (8–9.5), which many health experts associate with better hydration, improved digestion, and antioxidant properties. Our Alkaline filter adds beneficial minerals back into purified water naturally.",
  },
  {
    question: "Does the purifier work in areas with low water pressure?",
    answer:
      "Yes. All Kriv H2O residential models are designed to function reliably at standard municipal water pressures. A booster pump can be added for areas with consistently low pressure — our technicians will advise during site assessment.",
  },
  {
    question: "Is there a warranty on the products?",
    answer:
      "All Kriv H2O residential purifiers come with a 1-year comprehensive warranty covering manufacturing defects. Extended warranty and AMC plans are available at the time of purchase.",
  },
];

export default function ResidentialPage() {
  return (
    <main className="overflow-x-hidden">
      <ResidentialHero />
      <FilterBar />
      <ProductGrid />
      <ProductComparison />

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50/60">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
              FAQs
            </span>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
              Common Questions
            </h2>
            <p className="mt-4 text-slate-500 text-lg">
              Everything you need to know before buying a Kriv H2O purifier.
            </p>
          </div>
          <FAQAccordion faqs={residentialFaqs} />
        </div>
      </section>

      <ResidentialCTA />
    </main>
  );
}