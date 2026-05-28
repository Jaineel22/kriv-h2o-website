"use client";

import { motion } from "framer-motion";
import { Calendar, Heart, Users, Award } from "lucide-react";

const milestones = [
  {
    icon: Calendar,
    year: "2021",
    title: "Founded in Vadodara",
    body: "Kriv H2O was established with a clear mission — to bring advanced, affordable water purification to homes and businesses across Vadodara.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Users,
    year: "2022",
    title: "Growing Customer Trust",
    body: "Within our first year, we served over 200 residential and commercial customers, building a reputation for reliable installation and honest after-sales support.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: Award,
    year: "2023",
    title: "Expanding Our Range",
    body: "We introduced our flagship MARVEL RO and NINE RO systems featuring Alkaline, Copper, and Zinc mineral infusion — technologies previously unavailable at accessible price points locally.",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    icon: Heart,
    year: "Today",
    title: "500+ Families Served",
    body: "With 500+ satisfied customers, two service branches, and a dedicated local technician team, we continue to grow as Vadodara's trusted water purification partner.",
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
];

export default function BrandStory() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 lg:sticky lg:top-24"
          >
            <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Built on a Simple Belief — Everyone Deserves Clean Water
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Kriv H2O started with a straightforward idea: advanced water purification technology should be accessible, affordable, and backed by trustworthy local service — not just a luxury for a few.
            </p>
            <p className="text-slate-500 leading-relaxed">
              We are a Vadodara-based team of water purification specialists who understand the local water quality challenges, the needs of Indian households, and the demands of commercial operations. Every product we recommend, every system we install, and every service visit we conduct is guided by a long-term relationship — not a one-time transaction.
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
              <div className="text-center">
                <p className="text-3xl font-bold text-slate-900">500+</p>
                <p className="text-slate-500 text-sm mt-0.5">Customers</p>
              </div>
              <div className="w-px h-10 bg-slate-100" />
              <div className="text-center">
                <p className="text-3xl font-bold text-slate-900">4.9★</p>
                <p className="text-slate-500 text-sm mt-0.5">Avg Rating</p>
              </div>
              <div className="w-px h-10 bg-slate-100" />
              <div className="text-center">
                <p className="text-3xl font-bold text-slate-900">2</p>
                <p className="text-slate-500 text-sm mt-0.5">Branches</p>
              </div>
              <div className="w-px h-10 bg-slate-100" />
              <div className="text-center">
                <p className="text-3xl font-bold text-slate-900">3+</p>
                <p className="text-slate-500 text-sm mt-0.5">Years</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Timeline */}
          <div className="flex flex-col gap-5">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`p-7 rounded-2xl bg-white border ${m.border} shadow-sm hover:shadow-md transition-shadow duration-300 flex gap-5`}
                >
                  <div className={`w-12 h-12 rounded-xl ${m.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${m.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${m.bg} ${m.color}`}>
                        {m.year}
                      </span>
                      <h3 className="text-base font-bold text-slate-900">{m.title}</h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{m.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}