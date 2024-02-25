import { fetchExampleData } from "@/lib/test-api";
import { LotInfo } from "./LotInfo";

export async function Lots() {
  const { lots } = await fetchExampleData(1000);
  return (
    <>
      {lots.map((n) => (
        <section
          key={n.location}
          className="mx-auto my-20 max-w-7xl space-y-4 p-4"
        >
          <h2 className="text-4xl font-bold">{n.location}</h2>
          <LotInfo lot={n} />
        </section>
      ))}
    </>
  );
}
