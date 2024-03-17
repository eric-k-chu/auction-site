import { getAuctions } from "@/lib/actions";
import { formatDate } from "@/lib/utils";

export async function Banner() {
  const [lots, error] = await getAuctions();

  if (error !== null) {
    return (
      <section className="bg-randy-turquoise px-2 py-4">
        <h2 className="text-center text-sm font-bold text-white md:text-base">
          {error}
        </h2>
      </section>
    );
  }

  if (!lots) return null;

  const { date, time, location } = lots.lots[0];

  return (
    <section className="bg-randy-turquoise px-2 py-4">
      <h2 className="text-center text-sm text-white md:text-base">
        {"Next Auction: "}
        <span className="font-semibold">
          {`${formatDate(date, time)} at ${location}`}
        </span>
      </h2>
    </section>
  );
}
