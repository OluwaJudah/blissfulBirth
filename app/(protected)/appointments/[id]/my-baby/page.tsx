import BabyReport from "@/components/(protected)/appointments/[id]/my-baby/BabyReport";
import Fetus from "@/components/(protected)/appointments/[id]/my-baby/Fetus";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <Fetus pregnancyWeeks={+id} />
      <BabyReport />
    </>
  );
}
