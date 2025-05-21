import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
export const metadata = {
  title: "Special Offers & Promotions | Little Saigon Nails Hamilton",
  description: "View our latest nail and spa promotions. Affordable beauty services, seasonal offers, and special discounts in Hamilton, ON.",
  keywords: [
    "nail salon deals", "spa promotions Hamilton", "beauty discounts",
    "manicure specials", "pedicure deals", "Hamilton nail salon promotions",
    "nail art discounts", "affordable spa Hamilton"
  ],
  openGraph: {
    title: "Promotions | Little Saigon Nails Hamilton",
    description: "Save on nails, waxing, and spa services with our current offers.",
    url: "https://littlesaigonnails.com/promotions",
    siteName: "Little Saigon Nails & Spa",
    images: [{
      url: "https://littlesaigonnails.com/og-promotions.jpg",
      width: 1200,
      height: 630,
      alt: "Little Saigon Nails promotions",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Promotions | Little Saigon Nails & Spa",
    description: "Check out our seasonal deals on nail and spa services in Hamilton.",
    images: ["https://littlesaigonnails.com/og-promotions.jpg"],
  },
}


export default function Promotions() {
    return (
        <>
        <NavBar />
        <main className="pt-[13rem] min-h-screen flex flex-col items-center mb-16 animate-[fadeIn_1s_ease-out_forwards]">
            <div className="relative w-[100%] lg:w-[70%] min-h-screen">
            <div
              className="absolute inset-0 bg-cover bg-center blur-[4px]"
              style={{ backgroundImage: "url('/images/promotion-deals.avif')" }}
            /> 
              <div className="relative z-10 flex justify-center py-12">
                <div className="relative bg-rose-50 w-[70%] lg:w-[60%] min-h-screen flex flex-col items-center p-6 rounded-xl shadow-xl">
                  <h1 className="font-markazi text-pink-900 text-[3rem] sm:text-[4rem] lg:text-[5rem]">PROMOTIONS</h1>
                  <ul className="text-[2.5rem] lg:text-[3rem] font-markazi text-pink-300 text-center">
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
