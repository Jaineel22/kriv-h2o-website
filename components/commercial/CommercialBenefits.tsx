"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wrench,
  Cpu,
  Gauge,
  MapPin,
  Clock,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "AMC Support",
    description:
      "Comprehensive Annual Maintenance Contracts with scheduled inspections, filter replacements, and priority breakdown response for uninterrupted operations.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    icon: Wrench,
    title: "Industrial Installation",
    description:
      "End-to-end on-site installation by trained commercial technicians — from site survey and civil planning to system commissioning and staff training.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Cpu,
    title: "PLC Automation",
    description:
      "Programmable Logic Controller systems for larger plants — enabling automated operations, real-time monitoring, fault alerts, and reduced manpower dependency.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    icon: Gauge,
    title: "TDS Management",
    description:
      "Precision TDS monitoring and control systems to maintain optimal water quality levels — critical for food, pharmaceutical, and manufacturing applications.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: MapPin,
    title: "Local Service Team",
    description:
      "Dedicated Vadodara-based commercial service team offering fast on-site response times — no waiting weeks for out-of-city technicians.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    icon: Clock,
    title: "Long-Term Reliability",
    description:
      "Systems engineered with industrial-grade components designed for 10+ years of continuous operation with minimal downtime and predictable maintenance schedules.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
];

export default function CommercialBenefits() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Why Kriv Commercial
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Engineered for Business Continuity
          </h2>
          <p className="mt-4 text-slate-400 text-lg leading-relaxed">
            Every commercial RO deployment is backed by a comprehensive support infrastructure built for long-term operational reliability.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`p-7 rounded-2xl bg-slate-800 border ${b.border} hover:border-opacity-60 transition-all duration-300 flex flex-col gap-5`}
              >
                <div className={`w-12 h-12 rounded-xl ${b.bg} border ${b.border} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${b.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{b.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
