"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";

const inquiryTypes = [
  "Residential RO System",
  "Commercial RO Plant",
  "AMC / Maintenance",
  "Installation Support",
  "Product Consultation",
  "Complaint / Service Issue",
  "Other",
];

interface FormState {
  fullName: string;
  phone: string;
  inquiryType: string;
  message: string;
}

const initial: FormState = {
  fullName: "",
  phone: "",
  inquiryType: "",
  message: "",
};

const inputBase =
  "w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:border-blue-400 focus:bg-white transition-colors duration-200";

const labelBase = "block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMsg(data.message || "Failed to send. Please try again or WhatsApp us.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMsg("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const waMessage = encodeURIComponent(
    `Hi Kriv H2O,\n\nName: ${form.fullName}\nPhone: ${form.phone}\nInquiry: ${form.inquiryType}\n\n${form.message}`
  );

  return (
    <section className="py-24 bg-white">
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
              <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
                Send a Message
              </span>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                We'd Love to Hear from You
              </h2>
              <p className="mt-4 text-slate-500 leading-relaxed">
                Fill the form and our team will respond within a few hours. For immediate assistance, reach us directly on WhatsApp.
              </p>
            </div>

            {/* Direct WhatsApp */}
            <div className="p-5 rounded-2xl bg-green-50 border border-green-100">
              <p className="text-green-800 font-semibold text-sm mb-1">Prefer instant response?</p>
              <p className="text-green-700 text-xs mb-3">WhatsApp is the fastest way to reach us.</p>
              <a
                href="https://wa.me/919999999999?text=Hi Kriv H2O, I need some help"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Open WhatsApp
              </a>
            </div>

            {/* Response promise */}
            <div className="flex flex-col gap-3">
              {[
                "Replies within a few hours",
                "No spam, no pressure",
                "Local Vadodara experts",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2.5 text-sm text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  {t}
                </div>
              ))}
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
              <div className="rounded-3xl bg-blue-50 border border-blue-100 p-12 text-center flex flex-col items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <Send className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 leading-relaxed">
                    Thank you{form.fullName ? `, ${form.fullName}` : ""}. We'll get back to you shortly. For faster response, use WhatsApp.
                  </p>
                </div>
                <a
                  href={`https://wa.me/919999999999?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  Also Message on WhatsApp
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-white border border-slate-100 shadow-sm p-8 flex flex-col gap-6"
              >
                {errorMsg && (
                  <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-xl">
                    {errorMsg}
                  </div>
                )}

                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className={labelBase}>Full Name</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="Priya Sharma"
                      value={form.fullName}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </div>
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
                </div>

                {/* Inquiry type */}
                <div>
                  <label htmlFor="inquiryType" className={labelBase}>Inquiry Type</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={form.inquiryType}
                    onChange={handleChange}
                    className={inputBase}
                  >
                    <option value="" disabled>Select inquiry type</option>
                    {inquiryTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelBase}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputBase} resize-none`}
                  />
                </div>

                {/* Submit row */}
                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-bold text-sm transition-colors duration-200"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </button>
                  <a
                    href={`https://wa.me/919999999999?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Chat
                  </a>
                </div>

                <p className="text-slate-400 text-xs text-center">
                  Your details are kept confidential and used only to respond to your inquiry.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}