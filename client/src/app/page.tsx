import { Banner } from "@/components/Banner";
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
    </main>
  );
}
