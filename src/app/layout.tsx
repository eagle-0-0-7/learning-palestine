import type { Metadata } from "next";
import { Lexend, Manrope, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-manrope",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Palestine 101",
  description:
    "Palestine 101 is a radically inclusive education platform built to explore Palestine’s history, culture, and struggle for liberation through critical scholarship and community learning.",
  icons: {
    icon: "/square-image.png",
    shortcut: "/square-image.png",
    apple: "/square-image.png",
  },
  openGraph: {
    title: "Palestine 101",
    description:
      "Palestine 101 is an inclusive education platform exploring Palestine’s history, culture, and liberation through scholarship and community learning.",
    url: "https://learningpalestine.org",
    siteName: "Palestine 101",
    images: [
      {
        url: "https://learningpalestine.org/rectangle-22-3.webp",
        width: 1200,
        height: 630,
        alt: "Palestine 101 Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palestine 101",
    description:
      "Palestine 101 is an inclusive education platform exploring Palestine’s history, culture, and liberation through scholarship and community learning.",
    images: ["https://learningpalestine.org/rectangle-22-3.webp"],
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
        className={`${roboto.variable} ${manrope.variable} ${poppins.variable} ${lexend.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
