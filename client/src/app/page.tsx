import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Lots } from "@/components/Lots";
import { Notice } from "@/components/Notice";

export default function Home() {
  return (
    <>
      <Hero />
      <Lots />
      <Faq />
      <Notice />
    </>
  );
}
