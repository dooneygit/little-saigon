'use client';
import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  text: string;
  icon?: React.ReactNode; // React icon component
}

const NavLink: React.FC<NavLinkProps> = ({ href, text, icon }) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 font-markazi text-[1.6rem] text-white hover:-translate-y-1 duration-300 transition-transform"
    >
      {icon}
      {text}
    </Link>
  );
};

export default NavLink;

