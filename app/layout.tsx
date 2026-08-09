import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Little Saigon Nails & Spa | Hamilton’s Top Nail Salon",
  description:
    "Experience premium nail care and spa services in Hamilton at Little Saigon Nails & Spa. Clean, modern, family-friendly nail salon for manicures, pedicures, waxing, and nail art.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Little Saigon Nails & Spa | Hamilton’s Top Nail Salon",
    description:
      "Family-owned nail spa in Hamilton offering expert manicures, pedicures, nail art, waxing, and deluxe treatments.",
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
    title: "Little Saigon Nails & Spa | Hamilton Nail Salon",
    description:
      "Relax and refresh at Hamilton’s top family-owned nail salon with premium spa services.",
    images: ["https://littlesaigonnails.com/og-home.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
