import BabyReport from "@/components/(protected)/appointments/[id]/my-baby/BabyReport";
import Fetus from "@/components/(protected)/appointments/[id]/my-baby/Fetus";
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: SearchParams;
}) {
  const { id } = await params;
  const query = await searchParams;
  const pregnancyWeeks = query.pregnancyWeeks || 0;

  return (
    <>
      <Fetus pregnancyWeeks={+pregnancyWeeks} />
      <BabyReport id={id} />
    </>
  );
}
