"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";

const locations = [
  {
    name: "Akota Branch",
    address: "Akota, Vadodara, Gujarat",
    timing: "Mon–Sat, 9am–7pm",
    mapLink: "https://maps.google.com/?q=Akota+Vadodara",
    waLink: "https://wa.me/7096920059?text=Enquiry from Akota branch",
    color: "from-blue-600 to-cyan-500",
  },
  {
    name: "Bhaili Branch",
    address: "Bhaili, Vadodara, Gujarat",
    timing: "Mon–Sat, 9am–7pm",
    mapLink: "https://maps.google.com/?q=Bhaili+Vadodara",
    waLink: "https://wa.me/7096920059?text=Enquiry from Bhaili branch",
    color: "from-emerald-600 to-teal-500",
  },
];

export default function LocationsBanner() {
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
            Our Locations
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Local Support, Right Where You Are
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            With branches across Vadodara, fast installation and service support is always nearby.
          </p>
        </motion.div>

        {/* Location Cards */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${loc.color} p-6 flex items-center gap-4`}>
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{loc.name}</h3>
              </div>

              {/* Body */}
              <div className="p-6 bg-white flex flex-col gap-4">
                <div className="flex items-start gap-3 text-slate-600 text-sm">
                  <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                  {loc.address}
                </div>
                <div className="flex items-start gap-3 text-slate-600 text-sm">
                  <Clock className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                  {loc.timing}
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={loc.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium text-sm transition-colors duration-200"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                    Open in Maps
                  </a>
                  
                  <a
                    href={loc.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium text-sm transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 text-sm font-medium flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            Local technicians. Same-day response. City-wide coverage across Vadodara.
          </p>
        </motion.div>
      </div>
    </section>
  );
}