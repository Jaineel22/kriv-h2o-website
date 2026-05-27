"use client";

import React from 'react'
import { whatsappLink } from '../../lib/whatsapp'
import { company } from '../../data/company'

export default function WhatsAppFAB() {
  const href = whatsappLink(company.whatsapp || '')

  return (
    <div className="fixed right-5 bottom-5 z-50">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 text-white shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.7 5.3a11 11 0 10-3.1 15.4L22 22l1.3-4.9A11 11 0 0021.7 5.3z" fill="#fff" opacity="0.06" />
          <path d="M17.6 14.3c-.3-.1-1.8-.9-2.1-1s-.6-.2-.9.1c-.3.3-1.1 1-1.4 1.2-.3.2-.6.1-.9 0-.3-.1-1.1-.4-2.1-1.3-.8-.8-1.3-1.8-1.4-2-.1-.3 0-.5.2-.7.2-.2.3-.5.5-.8.2-.3.1-.6 0-.8-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.6-.9-.6-.2 0-.5 0-.8 0-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.9 0 2.3 1.6 4.6 1.9 5 .3.4 2.8 4.4 6.8 5.9 4 1.5 4.3.8 5.1.7.8-.1 2.5-1 2.8-2.4.3-1.4.3-2.6.2-2.9-.1-.3-.4-.5-.8-.6z" fill="#fff" />
        </svg>
      </a>
    </div>
  )
}
