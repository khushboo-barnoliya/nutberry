import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";

import "./globals.css";
import "./animations.css";
import "./typography.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nutberry",
  description:
    "A rich cashew company that provides the best quality cashews. Established at Ajmer, Rajasthan, India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
