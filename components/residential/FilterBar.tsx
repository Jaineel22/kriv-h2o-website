"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const filters = {
  budget: [
    { label: "All", value: "all" },
    { label: "Under ₹8,000", value: "under-8k" },
    { label: "₹8,000 – ₹12,000", value: "8k-12k" },
    { label: "Above ₹12,000", value: "above-12k" },
  ],
  technology: [
    { label: "All", value: "all" },
    { label: "RO + UV", value: "ro-uv" },
    { label: "Alkaline", value: "alkaline" },
    { label: "Copper + Zinc", value: "copper-zinc" },
  ],
  storage: [
    { label: "All", value: "all" },
    { label: "Up to 8L", value: "upto-8l" },
    { label: "8L – 12L", value: "8l-12l" },
    { label: "12L+", value: "above-12l" },
  ],
};

type FilterKey = keyof typeof filters;

const filterLabels: Record<FilterKey, string> = {
  budget: "Budget",
  technology: "Technology",
  storage: "Storage Capacity",
};

function PillGroup({
  options,
  selected,
  onSelect,
}: {
  options: { label: string; value: string }[];
  selected: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onSelect(opt.value)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
            selected === opt.value
              ? "bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-200"
              : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export default function FilterBar() {
  const [selected, setSelected] = useState<Record<FilterKey, string>>({
    budget: "all",
    technology: "all",
    storage: "all",
  });

  const handleSelect = (key: FilterKey, value: string) => {
    setSelected((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-10 bg-white border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">
              Filter Products
            </span>
            <span className="h-px flex-1 bg-slate-100" />
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {(Object.keys(filters) as FilterKey[]).map((key) => (
              <div key={key} className="flex flex-col gap-2.5">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  {filterLabels[key]}
                </p>
                <PillGroup
                  options={filters[key]}
                  selected={selected[key]}
                  onSelect={(v) => handleSelect(key, v)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}