import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Kids Nail Services | Little Saigon Nails Hamilton",
  description:
    "Nail services for kids at Little Saigon Nails Hamilton. Manicures, pedicures, shellac, and combo packages with kid-friendly pricing.",
  keywords: [
    "kids nail services Hamilton", "kids manicure Hamilton", "kids pedicure Hamilton",
    "kids shellac Hamilton", "children nail care Hamilton", "kids spa Hamilton",
  ],
  openGraph: {
    title: "Kids Nail Services | Little Saigon Nails Hamilton",
    description:
      "Nail services for kids in Hamilton. Manicures, pedicures, shellac, and combos at kid-friendly prices.",
    url: "https://littlesaigonnails.com/services/kids",
    siteName: "Little Saigon Nails & Spa",
    images: [
      {
        url: "https://littlesaigonnails.com/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Little Saigon kids nail services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kids Nail Services | Little Saigon Nails Hamilton",
    description:
      "Fun nail services for kids in Hamilton with kid-friendly pricing.",
    images: ["https://littlesaigonnails.com/og-services.jpg"],
  },
};

export default function KidsServices() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <main className="pt-[10rem] sm:pt-[13rem] min-h-screen flex flex-col items-center mb-16 px-4 sm:px-6 md:px-8 animate-[fadeIn_1s_ease-out_forwards]">
        <div className="p-4 w-full max-w-6xl space-y-6">
          <div className="bg-zinc-800 p-6 rounded-xl flex flex-col items-center w-[70%] font-markazi text-white text-[2.5rem] sm:text-[3rem] md:text-[4rem] mx-auto">
            KIDS SERVICES
          </div>
          <div className="bg-gray-100 p-6 rounded-xl w-[90%] mx-auto">
            <h2 className="text-zinc-800 text-center font-markazi text-[1.5rem] md:text-[2rem]">COMPLIMENTARY TEA, POP, WATER, COFFEE</h2>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              <div className="w-[6.5rem] sm:w-[7rem] md:w-[8rem] aspect-[1/1] rounded-xl overflow-hidden shadow-lg relative">
                <Image
                  src="/images/coffee.avif"
                  alt="A hot cup of coffee"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 25vw, 10vw"
                  priority
                />
              </div>
              <div className="w-[6.5rem] sm:w-[7rem] md:w-[8rem] aspect-[1/1] rounded-xl overflow-hidden shadow-lg relative">
                <Image
                  src="/images/tea.avif"
                  alt="A warm cup of tea"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 25vw, 10vw"
                />
              </div>
              <div className="w-[6.5rem] sm:w-[7rem] md:w-[8rem] aspect-[1/1] rounded-xl overflow-hidden shadow-lg relative">
                <Image
                  src="/images/soda.avif"
                  alt="A cold glass of soda pop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 25vw, 10vw"
                />
              </div>
            </div>
          </div>
          <p className="font-roboto text-black text-center mt-4">
            New discounted prices effective starting May 1st*
          </p>
        </div>

        <div className="bg-pink-200 px-4 py-10 sm:px-8 md:px-10 rounded-2xl shadow-lg w-full max-w-6xl flex flex-col items-center space-y-10">

          <div className="bg-pink-100 p-6 rounded-xl w-full flex flex-col items-center">
            <div className="flex flex-col md:flex-row justify-center items-start w-full">
              <div className="flex flex-col items-center md:items-start w-full min-w-0">
                <h2 className="text-[2.5rem] font-markazi text-pink-400 text-center md:text-left">REGULAR</h2>
                <ul className="list-disc text-[1.5rem] font-markazi text-pink-300 ml-5">
                  <li>FINGERNAIL COLOR - $8</li>
                  <li>TOENAIL COLOR - $10</li>
                  <li>MANICURE - $15</li>
                  <li>PEDICURE - $23</li>
                </ul>
              </div>
              <div className="flex flex-col items-center md:items-start w-full min-w-0">
                <h2 className="text-[2.5rem] font-markazi text-pink-400 text-center md:text-left">SHELLAC</h2>
                <ul className="list-disc text-[1.5rem] font-markazi text-pink-300 ml-5">
                  <li>FINGERNAIL SHELLAC - $18</li>
                  <li>TOENAIL SHELLAC - $20</li>
                  <li>MANICURE SHELLAC - $28</li>
                  <li>PEDICURE SHELLAC - $38</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-pink-400 p-6 rounded-xl w-full flex flex-col items-center">
            <h2 className="text-[2.5rem] font-markazi text-white text-center">SPECIAL COMBO</h2>
            <ul className="list-disc text-[1.8rem] font-markazi text-white ml-5 mt-4">
              <li>PEDICURE REGULAR + MANICURE REGULAR - $38</li>
              <li>PEDICURE REGULAR + MANICURE SHELLAC - $48</li>
              <li>PEDICURE SHELLAC + MANICURE REGULAR - $53</li>
              <li>PEDICURE SHELLAC + MANICURE SHELLAC - $63</li>
            </ul>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
