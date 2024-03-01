import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Randy Mark Auctioneer",
  description: "FAQ - Randy Mark Auctioneer",
};

export default function FaqLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
