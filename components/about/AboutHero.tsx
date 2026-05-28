"use client";

import { motion, Variants } from "framer-motion";
import { Star, MapPin, Shield, Zap } from "lucide-react";

const trust = [
  { icon: Star, label: "4.9★ Customer Rated" },
  { icon: MapPin, label: "Vadodara Based" },
  { icon: Shield, label: "AMC Support" },
  { icon: Zap, label: "Fast Installation" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.11, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function AboutHero() {
  return (
    <section className="relative min-h-[72vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-cyan-50/60">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-cyan-100/50 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-[360px] h-[360px] rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <div className="flex flex-col gap-7">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/60 text-blue-700 text-sm font-semibold tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            About Kriv H2O
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-5xl lg:text-6xl font-bold leading-[1.07] tracking-tight text-slate-900"
          >
            Committed to Cleaner,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400">
              Healthier Water
            </span>{" "}
            Solutions
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg text-slate-600 leading-relaxed max-w-lg"
          >
            Kriv H2O Private Limited provides advanced water purification systems
            with trusted local installation and support across Vadodara.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-wrap gap-3"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-lg shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
            
            <a
              href="https://wa.me/919999999999?text=Hi, I'd like to know more about Kriv H2O"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-wrap gap-3 pt-1"
          >
            {trust.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/80 border border-slate-100 shadow-sm text-sm text-slate-700 font-medium"
              >
                <Icon className="w-3.5 h-3.5 text-blue-500" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex justify-center items-center"
        >
          <div className="relative w-full max-w-sm">
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-400 p-1 shadow-2xl shadow-blue-200">
              <div className="rounded-[22px] bg-white/10 backdrop-blur-sm p-10 flex flex-col items-center gap-6">
                <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-14 h-14 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-xl">Kriv H2O Pvt. Ltd.</p>
                  <p className="text-white/70 text-sm mt-1">Est. 2021 · Vadodara, Gujarat</p>
                </div>
                <div className="w-full grid grid-cols-2 gap-2">
                  {[
                    { label: "Customers", value: "500+" },
                    { label: "Rating", value: "4.9★" },
                    { label: "Locations", value: "2" },
                    { label: "Since", value: "2021" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/10 rounded-xl px-3 py-2.5 text-center">
                      <p className="text-white/60 text-xs">{s.label}</p>
                      <p className="text-white font-bold text-base mt-0.5">{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}