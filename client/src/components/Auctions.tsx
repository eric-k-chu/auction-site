import { getAuctions } from "@/lib/actions";
import { AuctionInfo } from "./AuctionInfo";
import { formatDate } from "@/lib/utils";

export async function Auctions() {
  const { data, error } = await getAuctions();

  if (error !== null) {
    return (
      <div className="mx-auto max-w-7xl p-12">
        <h2 className="text-center text-2xl font-bold md:text-4xl">{error}</h2>
      </div>
    );
  }

  if (!data) return null;

  return (
    <>
      {data.lots.map((n) => (
        <section
          key={n.location}
          id="auction"
          className="mx-auto max-w-7xl space-y-6 p-12"
        >
          <h2 className="text-2xl font-bold md:text-4xl">{n.location}</h2>
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
