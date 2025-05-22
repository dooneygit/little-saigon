import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "About Us | Little Saigon Nails & Spa Hamilton",
  description: "Get to know our family-owned Hamilton nail salon. At Little Saigon Nails & Spa, we prioritize cleanliness, comfort, and care in a welcoming spa environment.",
  keywords: [
    "family-owned nail salon", "clean nail salon Hamilton", "nail spa story",
    "best nail salon Hamilton", "about Little Saigon Nails", "Hamilton spa"
  ],
  openGraph: {
    title: "About Us | Little Saigon Nails & Spa Hamilton",
    description: "Discover the story and values behind our trusted Hamilton nail salon. Cleanliness, safety, and care come first.",
    url: "https://littlesaigonnails.com/about",
    siteName: "Little Saigon Nails & Spa",
    images: [{
      url: "https://littlesaigonnails.com/og-about.jpg",
      width: 1200,
      height: 630,
      alt: "About Little Saigon Nails team",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Little Saigon Nails & Spa",
    description: "Learn more about Hamilton’s most trusted nail salon.",
    images: ["https://littlesaigonnails.com/og-about.jpg"],
  },
};

export default function About() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <main className="pt-[10rem] min-h-screen flex flex-col animate-[fadeIn_1s_ease-out_forwards]">
        <section className="relative w-full">
          <div
            className="w-full h-[20rem] bg-center bg-cover flex items-center justify-center"
            style={{ backgroundImage: "url('/images/nails-flowers.avif')" }}
            aria-hidden="true"
          >
            <div className="w-full h-full backdrop-blur-[2px] bg-black/20 flex items-center justify-center">
              <h1 className="text-5xl sm:text-6xl font-markazi text-white text-center font-extrabold">
                ABOUT US
              </h1>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 flex justify-center">
          <div className="w-full max-w-4xl font-markazi text-2xl text-red-800 bg-red-50 p-4 sm:p-8 shadow-sm">
            <p>
              At Little Saigon Nails & Spa in Hamilton, Ontario, we&apos;re more than just beauty — we&apos;re family. As a family-owned and operated nail salon, we&apos;re committed
              to creating a warm, welcoming environment where you can relax, recharge, and feel your best.
            </p>

            <div className="w-full flex justify-center my-6">
              <div className="w-full max-w-xl">
                <Image
                  src="/images/store.jpg"
                  alt="Storefront - Little Saigon Nails & Spa"
                  width={640}
                  height={480}
                  className="w-full h-auto rounded-xl shadow-md"
                />
              </div>
            </div>

            <p>
              Our passion for hygiene, comfort, and care sets us apart. We use sterilized, single-use tools and maintain a clean, serene environment to ensure your safety.
              Our nail technicians are trained in the latest sanitation practices, so you can relax knowing we prioritize your health and happiness at every step.
            </p>
            <br />

            <p>
              We proudly offer a full range of nail and beauty services for women, men, and kids — from classic and Shellac manicures to luxurious pedicures, nail cutting,
              sugar scrubs, paraffin wax treatments, and more.
            </p>
            <br />

            <p>
              Enhance your nails with Bio Gel full sets, overlays, and custom designs like ombré, chrome, and French tips. Our professional waxing services include facial,
              arms, legs, Brazilian, and full body options — all in a clean, friendly setting.
            </p>

            <div className="w-full flex justify-center my-6">
              <div className="relative w-full max-w-sm aspect-square">
                <Image
                  src="/images/french-tips.jpg"
                  alt="French tip nails - Little Saigon Nails & Spa"
                  fill
                  className="object-cover rounded-xl shadow-md"
                />
              </div>
            </div>

            <p>
              We believe in celebrating life&apos;s little moments — and helping you look and feel radiant while doing it.
              Whether it&apos;s self-care or a special event, we treat every guest like family.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
