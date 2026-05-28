"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Wrench, Droplets, Users, PhoneCall } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Fast Installation",
    description:
      "Scheduled within 24–48 hours of purchase. Our trained technicians handle complete on-site installation, testing, and user briefing.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: ShieldCheck,
    title: "AMC Plans",
    description:
      "Annual Maintenance Contracts covering periodic servicing, filter health checks, membrane inspection, and priority breakdown response.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: Wrench,
    title: "Maintenance Support",
    description:
      "Routine and emergency maintenance by certified local technicians — ensuring your purification system operates at peak performance year-round.",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: Droplets,
    title: "Water Consultation",
    description:
      "Free expert consultation on your local water quality challenges, TDS levels, and the most suitable purification technology for your needs.",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
  },
  {
    icon: Users,
    title: "Local Technician Support",
    description:
      "A dedicated Vadodara-based service team — real people who understand your water quality issues and respond quickly to service requests.",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    icon: PhoneCall,
    title: "WhatsApp Support",
    description:
      "Reach our support team directly on WhatsApp for quick queries, service scheduling, product guidance, and AMC plan enquiries anytime.",
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
];

export default function ServiceHighlights() {
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
            What We Offer
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Full-Cycle Service Support
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            From consultation and installation to long-term maintenance — we're with you at every step.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`p-7 rounded-2xl bg-white border ${s.border} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4`}
              >
                <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${s.color}`} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <a
            href="https://wa.me/919999999999?text=Hi, I'd like to enquire about your services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-lg shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5"
          >
            Enquire About Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}