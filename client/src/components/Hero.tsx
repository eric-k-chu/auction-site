import Image from "next/image";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl items-center justify-center">
      <div className="flex w-full flex-col items-center justify-between gap-12 px-12 py-24 lg:flex-row">
        <div className="flex w-full flex-shrink flex-col items-center gap-y-6 py-6 lg:w-[500px] lg:items-start">
          <h1 className="text-center text-5xl font-bold text-randy-navy lg:text-left lg:text-4xl">
            New York Car Auction
          </h1>
          <h2 className="text-center text-lg text-randy-navy lg:text-left lg:text-xl">
            Marshal Gary H. Rose Public Execution Sale
          </h2>
          <p className="max-w-[500px] text-center text-lg font-semibold text-randy-turquoise lg:text-left lg:text-xl">
            Looking for your next vehicle? Check out our available cars and the
            dates for our next car auction in New York.
          </p>
          <a
            href="#auction"
            rel="noopener"
            className="flex w-fit items-center justify-center gap-1 rounded-xl bg-randy-orange px-16 py-4 font-semibold text-white"
          >
            <DownArrowSvg />
            Next Auction
          </a>
        </div>
        <div className="flex w-full max-w-3xl flex-none items-center justify-center lg:w-[550px]">
          <Image
            src="/example_splash.png"
            alt="cars in a parking lot"
            width={0}
            height={0}
            unoptimized
            className="h-full w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

function DownArrowSvg() {
  return (
    <svg
      className="h-5 w-4 animate-pulse"
      viewBox="0 0 15 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.50035 14.8407L13.8239 10.2417L14.9268 11.7581L7.50035 17.1591L0.0739373 11.7581L1.17676 10.2417L7.50035 14.8407Z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.50035 8.84067L13.8239 4.2417L14.9268 5.75808L7.50035 11.1591L0.0739373 5.75808L1.17676 4.2417L7.50035 8.84067Z"
        fill="#fff"
      />
    </svg>
  );
}
