import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-randy-navy">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-10">
        <Image
          src="logo.svg"
          alt="randy mark auctioneer"
          width={0}
          height={0}
          className="h-16 w-auto"
        />
        <div className="flex w-fit flex-col items-end gap-y-2 text-white">
          <p>(516) 526-4190 | Randymarkauctioneer@gmail.com</p>
          <strong>© 2024 Randy Mark, Auctioneer. ALL RIGHTS RESERVED</strong>
        </div>
      </div>
    </footer>
  );
}
