"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface CompareRow {
  label: string;
  marvel: string | boolean;
  nine: string | boolean;
  canix: string | boolean;
}

const rows: CompareRow[] = [
  { label: "Price", marvel: "₹14,999+", nine: "₹11,999+", canix: "₹7,999+" },
  { label: "Purification Stages", marvel: "8-Stage", nine: "9-Stage", canix: "6-Stage" },
  { label: "Storage Capacity", marvel: "15 Litres", nine: "12 Litres", canix: "10 Litres" },
  { label: "Suitable For", marvel: "4–6 Members", nine: "3–5 Members", canix: "2–4 Members" },
  { label: "Alkaline Technology", marvel: true, nine: true, canix: false },
  { label: "Copper Infusion", marvel: true, nine: false, canix: false },
  { label: "Zinc Enhancement", marvel: true, nine: false, canix: false },
  { label: "Auto TDS Control", marvel: true, nine: true, canix: true },
  { label: "UV Protection", marvel: true, nine: true, canix: true },
  { label: "Smart Display", marvel: true, nine: true, canix: false },
  { label: "Installation", marvel: "Free", nine: "Free", canix: "Free" },
  { label: "Warranty", marvel: "1 Year", nine: "1 Year", canix: "1 Year" },
];

const models = [
  { key: "marvel", label: "MARVEL RO", tag: "Premium", color: "text-blue-600", bg: "bg-blue-50" },
  { key: "nine", label: "NINE RO", tag: "Popular", color: "text-violet-600", bg: "bg-violet-50" },
  { key: "canix", label: "CANIX RO", tag: "Value", color: "text-emerald-600", bg: "bg-emerald-50" },
] as const;

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-emerald-500 mx-auto" />
    ) : (
      <span className="text-slate-200 text-xl leading-none mx-auto block text-center">—</span>
    );
  }
  return <span className="text-slate-700 font-medium text-sm">{value}</span>;
}

export default function ProductComparison() {
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
            Compare Models
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Find Your Perfect Match
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Side-by-side comparison to help you make a confident, informed choice.
          </p>
        </motion.div>

        {/* Scrollable wrapper for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm"
        >
          <table className="w-full min-w-[600px] border-collapse">
            {/* Header */}
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left px-6 py-5 text-sm font-semibold text-slate-400 uppercase tracking-widest w-44">
                  Feature
                </th>
                {models.map((m) => (
                  <th key={m.key} className="px-6 py-5 text-center">
                    <div className={`inline-flex flex-col items-center gap-1.5 px-5 py-3 rounded-xl ${m.bg}`}>
                      <span className={`text-base font-bold ${m.color}`}>{m.label}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-white/70 ${m.color}`}>
                        {m.tag}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Rows */}
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-t border-slate-50 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/40"} hover:bg-blue-50/20 transition-colors duration-150`}
                >
                  <td className="px-6 py-4 text-sm text-slate-500 font-medium">{row.label}</td>
                  {models.map((m) => (
                    <td key={m.key} className="px-6 py-4 text-center">
                      <Cell value={row[m.key]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

            {/* Footer CTA row */}
            <tfoot>
              <tr className="border-t border-slate-100 bg-slate-50">
                <td className="px-6 py-5 text-sm font-semibold text-slate-500">Enquire Now</td>
                {models.map((m) => (
                  <td key={m.key} className="px-6 py-5 text-center">
                    <a
                      href={`https://wa.me/919999999999?text=${encodeURIComponent(
                        `Hi, I'm interested in the Kriv H2O ${m.label}. Please share more details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white text-xs font-bold transition-colors duration-200"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp
                    </a>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </motion.div>
      </div>
    </section>
  );
}