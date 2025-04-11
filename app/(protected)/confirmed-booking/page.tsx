import Body from "@/components/(protected)/confirmed-booking/Body";
import Header from "@/components/(protected)/confirmed-booking/Header";
type SearchParams = Promise<{ [key: string]: string }>;

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const { from } = query;

  return (
    <div className="flex h-screen items-center">
      <main className="md:rounded-3xl md:shadow-2xl bg-white h-full md:h-[750px] border md:border-gray-400/2 w-[400px] md:w-[350px] mx-auto overflow-y-hidden">
        <Header />
        <Body />
      </main>
    </div>
  );
}
