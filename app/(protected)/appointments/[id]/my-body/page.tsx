import Mommy from "@/components/(protected)/appointments/[id]/my-body/Mommy";
import MommyReport from "@/components/(protected)/appointments/[id]/my-body/MommyReport";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <Mommy pregnancyWeeks={+id} />
      <MommyReport />
    </>
  );
}
