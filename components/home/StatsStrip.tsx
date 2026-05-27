"use client";

import { motion } from "framer-motion";
import { Users, Star, Calendar, MapPin } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Customers Served", color: "text-blue-500", bg: "bg-blue-50" },
  { icon: Star, value: "4.9★", label: "Rated Support", color: "text-amber-500", bg: "bg-amber-50" },
  { icon: Calendar, value: "2021", label: "Established", color: "text-emerald-500", bg: "bg-emerald-50" },
  { icon: MapPin, value: "Multiple", label: "Service Locations", color: "text-violet-500", bg: "bg-violet-50" },
];

export default function StatsStrip() {
  return (
    <section className="py-14 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-50/60 border border-slate-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-slate-900 tracking-tight">{stat.value}</p>
                  <p className="text-slate-500 text-sm mt-1 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}