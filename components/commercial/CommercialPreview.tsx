"use client";

import { motion } from "framer-motion";
import CommercialCard, { CommercialSystem } from "./CommercialCard";

const systems: CommercialSystem[] = [
  {
    id: "25-lph",
    capacity: "25 LPH",
    capacityNote: "Entry Commercial",
    automationType: "Manual",
    suitableIndustries: ["Offices", "Clinics", "Restaurants", "Schools"],
    features: [
      "Multi-stage RO purification",
      "Auto shut-off & flush valve",
      "TDS controller included",
      "Compact footprint design",
      "Standard pressure pump",
    ],
    installationSupport: "On-Site",
    maintenanceSupport: "AMC available — quarterly service visits included",
    gradient: "from-slate-600 to-slate-500",
    badge: "Compact",
    badgeColor: "bg-slate-200 text-slate-800",
    href: "/commercial#quote",
  },
  {
    id: "250-lph",
    capacity: "250 LPH",
    capacityNote: "Mid-Capacity",
    automationType: "Semi-Automatic",
    suitableIndustries: ["Hotels", "Hospitals", "Factories", "Institutions"],
    features: [
      "High-flow membrane array",
      "Auto backwash system",
      "Digital TDS monitoring",
      "Stainless steel housing",
      "Priority AMC support plan",
    ],
    installationSupport: "On-Site",
    maintenanceSupport: "Priority AMC — bi-monthly inspections and emergency support",
    gradient: "from-blue-700 to-cyan-600",
    badge: "Most Ordered",
    badgeColor: "bg-cyan-100 text-cyan-800",
    href: "/commercial#quote",
  },
  {
    id: "500-lph",
    capacity: "500 LPH",
    capacityNote: "High Capacity",
    automationType: "PLC Automated",
    suitableIndustries: ["Large Hotels", "Hospitals", "Industrial Plants", "Institutions"],
    features: [
      "PLC-controlled automation",
      "Multi-membrane pressure vessel",
      "Real-time TDS & flow monitoring",
      "CIP (Clean-in-Place) system",
      "Dedicated service account manager",
    ],
    installationSupport: "Turnkey On-Site",
    maintenanceSupport: "Premium AMC — monthly scheduled service with 24hr emergency response",
    gradient: "from-slate-800 to-blue-900",
    badge: "Enterprise",
    badgeColor: "bg-blue-100 text-blue-800",
    href: "/commercial#quote",
  },
];

export default function CommercialPreview() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <span className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            System Range
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Commercial RO Plant Systems
          </h2>
          <p className="mt-4 text-slate-400 text-lg leading-relaxed">
            Scalable capacity options engineered for the real operational demands of every business type.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {systems.map((system, i) => (
            <CommercialCard key={system.id} system={system} index={i} />
          ))}
        </div>

        {/* Custom capacity note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center p-6 rounded-2xl border border-white/8 bg-white/3"
        >
          <p className="text-slate-400 text-sm">
            Need a custom capacity above 500 LPH?{" "}
            <a
              href="https://wa.me/919999999999?text=I need a custom capacity commercial RO plant above 500 LPH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
            >
              Contact our commercial team →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}