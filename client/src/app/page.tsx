import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Auctions } from "@/components/Auctions";
import { Notice } from "@/components/Notice";

export default function Home() {
  return (
    <>
      <Hero />
      <Auctions />
      <Faq />
      <Notice />
    </>
  );
}
