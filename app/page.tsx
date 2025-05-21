import Image from "next/image";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import GoogleReviews from "./components/GoogleReviews";
import Head from "next/head";
export default function Home() {
  return (
    <>
    <Head>
      <title>Little Saigon Nails & Spa</title>
      <meta name="description" content="Welcome to Little Saigon Nails & Spa – a relaxing and luxurious nail salon experience offering manicures, pedicures, and spa treatments in [City]." />
      <meta name="keywords" content="nail salon, manicure, pedicure, spa, Little Saigon, beauty, nails, Hamilton" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
    </Head>

      <NavBar />
      <main className="pt-[12rem] min-h-screen flex flex-col animate-[fadeIn_1s_ease-out_forwards]">
      <div className="flex flex-col lg:flex-row w-full">
        <section className="relative flex-1 flex items-center justify-center p-12 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center blur-[3px] scale-100"
            style={{ backgroundImage: "url('/images/nail-polish.jpg')" }}
          />
          <div className="max-w-4xl text-white text-center border-4 border-white p-16 z-40">
            <h1 className="text-[3rem] lg:text-[3.4rem] font-markazi leading-tight mb-6">
              More than a Nail Salon, we <span className="italic">Care.</span>
            </h1>
            <p className="text-[1.5rem] font-roboto">
              Little Saigon Nails & Spa is family-owned and dedicated to providing a clean, relaxing, and fun experience. We prioritize and love hygiene, comfort, and beauty—we want you leaving looking and feeling your best.
            </p>
          </div>
        </section>

        <section className="relative flex-1 min-h-[400px]">
          <Image
            src="/images/nail-salon-interior.jpeg"
            alt="Nail salon image"
            fill
            className="object-cover"
          />
        </section>
      </div>


      <section className="w-full bg-white p-12">
        <GoogleReviews />
      </section>
      </main>
      <Footer />
    </>
  );
}
