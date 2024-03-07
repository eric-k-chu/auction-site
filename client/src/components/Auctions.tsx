import { fetchExampleData } from "@/lib/test-api";
import { AuctionInfo } from "./AuctionInfo";
import { getDate } from "@/lib/utils";

export async function Auctions() {
  const { lots } = await fetchExampleData(1000);
  return (
    <>
      {lots.map((n) => (
        <section
          key={n.location}
          id="auction"
          className="mx-auto my-12 max-w-7xl space-y-6 px-4 py-8"
        >
          <h2 className="text-2xl font-bold md:text-4xl">{n.location}</h2>
          <div className="flex items-center gap-x-2 text-base md:text-lg">
            <strong>Address:</strong>
            <p>{n.address}</p>
          </div>
          <div className="flex items-center gap-x-2 text-base md:text-lg">
            <strong>Date:</strong>
            <p>{getDate(n.date)}</p>
          </div>
          <AuctionInfo lot={n} />
        </section>
      ))}
    </>
  );
}
