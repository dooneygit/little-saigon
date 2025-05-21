import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Promotions() {
    return (
        <>
        <Head>
          <title>Promotions | Little Saigon Nails & Spa</title>
          <meta name="description" content="Check out the latest nail salon promotions and group discounts at Little Saigon Nails & Spa in Hamilton. Save on your next visit!" />
          <meta name="keywords" content="nail salon deals, beauty discounts, spa promotions, group offers, nail specials" />
        </Head>

        <NavBar />
        <main className="pt-[13rem] min-h-screen flex flex-col items-center mb-16 animate-[fadeIn_1s_ease-out_forwards]">
            <div className="relative w-[70%] min-h-screen">
            <div
              className="absolute inset-0 bg-cover bg-center blur-[4px]"
              style={{ backgroundImage: "url('/images/promotion-deals.avif')" }}
            /> 
              <div className="relative z-10 flex justify-center py-12">
                <div className="relative bg-rose-50 w-[60%] min-h-screen flex flex-col items-center p-6 rounded-xl shadow-xl">
                  <h1 className="font-markazi text-pink-900 text-[6rem]">PROMOTIONS</h1>
                  <ul className="text-[3rem] font-markazi text-pink-300 text-center">
                    <li>10% OFF FOR BIRTHDAY PARTIES OR WEDDING GROUPS.</li>
                    <li>10% OFF FOR GROUP OF 4 OR MORE</li>
                  </ul>
                </div>
              </div>
          </div>
        </main>
        <Footer />
        </>
    );
}
