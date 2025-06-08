//isolated logo link as client component for optimization
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
    <div className="flex space-x-10 items-center">
      <Link href="/" className="relative w-28 h-28 sm:w-36 sm:h-36 border-3 border-white hover:-translate-y-2 duration-300"> 
        <Image
          src="/images/logo.png" 
          alt="Logo for Little Saigon Nails & Spa Salon in Hamilton"
          fill 
          className="object-contain cursor-pointer" 
        />
      </Link>
    </div>
    );
  }
