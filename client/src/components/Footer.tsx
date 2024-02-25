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
        <nav className="w-fit space-x-10 text-white">
          <a href="#" className="hover:underline">
            Placeholder
          </a>
          <a href="#" className="hover:underline">
            Placeholder
          </a>
          <a href="#" className="hover:underline">
            Placeholder
          </a>
        </nav>
      </div>
    </footer>
  );
}
