import { fetchExampleData } from "@/lib/test-api";
import { getDate } from "@/lib/utils";

export async function Banner() {
  const { lots } = await fetchExampleData(1000);
  return (
    <section className="bg-randy-turquoise px-2 py-4">
      <h2 className="text-center text-sm text-white md:text-base">
        {"Next Auction: "}
        <span className="font-semibold">
          {`${getDate(lots[0].date)} at ${lots[0].location}`}
        </span>
      </h2>
    </section>
  );
}
