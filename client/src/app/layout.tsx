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
    "Looking for your next car? We offer several open air auctions each month across New York, Check out our available cars and the dates for our next auction.",
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
