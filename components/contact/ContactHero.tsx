"use client";

import { motion, Variants } from "framer-motion";
import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";

const quickActions = [
  {
    icon: MessageCircle,
    label: "WhatsApp Chat",
    sub: "Fastest response",
    href: "https://wa.me/919999999999?text=Hi, I'd like to get in touch with Kriv H2O",
    color: "text-green-500",
    bg: "bg-green-50",
    border: "border-green-100",
    external: true,
  },
  {
    icon: Phone,
    label: "Call Us",
    sub: "+91 99999 99999",
    href: "tel:+919999999999",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    external: false,
  },
  {
    icon: Clock,
    label: "Working Hours",
    sub: "Mon–Sat, 9AM–7PM",
    href: "#hours",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
    external: false,
  },
  {
    icon: MapPin,
    label: "Locations",
    sub: "Akota & Bhaili",
    href: "#map",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    external: false,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-cyan-50/50 pt-20 pb-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-cyan-100/50 blur-3xl" />
        <div className="absolute -bottom-12 -left-12 w-[320px] h-[320px] rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center justify-center gap-2 w-fit mx-auto px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/60 text-blue-700 text-sm font-semibold tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            We're Here to Help
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.07]"
          >
            Get in Touch with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Kriv Water Experts
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Reach out for product consultation, installation support, AMC services, or commercial inquiries. Our team responds fast.
          </motion.p>
        </div>

        {/* Quick action cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto"
        >
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <a
                key={action.label}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                className={`flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border ${action.border} shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 text-center`}
              >
                <div className={`w-11 h-11 rounded-xl ${action.bg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${action.color}`} />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-sm">{action.label}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{action.sub}</p>
                </div>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}