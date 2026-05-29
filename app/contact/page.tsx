import { generatePageMetadata } from "@/lib/metadata";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import BranchCard, { Branch } from "@/components/contact/BranchCard";
import GoogleMap from "@/components/contact/GoogleMap";
import BusinessHours from "@/components/contact/BusinessHours";
import PaymentMethods from "@/components/contact/PaymentMethods";

// Generate metadata with custom overrides for the contact page
export const metadata = generatePageMetadata("contact", {
  title: "Contact Us — Kriv H2O Private Limited",
  description:
    "Get in touch with Kriv H2O for product consultation, installation support, AMC services, and commercial RO inquiries. Serving all areas of Vadodara.",
});

const branches: Branch[] = [
  {
    name: "Akota Branch",
    address: "Akota, Vadodara, Gujarat — 390020",
    phone: "+91 99999 99999",
    timing: "Monday – Saturday, 9:00 AM – 7:00 PM",
    mapLink: "https://maps.google.com/?q=Akota+Vadodara",
    waLink: "https://wa.me/919999999999?text=Enquiry from Akota branch",
    callLink: "tel:+919999999999",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    name: "Bhaili Branch",
    address: "Bhaili, Vadodara, Gujarat — 391410",
    phone: "+91 99999 99999",
    timing: "Monday – Saturday, 9:00 AM – 7:00 PM",
    mapLink: "https://maps.google.com/?q=Bhaili+Vadodara",
    waLink: "https://wa.me/919999999999?text=Enquiry from Bhaili branch",
    callLink: "tel:+919999999999",
    gradient: "from-emerald-600 to-teal-500",
  },
];

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <ContactHero />
      <ContactForm />

      {/* Branch Locations */}
      <section className="py-24 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14 max-w-xl mx-auto">
            <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Branches
            </span>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
              Visit Us in Vadodara
            </h2>
            <p className="mt-4 text-slate-500 text-lg">
              Two branches across the city for your convenience.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {branches.map((branch) => (
              <BranchCard key={branch.name} branch={branch} />
            ))}
          </div>
        </div>
      </section>

      <GoogleMap />
      <BusinessHours />
      <PaymentMethods />
    </main>
  );
}