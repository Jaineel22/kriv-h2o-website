"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Hotel,
  Hospital,
  Factory,
  Building,
  UtensilsCrossed,
  GraduationCap,
} from "lucide-react";

interface Industry {
  id: string;
  label: string;
  icon: React.ElementType;
  useCase: string;
  capacity: string;
  installationType: string;
  operationalBenefit: string;
}

const industries: Industry[] = [
  {
    id: "hotels",
    label: "Hotels",
    icon: Hotel,
    useCase:
      "Purified water for guest rooms, kitchens, restaurants, spas, and laundry operations — ensuring consistent water quality across all touchpoints.",
    capacity: "500 – 2000 LPH",
    installationType: "Centralised RO Plant",
    operationalBenefit:
      "Eliminates dependence on packaged water, reduces operational costs, and ensures guest satisfaction with safe, great-tasting water.",
  },
  {
    id: "hospitals",
    label: "Hospitals",
    icon: Hospital,
    useCase:
      "Ultra-pure water for patient care, sterilisation, dialysis support, lab use, and hospital kitchen operations with zero tolerance for contamination.",
    capacity: "250 – 1000 LPH",
    installationType: "Medical-Grade RO System",
    operationalBenefit:
      "Meets clinical water quality standards, reduces risk of waterborne infections, and ensures regulatory compliance for healthcare facilities.",
  },
  {
    id: "factories",
    label: "Factories",
    icon: Factory,
    useCase:
      "Process water purification for manufacturing, cooling towers, boiler feed, and quality control — tailored to industrial-grade specifications.",
    capacity: "1000 – 5000+ LPH",
    installationType: "Industrial RO Plant + PLC",
    operationalBenefit:
      "Protects industrial equipment from scaling, reduces maintenance downtime, and ensures consistent process water quality.",
  },
  {
    id: "offices",
    label: "Offices",
    icon: Building,
    useCase:
      "Clean drinking water for staff and visitors across multi-floor office buildings, co-working spaces, and corporate campuses.",
    capacity: "25 – 250 LPH",
    installationType: "Compact Commercial RO",
    operationalBenefit:
      "Promotes employee health and productivity, eliminates water-cooler logistics, and reduces operational overheads.",
  },
  {
    id: "restaurants",
    label: "Restaurants",
    icon: UtensilsCrossed,
    useCase:
      "High-purity water for food preparation, drinking water, ice machines, and beverage dispensing to ensure food safety compliance.",
    capacity: "100 – 500 LPH",
    installationType: "Under-Counter / Point-of-Use RO",
    operationalBenefit:
      "Improves taste of food and beverages, reduces dependence on bottled water, and ensures consistent kitchen water quality.",
  },
  {
    id: "schools",
    label: "Schools",
    icon: GraduationCap,
    useCase:
      "Safe, purified drinking water for students, staff, and canteen operations across educational institutions of all sizes.",
    capacity: "50 – 500 LPH",
    installationType: "Wall-Mount or Floor-Standing RO",
    operationalBenefit:
      "Protects student health, reduces plastic waste from bottled water, and ensures regulatory compliance for school water safety.",
  },
];

export default function IndustryTabs() {
  const [active, setActive] = useState<string>("hotels");
  const current = industries.find((i) => i.id === active)!;

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <span className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Industry Solutions
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Tailored for Every Sector
          </h2>
          <p className="mt-4 text-slate-400 text-lg leading-relaxed">
            Purpose-built commercial RO systems matched to the unique water requirements of each industry.
          </p>
        </motion.div>

        {/* Tab bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {industries.map((ind) => {
            const Icon = ind.icon;
            const isActive = active === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setActive(ind.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-500 border-cyan-500 text-slate-900 shadow-lg shadow-cyan-900/30"
                    : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                <Icon className="w-4 h-4" />
                {ind.label}
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl bg-slate-800 border border-white/8 overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              {/* Left: icon + use case */}
              <div className="p-10 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-white/8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <current.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-0.5">
                      Industry
                    </p>
                    <h3 className="text-2xl font-bold text-white">{current.label}</h3>
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed">{current.useCase}</p>
                <div className="mt-auto">
                  <a
                    href={`https://wa.me/919999999999?text=${encodeURIComponent(
                      `Hi, I need a commercial RO solution for my ${current.label} business. Please share details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-sm transition-all duration-200"
                  >
                    Get {current.label} Solution
                  </a>
                </div>
              </div>

              {/* Right: specs */}
              <div className="p-10 grid sm:grid-cols-1 gap-6">
                {[
                  { label: "Recommended Capacity", value: current.capacity },
                  { label: "Installation Type", value: current.installationType },
                  { label: "Operational Benefit", value: current.operationalBenefit },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-5 rounded-2xl bg-white/4 border border-white/8"
                  >
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
                      {item.label}
                    </p>
                    <p className="text-slate-200 font-medium leading-relaxed text-sm">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}