import Image from "next/image";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-y-8 px-4 py-8 md:flex-row md:justify-between">
      <div className="flex basis-[40%] flex-col items-center gap-y-6 md:items-start md:gap-y-8">
        <h1 className="text-3xl font-bold text-randy-navy md:text-4xl lg:text-5xl">
          New York Car Auction
        </h1>
        <p className="line-clamp-3 text-center font-semibold text-randy-turquoise md:text-left">
          Looking for your next vehicle? Check out our available cars and the
          dates for our next car auction in New York.
        </p>
        <a
          href="#auction"
          rel="noopener"
          className="flex w-fit items-center justify-center gap-1 rounded-xl bg-randy-orange px-16 py-4"
        >
          <Image
            src="double-arrow-down.svg"
            alt="downward arrow"
            width={0}
            height={0}
            className="size-5 animate-pulse"
          />
          Next Auction
        </a>
      </div>
      <Image
        src="/example_splash.png"
        alt="cars in a parking lot"
        width={0}
        height={0}
        unoptimized
        className="h-auto w-full md:w-1/2"
      />
    </section>
  );
}
