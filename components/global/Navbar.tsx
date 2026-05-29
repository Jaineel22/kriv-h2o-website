"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from '../../lib/utils';
import Container from './Container';
import navigation from '../../data/navigation';
import Logo from './Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60">
      <Container className="flex items-center justify-between py-3">
        <Logo />

        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className={cn('p-2 rounded-md text-gray-700')}
          >
            <span>{open ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </Container>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <Container className="py-3 flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-base text-gray-700 hover:text-gray-900 py-1"
              >
                {item.title}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}