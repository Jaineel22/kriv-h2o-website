"use client";

import { motion } from "framer-motion";
import { Star, Zap, Shield, MapPin, Headphones, Award } from "lucide-react";

const indicators = [
  {
    icon: Star,
    title: "4.9★ Customer Rating",
    description:
      "Consistently rated 4.9 out of 5 by our customers for product quality, installation professionalism, and after-sales responsiveness.",
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: Zap,
    title: "Fast Installation",
    description:
      "Professional on-site installation completed within 24–48 hours of purchase. Our trained technicians handle everything from mounting to testing.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Shield,
    title: "AMC Maintenance Plans",
    description:
      "Comprehensive Annual Maintenance Contracts ensuring timely servicing, filter replacements, and priority support for your purification system.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: MapPin,
    title: "Local Service Availability",
    description:
      "With branches in Akota and Bhaili, our service team covers all major areas of Vadodara — ensuring short response times for all service calls.",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    icon: Headphones,
    title: "Dedicated Support Team",
    description:
      "Real local experts reachable on WhatsApp and phone — no automated bots, no long hold times. Just prompt, helpful responses from our team.",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
  },
  {
    icon: Award,
    title: "Quality You Can Trust",
    description:
      "Every product in our range is tested and certified for performance and safety. We stock only systems that meet our strict quality standards.",
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
];

export default function TrustIndicators() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-xl mx-auto"
        >
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Why Trust Kriv H2O
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Credibility Built on Every Interaction
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Our reputation is built one installation, one service call, and one satisfied customer at a time.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {indicators.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`p-7 rounded-2xl bg-white border ${ind.border} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4`}
              >
                <div className={`w-12 h-12 rounded-xl ${ind.bg} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${ind.color}`} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{ind.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{ind.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}