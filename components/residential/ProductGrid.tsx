"use client";

import { motion } from "framer-motion";
import ProductCard, { ResidentialProduct } from "./ProductCard";

const residentialProducts: ResidentialProduct[] = [
  {
    id: "bizz-ro",
    name: "BIZZ RO",
    tagline: "Entry-Level Essential",
    price: "₹6,499",
    priceNote: "onwards",
    description:
      "An ideal starter purifier for small households. Clean, safe drinking water through reliable 6-stage RO+UV purification.",
    technologies: [
      { label: "RO + UV", variant: "uv" },
      { label: "TDS Control", variant: "tds" },
    ],
    features: [
      "6-Stage RO + UV purification",
      "Auto shut-off valve",
      "Wall-mounted compact design",
      "LED purification indicator",
    ],
    storage: "7 Litres",
    suitableFor: "1–3 Members",
    gradient: "from-slate-500 to-slate-400",
    badge: "Budget Pick",
    badgeColor: "bg-slate-100 text-slate-700",
    href: "/products/bizz-ro",
  },
  {
    id: "canix-ro",
    name: "CANIX RO",
    tagline: "Smart Family Purifier",
    price: "₹7,999",
    priceNote: "onwards",
    description:
      "Reliable multi-stage purification with an automatic TDS controller, ensuring your family gets perfectly balanced water.",
    technologies: [
      { label: "RO + UV + UF", variant: "uv" },
      { label: "TDS Control", variant: "tds" },
    ],
    features: [
      "6-Stage RO + UV + UF",
      "Auto TDS controller",
      "High flow rate output",
      "Compact wall-mount design",
    ],
    storage: "10 Litres",
    suitableFor: "2–4 Members",
    gradient: "from-emerald-600 to-teal-400",
    badge: "Best Value",
    badgeColor: "bg-emerald-100 text-emerald-700",
    href: "/products/canix-ro",
  },
  {
    id: "nine-ro",
    name: "NINE RO",
    tagline: "Complete Health System",
    price: "₹11,999",
    priceNote: "onwards",
    description:
      "Nine-stage purification system with Alkaline filtration and smart LED indicators for complete peace of mind.",
    technologies: [
      { label: "Alkaline", variant: "alkaline" },
      { label: "RO + UV + UF", variant: "uv" },
      { label: "TDS Control", variant: "tds" },
      { label: "Smart Display", variant: "smart" },
    ],
    features: [
      "9-Stage purification system",
      "Alkaline mineral filter",
      "Smart LED purity indicator",
      "Wall mounted slim profile",
    ],
    storage: "12 Litres",
    suitableFor: "3–5 Members",
    gradient: "from-violet-600 to-indigo-400",
    badge: "Most Popular",
    badgeColor: "bg-violet-100 text-violet-700",
    href: "/products/nine-ro",
  },
  {
    id: "marvel-ro",
    name: "MARVEL RO",
    tagline: "The Premium Flagship",
    price: "₹14,999",
    priceNote: "onwards",
    description:
      "Our most advanced residential purifier. Alkaline, Copper & Zinc infusion with automatic TDS control — complete health in every drop.",
    technologies: [
      { label: "Alkaline", variant: "alkaline" },
      { label: "Copper", variant: "copper" },
      { label: "Zinc", variant: "zinc" },
      { label: "TDS Control", variant: "tds" },
      { label: "UV Protection", variant: "uv" },
    ],
    features: [
      "8-Stage advanced filtration",
      "Alkaline + Copper + Zinc minerals",
      "Auto TDS smart controller",
      "Premium filter life indicator",
    ],
    storage: "15 Litres",
    suitableFor: "4–6 Members",
    gradient: "from-blue-600 to-cyan-400",
    badge: "Best Seller",
    badgeColor: "bg-amber-100 text-amber-700",
    href: "/products/marvel-ro",
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="py-24 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-xl mx-auto"
        >
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Product Range
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Choose Your Perfect Purifier
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Four distinct models — each engineered for specific household needs and health goals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7">
          {residentialProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}