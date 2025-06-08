"use client";

import { useState } from "react";
import Link from "next/link";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="xl:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-between w-8 h-6 focus:outline-none active:scale-95 text-white"
        aria-label="Toggle menu"
      >
        <span className="w-full h-1 bg-white block rounded"></span>
        <span className="w-full h-1 bg-white block rounded"></span>
        <span className="w-full h-1 bg-white block rounded"></span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-zinc-800 text-white shadow-lg rounded-lg p-4 space-y-3 z-50 font-markazi text-[1.5rem]">
          <Link href="/" onClick={() => setOpen(false)} className="block hover:bg-zinc-900 rounded px-2 py-1">
            HOME
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block hover:bg-zinc-900 rounded px-2 py-1">
            ABOUT US
          </Link>
          <Link href="/services" onClick={() => setOpen(false)} className="block hover:bg-zinc-900 rounded px-2 py-1">
            SERVICES
          </Link>
          <Link href="/promotions" onClick={() => setOpen(false)} className="block hover:bg-zinc-900 rounded px-2 py-1">
            PROMOTIONS
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block hover:bg-zinc-900 rounded px-2 py-1">
            CONTACT US
          </Link>
        </div>
      )}
    </div>
  );
}
