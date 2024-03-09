import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Auctions } from "@/components/Auctions";
import { Notice } from "@/components/Notice";
import { Banner } from "@/components/Banner";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <NavBar />
      <Hero />
      <Auctions />
      <Faq />
      <Notice />
      <Footer />
    </>
  );
}
