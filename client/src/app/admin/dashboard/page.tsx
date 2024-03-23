import { HomeLink } from "@/components/HomeLink";
import { readAuctions } from "@/lib/api";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default async function DashboardPage() {
  const { data, error } = await readAuctions();

  if (error !== null) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-y-8 bg-zinc-100 p-12">
        <strong>{error}</strong>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center gap-y-8 bg-zinc-100 p-12">
      <div className="fixed left-4 top-4">
        <HomeLink isAuth>Go Back home</HomeLink>
      </div>
      <h2 className="w-full max-w-3xl text-2xl font-bold md:text-4xl">
        Auction List
      </h2>
      {data ? (
        <ul className="mx-auto w-full max-w-3xl">
          {data.lots.map((n) => (
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
      ) : (
        <p className="animate-pulse">Loading...</p>
      )}
    </div>
  );
}
