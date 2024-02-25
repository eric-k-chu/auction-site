import Image from "next/image";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl items-center justify-between px-4 py-8">
      <div className="basis-1/3 space-y-8">
        <h1 className="text-6xl font-bold text-randy-navy">Car Auction</h1>
        <p className="line-clamp-3 font-semibold text-randy-turquoise">
          Looking for your next car? Check out our available cars and the dates
          for our next auction.
        </p>
        <a
          href="#vehicles"
          rel="noopener"
          className="flex w-fit items-center justify-center gap-1 rounded-xl bg-randy-orange px-16 py-4"
        >
          <Image
            src="double-arrow-down.svg"
            alt="downward arrow"
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
