"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Brand column */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-slate-500 leading-relaxed">
              Advanced water purification solutions for homes and businesses.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/kriv.h2O/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-slate-400 hover:text-blue-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://wa.me/919999999999?text=Hi Kriv H2O, I have a question"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-slate-400 hover:text-green-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-4 text-sm">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/residential" className="text-slate-500 hover:text-blue-600">Residential</Link></li>
              <li><Link href="/commercial" className="text-slate-500 hover:text-blue-600">Commercial</Link></li>
              <li><Link href="/about" className="text-slate-500 hover:text-blue-600">About</Link></li>
              <li><Link href="/contact" className="text-slate-500 hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-4 text-sm">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="text-slate-500 hover:text-blue-600">Products</Link></li>
              <li><Link href="/amc" className="text-slate-500 hover:text-blue-600">AMC Plans</Link></li>
              <li><a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-green-500">WhatsApp Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-4 text-sm">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>Akota, Vadodara, Gujarat</li>
              <li><a href="tel:+919999999999" className="hover:text-blue-600">+91 99999 99999</a></li>
              <li><a href="mailto:hello@krivh2o.com" className="hover:text-blue-600">hello@krivh2o.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-10 pt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Kriv H2O Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}