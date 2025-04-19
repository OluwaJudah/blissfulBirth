import Mommy from "@/components/(protected)/appointments/[id]/my-body/Mommy";
import MommyReport from "@/components/(protected)/appointments/[id]/my-body/MommyReport";
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
      <Mommy pregnancyWeeks={+pregnancyWeeks} />
      <MommyReport id={id} />
    </>
  );
}
