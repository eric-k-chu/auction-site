import Image from "next/image";
import Link from "next/link";

export function NavBar() {
  return (
    <nav className="bg-randy-navy">
      <div className="mx-auto flex max-w-7xl items-center p-4">
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
          <Link
            href="/auctions"
            className="flex items-center gap-2 hover:underline"
          >
            <Image
              src="gavel.svg"
              alt="auction"
              width={0}
              height={0}
              className="size-6"
            />
            Auctions
          </Link>
          <Link
            href="/vehicles"
            className="flex items-center gap-2 hover:underline"
          >
            <Image
              src="car.svg"
              alt="all vehicles"
              width={0}
              height={0}
              className="size-6"
            />
            All Vehicles
          </Link>
          <Link href="/faq" className="flex items-center gap-2 hover:underline">
            <Image
              src="question.svg"
              alt="faq"
              width={0}
              height={0}
              className="size-5"
            />
            FAQ
          </Link>
        </section>
      </div>
    </nav>
  );
}
