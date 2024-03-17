import { getAuctions } from "@/lib/actions";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default async function DashboardPage() {
  const [lots, error] = await getAuctions();

  if (error !== null) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-y-8 bg-zinc-100 p-12">
        <strong>{error}</strong>
      </div>
    );
  }

  if (!lots) return null;

  return (
    <div className="flex min-h-screen flex-col items-center gap-y-8 bg-zinc-100 p-12">
      <h2 className="w-full max-w-3xl text-2xl font-bold md:text-4xl">
        Auction List
      </h2>
      <ul className="mx-auto w-full max-w-3xl">
        {lots.lots.map((n) => (
          <li
            key={n.id}
            className="flex items-center justify-between rounded-lg bg-white p-4 text-sm shadow-sm shadow-zinc-300 md:text-base"
          >
            <strong>{formatDate(n.date, n.time)}</strong>
            <Link
              href={`/admin/dashboard/${n.id}`}
              className="flex-shrink-0 rounded-md bg-randy-navy px-2 py-1 text-white hover:bg-randy-navy/85"
            >
              Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
