import Image from "next/image";

export function Hero() {
  return (
    <section className="container mx-auto flex items-center justify-between px-4 py-8">
      <div className="basis-1/3 space-y-8">
        <h1 className="text-randy-navy text-6xl font-bold">Car Auctions</h1>
        <p className="text-randy-navy line-clamp-3 font-semibold">
          Looking for your next car? We offer several open air auctions each
          month across New York. Check out our available cars and the dates for
          our next auction.
        </p>
        <a
          href="#vehicles"
          rel="noopener"
          className="bg-randy-orange flex w-fit items-center justify-center gap-1 rounded-xl px-16 py-4"
        >
          <Image
            src="magnifying_glass.svg"
            alt="magnifying glass"
            width={0}
            height={0}
            className="size-5"
          />
          View Lots
        </a>
      </div>
      <Image
        src="/example_splash.png"
        alt="cars in a parking lot"
        width={0}
        height={0}
        unoptimized
        className="h-auto w-1/2"
      />
    </section>
  );
}
