import Body from "@/components/(protected)/confirmed-booking/Body";
import BodySkeleton from "@/components/(protected)/confirmed-booking/BodySkeleton";
import Header from "@/components/(protected)/confirmed-booking/Header";
import { getAppointment } from "@/data/appointment";
import { IAppointment } from "@/definitions/appointment";
import { Suspense } from "react";
type SearchParams = Promise<{ [key: string]: string }>;

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const { bookingId, from, book } = query;
  const appointment = (await getAppointment(bookingId)) as IAppointment;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main
        className="
          flex flex-col
          w-full max-w-md mx-auto
          bg-white
          md:rounded-3xl md:shadow-2xl md:border md:border-gray-200
          overflow-y-auto
          md:h-[750px]
        "
      >
        <Header from={from} />
        <Suspense fallback={<BodySkeleton />}>
          <Body
            bookingId={bookingId}
            appointment={appointment}
            from={from || ""}
            book={book}
          />
        </Suspense>
      </main>
    </div>
  );
}
