import Image from "next/image";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import GoogleReviews from "./components/GoogleReviews";
export const metadata = {
  title: "Little Saigon Nails & Spa | Hamilton's Top Nail Salon",
  description: "Experience premium nail care and spa services in Hamilton at Little Saigon Nails & Spa. Clean, modern, and family-friendly nail salon for manicures, pedicures, waxing, and nail art.",
  keywords: [
    "Hamilton nail salon", "nail spa Hamilton", "best nail salon Hamilton",
    "manicure Hamilton", "pedicure Hamilton", "bio gel nails", "nail art Hamilton",
    "shellac manicure", "spa pedicure", "nail salon near me", "nail spa Ontario"
  ],
  openGraph: {
    title: "Little Saigon Nails & Spa | Hamilton's Top Nail Salon",
    description: "Clean, friendly, and professional nail spa offering manicures, pedicures, waxing, and modern nail art in Hamilton, ON.",
    url: "https://littlesaigonnails.com",
    siteName: "Little Saigon Nails & Spa",
    images: [{
      url: "https://littlesaigonnails.com/og-home.jpg",
      width: 1200,
      height: 630,
      alt: "Little Saigon Nails & Spa storefront",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Saigon Nails & Spa | Hamilton Nail Salon",
    description: "Relax and refresh with expert nail care in Hamilton, ON.",
    images: ["https://littlesaigonnails.com/og-home.jpg"],
  },
}


export default function Home() {
  return (
    <>
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
