"use client";

import { motion } from "framer-motion";
import { Filter, Heart, Wrench, BadgeDollarSign } from "lucide-react";

const features = [
  {
    icon: Filter,
    title: "Advanced Filtration",
    description:
      "Multi-stage RO filtration removes 99.9% of contaminants — heavy metals, bacteria, and dissolved solids — delivering pure, safe water every time.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Heart,
    title: "Health Mineral Technology",
    description:
      "Our systems infuse essential minerals — Alkaline, Copper & Zinc — back into purified water for a healthier, balanced drink.",
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
  {
    icon: Wrench,
    title: "Local Installation Support",
    description:
      "Expert technicians from Vadodara handle installation, AMC servicing, and emergency support — fast and reliable, every time.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Pricing",
    description:
      "Premium purification technology at honest prices — transparent quotes, zero hidden charges, and flexible annual maintenance contracts.",
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
];

export default function WhyKriv() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Why Choose Kriv H2O
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Built on Trust. Backed by Technology.
          </h2>
          <p className="mt-4 text-slate-500 text-lg leading-relaxed">
            We combine cutting-edge filtration with local expertise to deliver water purification you can rely on.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group p-7 rounded-2xl bg-white border ${f.border} shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-5`}
              >
                <div className={`w-13 h-13 w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}