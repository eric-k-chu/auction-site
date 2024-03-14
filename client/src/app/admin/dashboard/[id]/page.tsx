import { EditForm } from "@/components/EditForm";
import { getAuctionById } from "@/lib/utils";

export default async function LotPage({ params }: { params: { id: string } }) {
  const [lot, sha] = await getAuctionById(params.id);
  return (
    <div className="flex min-h-screen flex-col items-center gap-y-8 bg-zinc-100 p-12">
      <EditForm lot={lot} sha={sha} />
    </div>
  );
}
