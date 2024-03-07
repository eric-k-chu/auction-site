import { fetchExampleData } from "@/lib/test-api";
import { LotInfo } from "./LotInfo";
import { getDate } from "@/lib/utils";

export async function Lots() {
  const { lots } = await fetchExampleData(1000);
  return (
    <>
      {lots.map((n) => (
        <section
          key={n.location}
          id="auction"
          className="mx-auto my-20 max-w-7xl space-y-4 p-4"
        >
          <h2 className="text-4xl font-bold">{n.location}</h2>
          <h3 className="text-2xl">{getDate(n.date)}</h3>
          <LotInfo lot={n} />
        </section>
      ))}
    </>
  );
}
