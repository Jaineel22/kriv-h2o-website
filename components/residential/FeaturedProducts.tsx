"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    id: "marvel-ro",
    name: "MARVEL RO",
    tagline: "The Premium Choice",
    price: "₹14,999",
    priceNote: "onwards",
    gradient: "from-blue-600 to-cyan-400",
    features: ["Alkaline Technology", "Copper Infusion", "Zinc Enhancement", "Auto TDS Control", "8-Stage Filtration"],
    badge: "Best Seller",
    badgeColor: "bg-amber-100 text-amber-700",
    href: "/products/marvel-ro",
  },
  {
    id: "nine-ro",
    name: "NINE RO",
    tagline: "Complete Health System",
    price: "₹11,999",
    priceNote: "onwards",
    gradient: "from-violet-600 to-indigo-400",
    features: ["9-Stage Purification", "Alkaline Filter", "UV + RO + UF", "Smart LED Indicator", "Wall Mounted"],
    badge: "Most Popular",
    badgeColor: "bg-violet-100 text-violet-700",
    href: "/products/nine-ro",
  },
  {
    id: "canix-ro",
    name: "CANIX RO",
    tagline: "Essential Purification",
    price: "₹7,999",
    priceNote: "onwards",
    gradient: "from-emerald-600 to-teal-400",
    features: ["6-Stage RO+UV", "Auto Shut-Off", "TDS Controller", "High Flow Rate", "Compact Design"],
    badge: "Best Value",
    badgeColor: "bg-emerald-100 text-emerald-700",
    href: "/products/canix-ro",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
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
            Residential Range
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Our Signature Purifiers
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Engineered for Indian homes. Trusted by Vadodara families.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col"
            >
              {/* Visual */}
              <div className={`relative h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z" />
                  </svg>
                </div>
                {/* Badge */}
                <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1.5 rounded-full ${product.badgeColor}`}>
                  {product.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col gap-5 flex-1">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">{product.tagline}</p>
                  <h3 className="text-2xl font-bold text-slate-900">{product.name}</h3>
                  <div className="flex items-baseline gap-1.5 mt-2">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <span className="text-slate-400 text-sm">{product.priceNote}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-col gap-3 mt-auto pt-2">
                  <Link
                    href={product.href}
                    className="w-full text-center py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors duration-200"
                  >
                    View Details
                  </Link>
                  
                  <a
                    href={`https://wa.me/7096920059?text=I'm interested in the ${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Enquiry
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-blue-200 text-blue-600 font-semibold hover:bg-blue-50 transition-colors duration-200"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}