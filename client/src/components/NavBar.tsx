import Image from "next/image";

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
        <section className="flex basis-1/2 items-center justify-end gap-x-6 font-bold text-white md:gap-x-10">
          <a
            href="#auction"
            rel="noopener"
            className="flex items-center gap-2 text-sm hover:underline md:text-base"
          >
            <Image
              src="gavel.svg"
              alt="auction"
              width={0}
              height={0}
              className="hidden size-7 md:block"
            />
            Next Auction
          </a>
          <a
            href="#faq"
            rel="noopener"
            className="flex items-center gap-2 text-sm hover:underline md:text-base"
          >
            <Image
              src="question.svg"
              alt="faq"
              width={0}
              height={0}
              className="hidden size-6 md:block"
            />
            FAQ
          </a>
        </section>
      </div>
    </nav>
  );
}
