"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Star, MapPin, Zap, Shield } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const trustBadges = [
  { icon: Star, label: "4.9★ Local Rating" },
  { icon: MapPin, label: "Vadodara Based" },
  { icon: Zap, label: "Fast Installation" },
  { icon: Shield, label: "AMC Support" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-cyan-50/60">
      {/* Background decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-80px] right-[-80px] w-[520px] h-[520px] rounded-full bg-cyan-100/50 blur-3xl" />
        <div className="absolute bottom-[-60px] left-[-60px] w-[380px] h-[380px] rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-sky-50/60 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: Content */}
        <div className="flex flex-col gap-8">
          {/* Pill badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/60 text-blue-700 text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Water Purification Specialists — Vadodara
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-slate-900"
          >
            Pure Water.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500">
              Healthier
            </span>{" "}
            Living.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg text-slate-600 leading-relaxed max-w-lg"
          >
            Advanced RO purification systems with Alkaline, Copper &amp; Zinc
            technology for homes and businesses.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-lg shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5"
            >
              Explore Solutions
            </Link>

            <a
              href="https://wa.me/7096920059"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-wrap gap-3 pt-2"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 border border-slate-100 shadow-sm text-sm text-slate-700 font-medium"
              >
                <Icon className="w-4 h-4 text-blue-500" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full max-w-md">
            {/* Main visual card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-400 p-1 shadow-2xl shadow-blue-200">
              <div className="rounded-[22px] bg-white/10 backdrop-blur-sm p-6 flex flex-col items-center gap-6">
                {/* Brand Logo Image */}
                <div className="relative w-40 h-40 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/kriv_logo.jpg"
                    alt="Kriv H2O Logo"
                    width={160}
                    height={160}
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain w-full h-full"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAUABQDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAwQFBgcCAP/EACQQAAEDBAEDBQAAAAAAAAAAAAECAwQABRESBhMhUTJBYXGR/8QAGAEAAgMAAAAAAAAAAAAAAAAAAgMAAQT/xAAYEQADAQEAAAAAAAAAAAAAAAAAAQIDEv/aAAwDAQACEQMRAD8A2aPHjR2hHijpNj1DOe/zTQaJ86ohSFjYJSn27YIpyMvENn1e2nYh2/eMgCs9veQs2sFBSUuOCtReXlUgwqptFq4za2tUNhRIKj91VjWaOzM6iwpR+qnYMph1pGNUn86pmQuNGHpb5FYm3yYd6rFgw7T/YA//Z"
                  />
                </div>
                <div className="text-center">
                  <p className="text-white/90 text-xl font-bold">KRIV H2O</p>
                  <p className="text-white/70 text-sm mt-1">Advanced RO Purification</p>
                </div>
                {/* Tech tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  {["Alkaline", "Copper", "Zinc", "TDS Control"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium border border-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute -left-8 top-10 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              </div>
              <div>
                <p className="text-slate-900 font-bold text-lg leading-none">4.9★</p>
                <p className="text-slate-500 text-xs mt-0.5">Rated Service</p>
              </div>
            </div>

            <div className="absolute -right-8 bottom-12 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-slate-900 font-bold text-lg leading-none">500+</p>
                <p className="text-slate-500 text-xs mt-0.5">Happy Customers</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}