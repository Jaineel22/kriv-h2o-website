"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileText } from "lucide-react";

export default function CommercialCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-blue-500/8 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 50px,rgba(255,255,255,0.4) 50px,rgba(255,255,255,0.4) 51px),repeating-linear-gradient(90deg,transparent,transparent 50px,rgba(255,255,255,0.4) 50px,rgba(255,255,255,0.4) 51px)",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-8"
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
            <FileText className="w-8 h-8 text-cyan-400" />
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-tight">
              Need a Commercial Water Purification Solution?
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Speak with our commercial water experts for customized RO plant recommendations and installation planning tailored to your business.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-base shadow-xl shadow-cyan-900/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <FileText className="w-5 h-5" />
              Get Free Quote
            </a>
            
            <a
              href="https://wa.me/919999999999?text=I need a commercial RO water purification solution"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/15 text-white font-bold text-base hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Consultation
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap justify-center gap-6 pt-1">
            {[
              "No-obligation quote",
              "24hr response time",
              "On-site assessment",
              "Local Vadodara team",
            ].map((t) => (
              <span key={t} className="text-slate-500 text-sm font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}