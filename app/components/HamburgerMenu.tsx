"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const close = () => {
    setOpen(false);
    setServicesOpen(false);
  };

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
          <Link href="/" onClick={close} className="block hover:bg-zinc-900 rounded px-2 py-1">
            HOME
          </Link>
          <Link href="/about" onClick={close} className="block hover:bg-zinc-900 rounded px-2 py-1">
            ABOUT US
          </Link>

          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full text-left hover:bg-zinc-900 rounded px-2 py-1 flex justify-between items-center"
            >
              SERVICES
              <FaChevronDown
                size={13}
                className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1 mt-1">
                <Link href="/services" onClick={close} className="block hover:bg-zinc-900 rounded px-2 py-1">
                  ADULTS
                </Link>
                <Link href="/services/kids" onClick={close} className="block hover:bg-zinc-900 rounded px-2 py-1">
                  KIDS
                </Link>
              </div>
            )}
          </div>

          <Link href="/promotions" onClick={close} className="block hover:bg-zinc-900 rounded px-2 py-1">
            PROMOTIONS
          </Link>
          <Link href="/contact" onClick={close} className="block hover:bg-zinc-900 rounded px-2 py-1">
            CONTACT US
          </Link>
        </div>
      )}
    </div>
  );
}
