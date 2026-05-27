"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function ResidentialCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-[380px] h-[380px] rounded-full bg-cyan-300/10 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-8"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
            <Phone className="w-8 h-8 text-white" />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Need Help Choosing the Right Home Purifier?
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto">
              Talk to a Kriv water expert for personalized recommendations and installation guidance — no pressure, just honest advice.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-700 font-bold text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Talk to Expert
            </a>
            
            <a
              href="https://wa.me/919999999999?text=I need help choosing a home water purifier"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/30 text-white font-bold text-base hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Inquiry
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-1">
            {["No obligation", "Same-day response", "Local Vadodara team", "Free consultation"].map((t) => (
              <span key={t} className="text-blue-100/80 text-sm font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}