import ToBeBabyReport from "@/components/(protected)/pending-appointments/[id]/my-baby/ToBeBabyReport";
import ToBeFetus from "@/components/(protected)/pending-appointments/[id]/my-baby/ToBeFetus";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  return (
    <>
      <ToBeFetus pregnancyWeeks={+id} />
      <ToBeBabyReport pregnancyWeeks={+id} />
    </>
  );
}
