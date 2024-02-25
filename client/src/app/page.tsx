import { Banner } from "@/components/Banner";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Lots } from "@/components/Lots";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      <Banner />
      <NavBar />
      <Hero />
      <Lots />
      <Faq />
      <Footer />
    </main>
  );
}
