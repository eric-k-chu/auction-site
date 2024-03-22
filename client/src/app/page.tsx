import { Auctions } from "@/components/Auctions";
import { Banner } from "@/components/Banner";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { Notice } from "@/components/Notice";
import { getAuctions } from "@/lib/api";

export default async function Home() {
  const { data, error } = await getAuctions();

  return (
    <>
      <Banner lot={data && data.lots[0]} error={error} />
      <NavBar />
      <Hero />
      <Auctions lots={data} error={error} />
      <Faq />
      <Notice />
      <Footer />
    </>
  );
}
