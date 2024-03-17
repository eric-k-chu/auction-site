import { EditForm } from "@/components/EditForm";
import { getAuctionById } from "@/lib/actions";

export default async function LotPage({ params }: { params: { id: string } }) {
  const { data, error } = await getAuctionById(params.id);

  if (error !== null) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-y-8 bg-zinc-100 p-12">
        <strong>{error}</strong>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="flex min-h-screen flex-col items-center gap-y-8 bg-zinc-100 p-12">
      <EditForm lot={data.lot} sha={data.sha} />
    </div>
  );
}
