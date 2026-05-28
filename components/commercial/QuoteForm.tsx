"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";

const industryOptions = [
  "Hotel / Resort",
  "Hospital / Clinic",
  "Factory / Manufacturing",
  "Office / Corporate",
  "Restaurant / Café",
  "School / Institution",
  "Other",
];

const capacityOptions = [
  "Less than 50 LPH",
  "50 – 100 LPH",
  "100 – 250 LPH",
  "250 – 500 LPH",
  "500 – 1000 LPH",
  "Above 1000 LPH",
  "Not Sure — Need Guidance",
];

interface FormState {
  fullName: string;
  businessName: string;
  industryType: string;
  dailyRequirement: string;
  phone: string;
  location: string;
  message: string;
}

const initial: FormState = {
  fullName: "",
  businessName: "",
  industryType: "",
  dailyRequirement: "",
  phone: "",
  location: "",
  message: "",
};

// TODO: Replace ALL occurrences of 919999999999 with your actual Kriv H2O WhatsApp number
const WHATSAPP_NUMBER = "919999999999"; // ← Change this!

const inputBase =
  "w-full px-4 py-3.5 rounded-xl bg-slate-800 border border-white/10 text-slate-200 placeholder:text-slate-600 text-sm font-medium focus:outline-none focus:border-cyan-500/50 focus:bg-slate-800/80 transition-colors duration-200";

const labelBase = "block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2";

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again or WhatsApp us directly.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to send. Please WhatsApp us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const waMessage = encodeURIComponent(
    `Hi Kriv H2O,\n\nI'd like a commercial RO quote.\n\nName: ${form.fullName}\nBusiness: ${form.businessName}\nIndustry: ${form.industryType}\nRequired Capacity: ${form.dailyRequirement}\nPhone: ${form.phone}\nLocation: ${form.location}\n\n${form.message}`
  );

  return (
    <section id="quote" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-14 items-start">
          {/* LEFT: Context */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-8 lg:sticky lg:top-24"
          >
            <div>
              <span className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Get a Quote
              </span>
              <h2 className="text-4xl font-bold text-white tracking-tight leading-tight">
                Request a Commercial Consultation
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Share your requirements and our commercial water experts will reach out within 24 hours with a tailored solution and quote.
              </p>
            </div>

            {/* What to expect */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                What Happens Next
              </p>
              {[
                { step: "01", text: "Our expert reviews your requirements" },
                { step: "02", text: "Site assessment scheduled if needed" },
                { step: "03", text: "Custom system recommendation provided" },
                { step: "04", text: "Detailed quotation shared within 24 hrs" },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {s.step}
                  </span>
                  <p className="text-slate-400 text-sm leading-relaxed pt-1">{s.text}</p>
                </div>
              ))}
            </div>

            {/* Quick WA */}
            <div className="p-5 rounded-2xl bg-slate-800 border border-white/8">
              <p className="text-slate-400 text-sm mb-3">Prefer to talk directly?</p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=I need a commercial RO system consultation`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-400 text-white font-bold text-sm transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us Now
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="rounded-3xl bg-slate-800 border border-cyan-500/20 p-12 text-center flex flex-col items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Send className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Enquiry Received</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Thank you, {form.fullName || "there"}. Our commercial team will contact you within 24 hours with a tailored solution.
                  </p>
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-white font-bold text-sm transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  Also send on WhatsApp
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-slate-800 border border-white/8 p-8 flex flex-col gap-6"
              >
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className={labelBase}>Full Name</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="Rajesh Patel"
                      value={form.fullName}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label htmlFor="businessName" className={labelBase}>Business Name</label>
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      required
                      placeholder="Grand Hotel Vadodara"
                      value={form.businessName}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="industryType" className={labelBase}>Industry Type</label>
                    <select
                      id="industryType"
                      name="industryType"
                      required
                      value={form.industryType}
                      onChange={handleChange}
                      className={inputBase}
                    >
                      <option value="" disabled>Select Industry</option>
                      {industryOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="dailyRequirement" className={labelBase}>Daily Water Requirement</label>
                    <select
                      id="dailyRequirement"
                      name="dailyRequirement"
                      required
                      value={form.dailyRequirement}
                      onChange={handleChange}
                      className={inputBase}
                    >
                      <option value="" disabled>Select Capacity</option>
                      {capacityOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className={labelBase}>Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className={labelBase}>Location / Area</label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      required
                      placeholder="Vadodara, Gujarat"
                      value={form.location}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelBase}>Additional Requirements</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe your specific water quality concerns, infrastructure, or any special requirements..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputBase} resize-none`}
                  />
                </div>

                {/* Submit row */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-sm transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? "Sending..." : "Request Consultation"}
                  </button>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-green-500 hover:bg-green-400 text-white font-bold text-sm transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Quote
                  </a>
                </div>

                <p className="text-slate-600 text-xs text-center">
                  Your information is confidential and will only be used to process your enquiry.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}