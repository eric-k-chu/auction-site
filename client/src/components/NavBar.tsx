import Image from "next/image";

export function NavBar() {
  return (
    <nav className="bg-randy-navy">
      <div className="container mx-auto flex items-center p-4">
        <div className="basis-1/2">
          <Image
            src="logo.svg"
            alt="Randy Mark Auctioneer"
            width={0}
            height={0}
            className="h-12 w-auto sm:h-16 md:h-20"
          />
        </div>
        <section className="flex basis-1/2 items-center justify-evenly font-bold text-white">
          <a rel="noopener" href="#auction" className="hover:underline">
            Auctions
          </a>
          <a rel="noopener" href="#vehicles" className="hover:underline">
            All Vehicles
          </a>
          <a rel="noopener" href="#faq" className="hover:underline">
            FAQ
          </a>
        </section>
      </div>
    </nav>
  );
}
