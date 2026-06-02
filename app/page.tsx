import Image from "next/image";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ReviewCarousel from "./components/ReviewCarousel";

export const metadata = {
  title: "Little Saigon Nails & Spa | Hamilton's Best Nail Salon",
  description:
    "Discover clean, professional nail care in Hamilton at Little Saigon Nails & Spa. Manicures, pedicures, waxing, and artistic nail design in a friendly and clean family-owned spa and salon.",
  keywords: [
    "Hamilton nail salon",
    "best manicure Hamilton",
    "pedicure spa Hamilton",
    "nail art Hamilton",
    "waxing salon Hamilton",
    "bio gel nails",
    "shellac manicure",
    "family-friendly spa Hamilton",
    "nail salon near me"
  ],
  openGraph: {
    title: "Little Saigon Nails & Spa | Hamilton Nail Spa",
    description:
      "Experience premium manicures, pedicures, waxing, and nail enhancements in Hamilton's trusted family-run spa.",
    url: "https://littlesaigonnails.com",
    siteName: "Little Saigon Nails & Spa",
    images: [
      {
        url: "https://littlesaigonnails.com/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Little Saigon Nails & Spa storefront",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Saigon Nails & Spa | Hamilton Nail Experts",
    description: "Feel confident and relaxed at Hamilton’s go-to nail salon for every occasion.",
    images: ["https://littlesaigonnails.com/og-home.jpg"],
  },
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />

      <main className="pt-[10rem] sm:pt-[12rem] min-h-screen flex flex-col animate-[fadeIn_1s_ease-out_forwards]">
        <div className="flex flex-col lg:flex-row w-full">
          <section className="relative flex-1 min-w-0 flex items-center justify-center px-4 py-12 sm:px-6 sm:py-16 lg:p-16 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center blur-sm"
              style={{ backgroundImage: "url('/images/nail-polish.jpg')" }}
              aria-hidden="true"
            />
            <div className="relative z-40 max-w-4xl w-full text-white text-center border-4 border-white px-6 py-10 sm:px-10 sm:py-14 lg:p-16">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-markazi leading-tight mb-4 break-words">
                More than a Nail Salon, we <span className="italic">Care.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-roboto break-words">
                Little Saigon Nails & Spa is family-owned and dedicated to a clean, relaxing, and joyful experience. We prioritize hygiene, comfort, and style to help you leave refreshed and confident.
              </p>
            </div>
          </section>

          <section className="relative flex-1 min-w-0 min-h-[300px] overflow-hidden">
            <Image
              src="/images/nail-salon-interior.jpeg"
              alt="Interior of Little Saigon Nails & Spa, Hamilton"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </section>
        </div>

        <section className="w-full bg-white px-4 py-12 sm:px-8 md:px-16 overflow-hidden">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image
              src="/images/google_reviews.webp"
              alt="Google"
              width={96}
              height={32}
              className="object-contain"
            />
            <h2 className="text-2xl sm:text-3xl font-markazi text-black">
              Reviews
            </h2>
          </div>

          <ReviewCarousel />
        </section>
      </main>

      <Footer />
    </div>
  );
}