import { Lot } from "@/lib/types";
import { formatDate } from "@/lib/utils";

type Props = {
  lot: Lot | null;
  error: string | null;
};

export function Banner({ lot, error }: Props) {
  if (error !== null) {
    return (
      <section className="bg-randy-turquoise p-2">
        <h2 className="animate-pulse text-center text-sm text-white md:text-base">
          {error}
        </h2>
      </section>
    );
  }

  if (!lot) {
    return (
      <section className="bg-randy-turquoise p-2">
        <h2 className="animate-pulse text-center text-sm text-white md:text-base">
          Loading...
        </h2>
      </section>
    );
  }

  const { date, time, location } = lot;

  return (
    <section className="bg-randy-turquoise p-2">
      <h2 className="text-center text-sm text-white md:text-base">
        {"Next Auction: "}
        <span className="font-semibold">{`${formatDate(date, time)} at ${location}`}</span>
      </h2>
    </section>
  );
}
