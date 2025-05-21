import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";
import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us | Little Saigon Nails & Spa</title>
        <meta name="description" content="Learn about Little Saigon Nails & Spa in Hamilton, our mission to deliver top-tier nail and spa services, and why clients love us." />
        <meta name="keywords" content="about Little Saigon, nail salon story, spa team, nail care mission, beauty salon, Hamilton" />
      </Head>
      <div className="overflow-x-hidden">
        <NavBar />
        <main className="pt-[10rem] min-h-screen flex flex-col animate-[fadeIn_1s_ease-out_forwards]">
          {/* Hero Section */}
          <section className="relative w-full">
            <div
              className="w-full h-[20rem] bg-center bg-cover flex items-center justify-center"
              style={{
                backgroundImage: "url('/images/nails-flowers.avif')",
              }}
            >
              <div className="w-full h-full backdrop-blur-[2px] bg-black/20 flex items-center justify-center">
                <h1 className="text-6xl font-markazi text-white text-center font-extrabold">
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
                At Little Saigon Nails & Spa, we proudly offer a comprehensive range of professional nail care and beauty services tailored for women, men, and kids.
                Our expert technicians specialize in regular and shellac manicures and pedicures, deluxe pedicure packages with sugar scrubs and paraffin wax treatments,
                and precision nail cutting.
              </p>
              <br />
              <p>
                We offer stunning artificial nail enhancements including Bio Gel full sets, overlays, and refills, along with premium nail art
                like ombré, chrome, cat eye, and French designs. Our affordable waxing services cover everything from facial hair removal to full body waxing including
                Brazilian, legs, and arms. Whether you&apos;re looking for a relaxing pedicure, kid-friendly nail care, or a full set of glamorous nails, our clean, friendly,
                and experienced salon ensures you leave feeling beautiful and refreshed.
              </p>
              {/* French Tips Image */}
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
                Whether you&apos;re here for a routine self-care day or a special occasion, we treat every client like family.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
