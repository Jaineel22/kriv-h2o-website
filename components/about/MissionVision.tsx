"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const cards = [
  {
    icon: Target,
    label: "Our Mission",
    headline: "Reliable, Affordable Advanced Purification",
    body: "To provide every home and business with access to reliable, affordable, and advanced water purification technology — backed by professional installation, genuine support, and long-term service commitment.",
    points: [
      "Accessible technology at honest pricing",
      "Professional installation and commissioning",
      "Long-term AMC and maintenance support",
      "Customer education and water consultation",
    ],
    gradient: "from-blue-600 to-cyan-500",
    lightBg: "bg-blue-50",
    border: "border-blue-100",
    badgeBg: "bg-blue-100",
    badgeColor: "text-blue-700",
    dotColor: "bg-blue-400",
  },
  {
    icon: Eye,
    label: "Our Vision",
    headline: "Trusted Regional Leader in Healthy Water Technology",
    body: "To become the most trusted name in water purification across Gujarat — known for exceptional service, innovative health-focused technology, and a customer-first approach that sets the standard for the industry.",
    points: [
      "Regional leadership in water purification",
      "Innovation in health mineral technology",
      "Expanding local service network",
      "Setting the benchmark for customer trust",
    ],
    gradient: "from-violet-600 to-indigo-500",
    lightBg: "bg-violet-50",
    border: "border-violet-100",
    badgeBg: "bg-violet-100",
    badgeColor: "text-violet-700",
    dotColor: "bg-violet-400",
  },
];

export default function MissionVision() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-xl mx-auto"
        >
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Purpose & Direction
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Mission & Vision
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            The principles that guide every product we offer and every service we deliver.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`rounded-3xl overflow-hidden border ${card.border} shadow-sm hover:shadow-lg transition-shadow duration-300`}
              >
                {/* Header */}
                <div className={`bg-gradient-to-br ${card.gradient} p-8 flex items-start gap-5`}>
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white mb-2`}>
                      {card.label}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-snug">{card.headline}</h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 bg-white flex flex-col gap-5">
                  <p className="text-slate-500 leading-relaxed">{card.body}</p>
                  <ul className="flex flex-col gap-3">
                    {card.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className={`w-1.5 h-1.5 rounded-full ${card.dotColor} flex-shrink-0 mt-1.5`} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}