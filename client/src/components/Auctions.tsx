import { Lots } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { AuctionInfo } from "./AuctionInfo";
import { SectionHeader } from "./SectionHeader";

type Props = {
  lots: Lots | null;
  error: string | null;
};

export function Auctions({ lots, error }: Props) {
  if (error !== null) {
    return (
      <section id="auction" className="mx-auto max-w-7xl space-y-6 p-12">
        <SectionHeader>{error}</SectionHeader>
      </section>
    );
  }

  if (!lots) {
    return (
      <section id="auction" className="mx-auto max-w-7xl space-y-6 p-12">
        <SectionHeader>Loading...</SectionHeader>
        <AuctionInfo />
      </section>
    );
  }

  return (
    <>
      {lots.lots.map((n) => (
        <section
          key={n.location}
          id="auction"
          className="mx-auto max-w-7xl space-y-6 p-12"
        >
          <SectionHeader>{n.location}</SectionHeader>
          <div className="flex items-center gap-x-2 text-base md:text-lg">
            <strong>Address:</strong>
            <p>{n.address}</p>
          </div>
          <div className="flex items-center gap-x-2 text-base md:text-lg">
            <strong>Date:</strong>
            <p>{formatDate(n.date, n.time)}</p>
          </div>
          <AuctionInfo lot={n} />
        </section>
      ))}
    </>
  );
}
