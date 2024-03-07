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
          className="mx-auto my-20 max-w-7xl space-y-6 p-4"
        >
          <h2 className="text-4xl font-bold">{n.location}</h2>
          <div className="flex items-center gap-x-2 text-lg">
            <strong>Address:</strong>
            <p>{n.address}</p>
          </div>
          <div className="flex items-center gap-x-2 text-lg">
            <strong>Date:</strong>
            <p>{getDate(n.date)}</p>
          </div>
          <AuctionInfo lot={n} />
        </section>
      ))}
    </>
  );
}
