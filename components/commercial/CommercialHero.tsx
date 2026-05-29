"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Wrench, Shield, Gauge, MapPin } from "lucide-react";

const trust = [
  { icon: Wrench, label: "Industrial Installation Support" },
  { icon: Shield, label: "AMC Maintenance Services" },
  { icon: Gauge, label: "High-Capacity RO Systems" },
  { icon: MapPin, label: "Local Vadodara Service Team" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.11, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function CommercialHero() {
  return (
    <section className="relative min-h-[82vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/8 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,0.3) 40px,rgba(255,255,255,0.3) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,0.3) 40px,rgba(255,255,255,0.3) 41px)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div className="flex flex-col gap-7">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Commercial Division — Kriv H2O
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-5xl lg:text-6xl font-bold leading-[1.07] tracking-tight text-white"
          >
            Commercial RO Systems{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Built for Scale
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg text-slate-400 leading-relaxed max-w-lg"
          >
            Reliable high-capacity water purification solutions for hotels,
            hospitals, factories, offices, and institutions.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-base shadow-lg shadow-cyan-900/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              Request Quote
            </a>
            
            <a
              href="https://wa.me/919999999999?text=I need a commercial RO system solution"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Consultation
            </a>
          </motion.div>

          {/* Trust badges */}
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
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 font-medium"
              >
                <Icon className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
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
            <div className="rounded-3xl bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-slate-700/30 border border-white/10 p-1 shadow-2xl shadow-black/40">
              <div className="rounded-[22px] bg-slate-800/80 backdrop-blur-sm p-6 flex flex-col items-center gap-6">
                {/* Brand Logo Image */}
                <div className="relative w-28 h-28 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/kriv_logo.jpg"
                    alt="Kriv H2O Logo"
                    width={112}
                    height={112}
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain w-full h-full"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAUABQDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAwQFBgcCAP/EACQQAAEDBAEDBQAAAAAAAAAAAAECAwQABRESBhMhUTJBYXGR/8QAGAEAAgMAAAAAAAAAAAAAAAAAAgMAAQT/xAAYEQADAQEAAAAAAAAAAAAAAAAAAQIDEv/aAAwDAQACEQMRAD8A2aPHjR2hHijpNj1DOe/zTQaJ86ohSFjYJSn27YIpyMvENn1e2nYh2/eMgCs9veQs2sFBSUuOCtReXlUgwqptFq4za2tUNhRIKj91VjWaOzM6iwpR+qnYMph1pGNUn86pmQuNGHpb5FYm3yYd6rFgw7T/YA//Z"
                  />
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-xl">Commercial Range</p>
                  <p className="text-slate-400 text-sm mt-1">25 LPH — 2000+ LPH</p>
                </div>
                <div className="w-full grid grid-cols-2 gap-2">
                  {[
                    { label: "Capacity", value: "Up to 2000 LPH" },
                    { label: "Automation", value: "PLC / Manual" },
                    { label: "Installation", value: "On-site" },
                    { label: "AMC", value: "Included" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/5 rounded-xl px-3 py-2.5">
                      <p className="text-slate-500 text-xs">{s.label}</p>
                      <p className="text-slate-200 text-sm font-semibold mt-0.5">{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute -left-10 top-8 bg-slate-800 border border-white/10 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <Shield className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-none">AMC</p>
                <p className="text-slate-400 text-xs mt-0.5">Service Plans</p>
              </div>
            </div>
            <div className="absolute -right-10 bottom-10 bg-slate-800 border border-white/10 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Wrench className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-none">PLC</p>
                <p className="text-slate-400 text-xs mt-0.5">Automation</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}