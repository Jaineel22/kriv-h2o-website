"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Home, Building2 } from "lucide-react";

const categories = [
  {
    icon: Home,
    tag: "For Families",
    title: "Residential Solutions",
    description:
      "Compact, elegant RO systems designed for kitchens and homes. Enjoy clean, mineral-rich water with our Alkaline, Copper & Zinc-infused purifiers.",
    cta: "Explore Residential",
    href: "/residential",
    gradient: "from-blue-600 to-cyan-500",
    lightBg: "bg-blue-50",
    textColor: "text-blue-600",
    features: ["Alkaline Technology", "Copper & Zinc Infusion", "Smart TDS Control"],
  },
  {
    icon: Building2,
    tag: "For Business",
    title: "Commercial Solutions",
    description:
      "High-capacity industrial RO systems for hotels, hospitals, factories and offices. Scalable, robust, and maintained by local experts.",
    cta: "Explore Commercial",
    href: "/commercial",
    gradient: "from-slate-700 to-slate-500",
    lightBg: "bg-slate-50",
    textColor: "text-slate-700",
    features: ["High Capacity Output", "Industrial Grade Build", "Priority AMC Support"],
  },
];

export default function ProductCategories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-xl mx-auto"
        >
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Solutions
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Water Purification for Every Need
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
              >
                {/* Visual header */}
                <div className={`relative h-52 bg-gradient-to-br ${cat.gradient} flex items-center justify-center`}>
                  <div className="w-24 h-24 rounded-full bg-white/15 flex items-center justify-center">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <span className="absolute top-5 left-5 text-xs font-semibold text-white/80 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/20">
                    {cat.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col gap-5">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{cat.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{cat.description}</p>
                  </div>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.features.map((f) => (
                      <span
                        key={f}
                        className={`text-xs font-medium px-3 py-1.5 rounded-full ${cat.lightBg} ${cat.textColor} border border-current/10`}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={cat.href}
                    className={`inline-flex items-center gap-2 font-semibold ${cat.textColor} group-hover:gap-3 transition-all duration-200 mt-1`}
                  >
                    {cat.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}