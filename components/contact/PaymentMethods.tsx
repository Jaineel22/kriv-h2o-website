"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const methods = [
  { label: "UPI", icon: "₹", bg: "bg-violet-50", border: "border-violet-100", text: "text-violet-700" },
  { label: "Google Pay", icon: "G", bg: "bg-blue-50", border: "border-blue-100", text: "text-blue-700" },
  { label: "PhonePe", icon: "P", bg: "bg-indigo-50", border: "border-indigo-100", text: "text-indigo-700" },
  { label: "Paytm", icon: "₮", bg: "bg-sky-50", border: "border-sky-100", text: "text-sky-700" },
  { label: "Debit Card", icon: "💳", bg: "bg-emerald-50", border: "border-emerald-100", text: "text-emerald-700" },
  { label: "Credit Card", icon: "💳", bg: "bg-teal-50", border: "border-teal-100", text: "text-teal-700" },
  { label: "Net Banking", icon: "🏦", bg: "bg-amber-50", border: "border-amber-100", text: "text-amber-700" },
  { label: "Cash", icon: "💵", bg: "bg-green-50", border: "border-green-100", text: "text-green-700" },
];

export default function PaymentMethods() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-xl mx-auto"
        >
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Payment Options
          </span>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
            Multiple Ways to Pay
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            We accept all major payment methods for your convenience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
        >
          {methods.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className={`flex flex-col items-center gap-3 p-4 rounded-2xl bg-white border ${m.border} shadow-sm hover:shadow-md transition-all duration-200 cursor-default`}
            >
              <div className={`w-11 h-11 rounded-xl ${m.bg} flex items-center justify-center text-xl`}>
                <span className={`font-bold ${m.text}`}>{m.icon}</span>
              </div>
              <p className="text-slate-700 text-xs font-semibold text-center leading-snug">{m.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-2 text-slate-400 text-sm"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          All transactions are safe, secure, and receipt-confirmed.
        </motion.div>
      </div>
    </section>
  );
}