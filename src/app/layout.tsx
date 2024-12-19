// app/layout.tsx (or wherever your RootLayout is located)
import Footer from "@/components/Footer";
import "./globals.css";
import { ReactNode } from "react";
import { Fraunces, Dancing_Script } from "next/font/google";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import bg from '../../public/hero.jpg';
import { CartProvider } from './CartContext'; // Adjust the path as necessary

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dancingScript.variable}`}>
      <head>
        <title>Feane</title>
      </head>
      <body>
        <CartProvider> {/* Wrap children with CartProvider */}
          <Navbar />
          <Image className="bg" layout="fill" src={bg} alt="Background" />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}