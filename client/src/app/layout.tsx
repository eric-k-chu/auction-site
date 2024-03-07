import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Banner } from "@/components/Banner";
import { NavBar } from "@/components/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Randy Mark Auctioneer",
  description:
    "Looking for your next vehicle? Check out our available cars and the dates for our next car auction in New York.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Banner />
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
