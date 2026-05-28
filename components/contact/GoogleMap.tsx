"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

// 🗺️ Google Maps embed URL for Akota branch
const branches = [
  {
    name: "Akota Branch",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.80015380078!2d73.1655410750689!3d22.285558879697277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc781bd4090fb%3A0x2af2aee9eacf4408!2sKRIV%20-%20Water%20Solution%20%7C%20Best%20Ro%20shop%20in%20Vadodara%20%7C%20Ro%20sales%20%26%20service!5e0!3m2!1sen!2sin!4v1779960042305!5m2!1sen!2sin",
    mapLink: "https://maps.google.com/?q=KRIV+Water+Solution+Akota+Vadodara",
    color: "from-blue-600 to-cyan-500",
  },
];

export default function GoogleMap() {
  return (
    <section id="map" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-xl mx-auto"
        >
          <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Find Us
          </span>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
            Our Branch Location
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Visit us at our Vadodara branch for product demos, consultations, or service visits.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Branch label */}
              <div className={`bg-gradient-to-r ${branch.color} px-6 py-4 flex items-center justify-between`}>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-white" />
                  <span className="text-white font-bold text-base">{branch.name}</span>
                </div>
                <a
                  href={branch.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
                >
                  Open in Maps
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map embed */}
              <div className="relative w-full h-64 bg-slate-100">
                <iframe
                  src={branch.embedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map for ${branch.name}`}
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}