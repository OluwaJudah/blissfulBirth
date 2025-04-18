import ToBeMommy from "@/components/(protected)/pending-appointments/[id]/my-body/ToBeMommy";
import ToBeMommyReport from "@/components/(protected)/pending-appointments/[id]/my-body/ToBeMommyReport";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <ToBeMommy pregnancyWeeks={+id} />
      <ToBeMommyReport pregnancyWeeks={+id} />
    </>
  );
}
