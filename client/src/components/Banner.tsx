import { getAuctions } from "@/lib/actions";
import { formatDate } from "@/lib/utils";

export async function Banner() {
  const { lots } = await getAuctions();
  const { date, time, location } = lots[0];
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
