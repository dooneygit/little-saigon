"use client";

import { useState } from "react";
import Link from "next/link";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative xl:hidden hover:-translate-y-1">
      {/* Hamburger Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-between w-8 h-6 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span className="h-1 bg-white rounded"></span>
        <span className="h-1 bg-white rounded"></span>
        <span className="h-1 bg-white rounded"></span>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-zinc-800 shadow-lg rounded-lg p-4 space-y-3 z-50 font-markazi text-[1.5rem]">
          <Link href="/" onClick={() => setOpen(false)} className="block hover:bg-zinc-900">HOME</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block hover:bg-zinc-900">ABOUT US</Link>
          <Link href="/services" onClick={() => setOpen(false)} className="block hover:bg-zinc-900">SERVICES</Link>
          <Link href="/promotions" onClick={() => setOpen(false)} className="block hover:bg-zinc-900">PROMOTIONS</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block hover:bg-zinc-900">CONTACT US</Link>
        </div>
      )}
    </div>
  );
}
