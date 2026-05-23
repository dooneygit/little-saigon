'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaHandSparkles, FaChevronDown } from 'react-icons/fa';

export default function ServicesDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-2 font-markazi text-[1.6rem] text-white hover:-translate-y-1 duration-300 transition-transform">
        <FaHandSparkles size={23} />
        SERVICES
        <FaChevronDown size={13} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <>
          {/* invisible bridge so onMouseLeave doesn't fire in the gap */}
          <div className="absolute top-full left-0 h-2 w-full" />
          <div className="absolute top-full left-0 mt-2 bg-zinc-800 rounded-lg shadow-lg z-50 py-2 min-w-[140px]">
            <Link
              href="/services"
              className="block px-4 py-2 font-markazi text-[1.4rem] text-white hover:bg-zinc-700 rounded-t-lg"
            >
              ADULTS
            </Link>
            <Link
              href="/services/kids"
              className="block px-4 py-2 font-markazi text-[1.4rem] text-white hover:bg-zinc-700 rounded-b-lg"
            >
              KIDS
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
