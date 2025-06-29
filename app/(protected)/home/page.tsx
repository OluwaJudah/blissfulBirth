import Header from "@/components/(protected)/Header";
import Body from "@/components/(protected)/home/Body";
import { getMotherInfoData } from "@/data/mother-info";
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const { from } = query;
  
  const imgUrl = "/user_1.svg";
  const motherInfo = await getMotherInfoData("fullName lastMenstrualDate");
  const name = motherInfo?.fullName ? motherInfo?.fullName : "";
  const title = `Hi ${name}`;

  return (
    <div className="flex h-screen items-center">
      <main className="pb-[40px] md:rounded-3xl md:shadow-2xl bg-turquoise-50 h-full md:h-[700px] border md:border-gray-400/2 w-[400px] md:w-[350px] mx-auto overflow-x-hidden">
        <Header title={title} imgUrl={imgUrl} />
        <Body from={from as string} />
      </main>
    </div>
  );
}
