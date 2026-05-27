"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Hotel, Hospital, Factory, Building, ArrowRight, CheckCircle2 } from "lucide-react";

const segments = [
  { icon: Hotel, label: "Hotels", desc: "High-volume purification for F&B and guest supply" },
  { icon: Hospital, label: "Hospitals", desc: "Ultra-pure water for clinical and sterile applications" },
  { icon: Factory, label: "Factories", desc: "Industrial RO for process water and cooling systems" },
  { icon: Building, label: "Offices", desc: "Compact commercial systems for staff and clients" },
];

const highlights = [
  "High-capacity output — 100 to 2000+ LPH",
  "Corrosion-resistant stainless steel builds",
  "Priority AMC & emergency maintenance",
  "Custom installation and system design",
  "Certified for commercial compliance",
];

export default function CommercialPreview() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Commercial Division
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-white tracking-tight">
                Industrial-Grade Water Solutions for Business
              </h2>
              <p className="mt-5 text-slate-400 text-lg leading-relaxed">
                Kriv H2O delivers robust, high-capacity RO systems engineered for demanding commercial environments — where reliability, volume, and compliance are non-negotiable.
              </p>
            </div>

            {/* Highlights */}
            <ul className="flex flex-col gap-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/commercial"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-sm transition-colors duration-200"
              >
                View Commercial Range
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a
                href="https://wa.me/7096920059?text=I need a commercial RO solution"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-slate-600 hover:border-slate-400 text-white font-semibold text-sm transition-colors duration-200"
              >
                Request a Quote
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Segment cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {segments.map((seg, i) => {
              const Icon = seg.icon;
              return (
                <motion.div
                  key={seg.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-cyan-700 transition-all duration-300 flex flex-col gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-700 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">{seg.label}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{seg.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}