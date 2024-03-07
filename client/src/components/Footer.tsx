import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-randy-navy">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-y-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <Image
          src="logo.svg"
          alt="randy mark auctioneer"
          width={0}
          height={0}
          className="h-16 w-auto"
        />
        <div className="flex w-fit flex-col items-start gap-y-2 text-sm text-white md:items-end md:text-base">
          <p>{"(516) 526-4190 | Randymarkauctioneer@gmail.com"}</p>
          <strong>
            {"© 2024 Randy Mark, Auctioneer. ALL RIGHTS RESERVED"}
          </strong>
        </div>
      </div>
    </footer>
  );
}
