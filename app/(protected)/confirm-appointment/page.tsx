import Body from "@/components/(protected)/confirm-appointment/Body";
import Header from "@/components/(protected)/confirm-appointment/Header";
type SearchParams = Promise<{ [key: string]: string }>;

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const { from, appointmentWeek } = query;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main
        className="
          flex flex-col
          bg-white
          w-full
          max-w-md
          mx-auto
          md:rounded-3xl md:shadow-2xl
          md:border md:border-gray-200
          overflow-y-auto
        "
      >
        <Header />
        <Body pregnancyWeeks={+appointmentWeek} from={from} />
      </main>
    </div>
  );
}
