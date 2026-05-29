"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
        <Image
          src="/kriv_logo.jpg"
          alt="Kriv H2O Logo"
          width={40}
          height={40}
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-slate-800 font-bold text-sm md:text-base tracking-tight">
          KRIV H2O
        </span>
        <span className="text-slate-500 text-[10px] md:text-xs font-medium tracking-wide">
          Water Solutions
        </span>
      </div>
    </Link>
  );
}