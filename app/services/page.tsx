import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Nail & Spa Services | Little Saigon Nails Hamilton",
  description:
    "Explore our full range of nail and spa services: manicures, pedicures, nail art, Bio Gel, waxing, and more. Serving women, men, and kids in Hamilton.",
  keywords: [
    "nail services Hamilton", "manicure pedicure Hamilton", "shellac manicure",
    "bio gel nails Hamilton", "waxing Hamilton", "nail art Hamilton",
    "chrome nails", "kids nail care", "spa pedicure Hamilton"
  ],
  openGraph: {
    title: "Nail & Spa Services | Little Saigon Nails Hamilton",
    description:
      "Professional nail services in Hamilton for every occasion. Nails, waxing, and more from trained experts.",
    url: "https://littlesaigonnails.com/services",
    siteName: "Little Saigon Nails & Spa",
    images: [
      {
        url: "https://littlesaigonnails.com/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Little Saigon nail services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Services | Little Saigon Nails Hamilton",
    description:
      "From shellac to deluxe pedicures, we have got your beauty needs covered.",
    images: ["https://littlesaigonnails.com/og-services.jpg"],
  },
};

export default function Services() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <main className="pt-[10rem] sm:pt-[13rem] min-h-screen flex flex-col items-center mb-16 px-4 sm:px-6 md:px-8 animate-[fadeIn_1s_ease-out_forwards]">
        <div className="p-4 w-full max-w-6xl space-y-6">
          <div className="bg-zinc-800 p-6 rounded-xl flex flex-col items-center w-[70%] font-markazi text-white text-[2.5rem] sm:text-[3rem] md:text-[4rem] mx-auto">
            SERVICES
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

        <div className="bg-blue-100 px-4 py-10 sm:px-8 md:px-10 rounded-2xl shadow-lg w-full max-w-6xl flex flex-col items-center space-y-10">

          <div className="bg-blue-200 p-6 rounded-xl w-full flex flex-col items-center">
            <div className="flex flex-col md:flex-row justify-center items-start w-full">
              <div className="flex flex-col items-center md:items-start w-full min-w-0">
                <h2 className="text-[2.5rem] font-markazi text-blue-500 text-center md:text-left">REGULAR</h2>
                <ul className="list-disc text-[1.5rem] font-markazi text-gray-700 ml-5">
                  <li>FINGERNAIL COLOR - 2 | KIDS - $8</li>
                  <li>TOENAIL COLOR - $15 | KIDS - $10</li>
                  <li>MANICURE - $23 | KIDS - $15</li>
                  <li>PEDICURE - $35 | KIDS - $23</li>
                </ul>
              </div>
              <div className="flex flex-col items-center md:items-start w-full min-w-0">
                <h2 className="text-[2.5rem] font-markazi text-blue-500 text-center md:text-left">SHELLAC</h2>
                <ul className="list-disc text-[1.5rem] font-markazi text-gray-700 ml-5">
                  <li>FINGERNAIL SHELLAC - $25 | KIDS - $18</li>
                  <li>TOENAIL SHELLAC - $27 | KIDS - $20</li>
                  <li>MANICURE SHELLAC - $35 | KIDS - $28</li>
                  <li>PEDICURE SHELLAC - $50 | KIDS - $38</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-start w-full">
              <div className="flex flex-col items-center md:items-start w-full min-w-0">
                <h2 className="text-[2.5rem] font-markazi text-blue-500 text-center md:text-left">TOENAIL & FINGERNAIL CUT</h2>
                <ul className="list-disc text-[1.5rem] font-markazi text-gray-700 ml-5">
                  <li>FINGERNAIL - $8 | TOENAIL - $10</li>
                </ul>
              </div>
              <div className="flex flex-col items-center md:items-start w-full min-w-0">
                <h2 className="text-[2.5rem] font-markazi text-blue-500 text-center md:text-left">PARAFFIN WAX</h2>
                <ul className="list-disc text-[1.5rem] font-markazi text-gray-700 ml-5">
                  <li>FINGERNAIL - $8 | TOENAIL - $10</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-rose-300 p-6 rounded-xl w-full flex flex-col items-center">
            <h2 className="text-[2.5rem] font-markazi text-red-700 text-center">SPECIAL COMBO</h2>
            <ul className="list-disc text-[1.8rem] font-markazi text-white ml-5 mt-4">
              <li>PEDICURE REGULAR + MANICURE REGULAR - $53 | KIDS - $38</li>
              <li>PEDICURE REGULAR + MANICURE SHELLAC - $65 | KIDS - $48</li>
              <li>PEDICURE SHELLAC + MANICURE REGULAR - $68 | KIDS - $53</li>
              <li>PEDICURE SHELLAC + MANICURE SHELLAC - $80 | KIDS - $63</li>
            </ul>
          </div>

<div className="bg-blue-200 p-8 rounded-xl w-full flex flex-col md:flex-row items-start justify-center gap-12">
  <div className="flex flex-col space-y-2 w-full md:w-1/2 items-center min-w-0">
    <div className="flex flex-col items-center md:items-start">
      <h2 className="text-[2rem] font-markazi text-blue-500">BASIC PEDICURE - $35</h2>
    </div>
    <div className="flex flex-col items-center md:items-start">
      <h2 className="text-[2rem] font-markazi text-blue-500">PEDICURE + SUGAR SCRUB - $40</h2>
    </div>
    <div className="flex flex-col items-center">
      <h2 className="text-[2rem] font-markazi text-blue-500">DELUXE PEDICURE - $45</h2>
      <ul className="list-disc text-[1.3rem] font-markazi text-gray-700 ml-5 mt-2">
        <li>Sugar scrub: Boosts skin vibrancy, tone, renews texture, diminishes lines and wrinkles, leaving skin exfoliated and feeling smooth.</li>
        <li>Paraffin wax: Increases blood flow, relaxes muscles, decreases joint stiffness, minimizes muscle spasms and inflammation, treats sprains.</li>
      </ul>
    </div>
  </div>

  <div className="flex flex-col space-y-5 w-full md:w-1/2 min-w-0">
    <div className="flex flex-col items-center md:items-start">
      <h2 className="text-[2rem] font-markazi text-blue-500">PEDICURE + 10 MINUTE MASSAGE - $45</h2>
      <p className="text-[1.5rem] font-markazi text-gray-700 mt-2">Included: Sugar Scrub</p>
    </div>
    <div className="flex flex-col items-center md:items-start">
      <h2 className="text-[2rem] font-markazi text-blue-500">PEDICURE + 20 MINUTE MASSAGE</h2>
      <ul className="list-disc text-[1.3rem] font-markazi text-gray-700 ml-5 mt-2">
        <li>Sugar Scrub: Clears dead skin and reveals newer younger-looking skin.</li>
        <li>Hot Stone: Melts away mental stress, eases muscle stiffness, increases blood circulation, reduces tension, and promotes deep relaxation.</li>
      </ul>
    </div>
  </div>
</div>


        <div className="bg-blue-200 p-6 rounded-xl w-full">
  <h1 className="font-markazi text-[2rem] text-blue-400 text-center md:text-left">BIO GEL ARTIFICIAL NAILS</h1>
  <div className="w-full flex flex-col items-center">
    <div className="flex flex-col md:flex-row justify-center items-start w-full">
      <div className="flex flex-col items-center md:items-start w-full min-w-0">
        <h2 className="text-[2rem] font-markazi text-blue-500 text-center md:text-left">FULL SET (WITH TIP) - $60</h2>
      </div>
      <div className="flex flex-col items-center md:items-start w-full min-w-0">
        <h2 className="text-[2rem] font-markazi text-blue-500 text-center md:text-left">REFILL - $50</h2>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-center items-start w-full">
      <div className="flex flex-col items-center md:items-start w-full min-w-0">
        <h2 className="text-[2rem] font-markazi text-blue-500 text-center md:text-left">OVERLAY (NO TIP) - $55</h2>
      </div>
      <div className="flex flex-col items-center md:items-start w-full min-w-0">
        <h2 className="text-[2rem] font-markazi text-blue-500 text-center md:text-left">EXTRA LENGTH OF NAILS - $5-10</h2>
      </div>
    </div>
  </div>
</div>

<div className="bg-rose-300 p-6 rounded-xl w-full">
  <h1 className="font-markazi text-[2.3rem] text-center">ADDITIONAL SERVICES</h1>
  <br />
  <div className="w-full flex flex-col md:flex-row justify-center space-y-4 md:space-x-10 lg:space-x-30">
    <div className="flex flex-col items-center flex-1 min-w-0">
      <h2 className="font-markazi text-[2rem] text-red-800">OMBRE</h2>
      <ul className="list-disc text-[1.5rem] font-markazi text-white">
        <li>SPARKLE OMBRE NAILS - $5</li>
        <li>AIRBRUSH OMBRE NAIL - $10</li>
        <li>COLOR OMBRE NAIL - $15</li>
      </ul>
    </div>
    <div className="flex flex-col items-center flex-1 w-full min-w-0">
      <h2 className="font-markazi text-[2rem] text-red-800">FRENCH DESIGN</h2>
      <ul className="list-disc text-[1.5rem] font-markazi text-white">
        <li>FRENCH - $5</li>
        <li>DEEP FRENCH - $8</li>
        <li>CHROME - $10</li>
        <li>CAT EYE - $10</li>
      </ul>
    </div>
    <div className="flex flex-col items-center flex-1 min-w-0">
      <h2 className="font-markazi text-[1.8rem] text-red-800">REMOVAL</h2>
      <ul className="text-[1.5rem] font-markazi text-white">
        <li className="text-[1.2rem]">WITH SERVICE: (BUFFER, FILE, SHAPE, & TRIM)</li>
        <li>SHELLAC REMOVAL W/ SERVICE - $5</li>
        <li className="text-[1.1rem]">- JUST REMOVAL - $10</li>
        <li>ACRYLIC OR BIO GEL REMOVAL W/ SERVICE - $10</li>
        <li className="text-[1.1rem]">- JUST REMOVAL- $15</li>
      </ul>
    </div>
  </div>
</div>

<div className="bg-blue-200 p-6 rounded-xl w-full">
  <h1 className="font-markazi text-[3rem] text-blue-500 w-full text-center md:ml-6 md:text-left">WAXING</h1>
  <div className="flex flex-col md:flex-row w-full items-center justify-center gap-4">
    <div className="flex-1 flex flex-col items-center min-w-0">
      <ul className="list-disc text-[1.8rem] font-markazi break-words text-gray-700">
        <li>UPPER LIP - $6</li>
        <li>CHIN - $8</li>
        <li>SIDEBURNS - $10</li>
        <li>EYEBROWS - $12</li>
        <li>EARS - $12</li>
        <li>UNDERARMS - $15</li>
        <li>EYEBROW TINTING - $17</li>
        <li>BIKINI LINE - $25</li>
      </ul>
    </div>
    <div className="flex-1 flex flex-col items-center min-w-0">
      <ul className="list-disc text-[1.8rem] font-markazi break-words flex-1 text-gray-700">
        <li>FULL FACE - $33</li>
        <li>CHEST OR BELLY - $35</li>
        <li>HALF ARMS - $25</li>
        <li>FULL ARMS - $35</li>
        <li>HALF LEGS - $30</li>
        <li>FULL LEGS - $45</li>
        <li>BACK - $45</li>
        <li>BRAZILIAN - $45</li>
      </ul>
    </div>
  </div>
</div>

      </div>
      </main>
      <Footer />
    </div>
  );
}
