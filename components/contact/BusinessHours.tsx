"use client";

import { motion } from "framer-motion";
import { Clock, CheckCircle2, XCircle } from "lucide-react";

const schedule = [
  { day: "Monday", open: true, hours: "9:00 AM – 7:00 PM" },
  { day: "Tuesday", open: true, hours: "9:00 AM – 7:00 PM" },
  { day: "Wednesday", open: true, hours: "9:00 AM – 7:00 PM" },
  { day: "Thursday", open: true, hours: "9:00 AM – 7:00 PM" },
  { day: "Friday", open: true, hours: "9:00 AM – 7:00 PM" },
  { day: "Saturday", open: true, hours: "9:00 AM – 6:00 PM" },
  { day: "Sunday", open: false, hours: "Closed" },
];

const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

export default function BusinessHours() {
  return (
    <section id="hours" className="py-24 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest">
              Working Hours
            </span>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              When We're Available
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Our branches and support team are available Monday through Saturday. For urgent assistance on non-working hours, reach us on WhatsApp.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-sm">Mon – Fri</p>
                  <p className="text-slate-500 text-sm">9:00 AM – 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-sm">Saturday</p>
                  <p className="text-slate-500 text-sm">9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-sm">Sunday</p>
                  <p className="text-slate-500 text-sm">Closed — WhatsApp available</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Full schedule */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-white border border-slate-100 shadow-sm overflow-hidden"
          >
            <div className="px-6 py-5 border-b border-slate-50 flex items-center gap-3">
              <Clock className="w-5 h-5 text-blue-500" />
              <span className="font-bold text-slate-900 text-base">Weekly Schedule</span>
            </div>
            <div className="divide-y divide-slate-50">
              {schedule.map((row) => {
                const isToday = row.day === today;
                return (
                  <div
                    key={row.day}
                    className={`flex items-center justify-between px-6 py-4 transition-colors duration-150 ${
                      isToday ? "bg-blue-50/60" : "hover:bg-slate-50/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {row.open ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <XCircle className="w-4 h-4 text-slate-300" />
                      )}
                      <span
                        className={`text-sm font-semibold ${
                          isToday ? "text-blue-700" : "text-slate-700"
                        }`}
                      >
                        {row.day}
                        {isToday && (
                          <span className="ml-2 text-xs font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-600">
                            Today
                          </span>
                        )}
                      </span>
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        row.open ? "text-slate-600" : "text-slate-400"
                      }`}
                    >
                      {row.hours}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="px-6 py-4 bg-slate-50/60 border-t border-slate-100">
              <p className="text-slate-400 text-xs text-center">
                AMC emergency support available via WhatsApp outside business hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}