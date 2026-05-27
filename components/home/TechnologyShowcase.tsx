"use client";

import { motion } from "framer-motion";
import { Droplets, Cpu, Leaf, Sliders } from "lucide-react";

const technologies = [
  {
    icon: Leaf,
    title: "Alkaline Technology",
    description:
      "Raises the pH level of purified water to 8–9.5, creating alkaline water that supports better hydration, digestion, and overall body balance.",
    highlight: "pH 8–9.5",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: Droplets,
    title: "Copper Infusion",
    description:
      "Naturally infuses trace copper into your drinking water — supporting immunity, metabolism, and cardiovascular health the Ayurvedic way.",
    highlight: "Ayurvedic Benefit",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
    badge: "bg-amber-100 text-amber-700",
  },
  {
    icon: Cpu,
    title: "Zinc Enhancement",
    description:
      "Adds micro-doses of Zinc to fortify immunity and support growth and repair — essential for everyday health that's often missing from treated water.",
    highlight: "Immunity Boost",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    icon: Sliders,
    title: "Automatic TDS Control",
    description:
      "Smart TDS controllers maintain the optimal mineral balance in purified water — never too pure, always healthy and great-tasting.",
    highlight: "Smart Control",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    badge: "bg-blue-100 text-blue-700",
  },
];

export default function TechnologyShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
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
            Our Technology
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Water Science You Can Trust
          </h2>
          <p className="mt-4 text-slate-500 text-lg leading-relaxed">
            Beyond purification — we engineer every drop for maximum health benefit with our proprietary mineral enrichment technologies.
          </p>
        </motion.div>

        {/* Technology cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`relative p-7 rounded-2xl bg-white border ${tech.border} shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-5`}
              >
                {/* Badge */}
                <span className={`absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full ${tech.badge}`}>
                  {tech.highlight}
                </span>

                <div className={`w-12 h-12 rounded-xl ${tech.bg} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${tech.color}`} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 pr-20">{tech.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{tech.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <p className="text-slate-400 text-sm font-medium">
            All Kriv H2O systems are tested and certified for quality, safety, and performance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}