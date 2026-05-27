"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Akota, Vadodara",
    rating: 5,
    text: "The MARVEL RO has been a game-changer for our family. The alkaline water tastes so clean and refreshing. Kriv's installation team was professional and quick — highly recommend!",
    initials: "PS",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Rajesh Patel",
    location: "Bhaili, Vadodara",
    rating: 5,
    text: "Excellent service from start to finish. The AMC support is prompt and the water quality has visibly improved. We've had zero issues in over a year of use.",
    initials: "RP",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Meena Desai",
    location: "Manjalpur, Vadodara",
    rating: 5,
    text: "Very happy with the NINE RO system. The Kriv team explained everything clearly and helped us choose the right model. The copper-infused water is a bonus for health!",
    initials: "MD",
    color: "bg-violet-100 text-violet-700",
  },
  {
    name: "Suresh Mehta",
    location: "Alkapuri, Vadodara",
    rating: 4,
    text: "Opted for the CANIX RO for our small office. Great value for money, easy maintenance, and the team is very responsive on WhatsApp. Solid local brand.",
    initials: "SM",
    color: "bg-amber-100 text-amber-700",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? "text-amber-400 fill-amber-400" : "text-slate-200 fill-slate-200"}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
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
            Customer Reviews
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Trusted by Vadodara Families
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Hear from real customers who experience the Kriv difference every day.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-7 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-5"
            >
              <StarRow count={t.rating} />
              <p className="text-slate-600 text-sm leading-relaxed flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-50">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-slate-900 text-sm font-semibold">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Aggregate rating */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-slate-900 font-bold text-lg">4.9</span>
            <span className="text-slate-400 text-sm">average from 500+ customers</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}