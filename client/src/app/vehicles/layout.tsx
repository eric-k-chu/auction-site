import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vehicles - Randy Mark Auctioneer",
  description: "All vehicles - Randy Mark Auctioneer",
};

export default function VehiclesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
