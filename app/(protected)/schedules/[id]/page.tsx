import Header from "@/components/Header";
import ScheduleDetails from "@/components/ScheduleDetails";
import { schedulesNos } from "@/data";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <div className="sticky top-0">
        <Header />
        <div className="bg-turquoise-100 p-2">
          <div className="font-mono font-semibold mb-2 text-xl text-black focus:outline-none focus:opacity-80 dark:text-white mb-2">
            Appointments
          </div>
        </div>
      </div>
      <main className="bg-turquoise-100">
        <div className="h-full items-center py-16 px-2 rounded-t-[50px] bg-white md:p-6">
          <h3 className="text-lg font-medium">Weeks</h3>
          <div className="overflow-x-auto py-4">
            <div className="flex items-center px-1 gap-4 w-[650px]">
              {schedulesNos.map((num) => (
                <Link
                  scroll={false}
                  href={`/schedules/${num}`}
                  key={num}
                  className={`ring-4 flex shadow-md hover:shadow-xl transition delay-150 duration-300 ease-in-out justify-center items-center size-12 ${
                    id === num.toString()
                      ? "ring-pinklet-500 bg-pinklet-500 hover:bg-pinklet-600 text-white"
                      : "ring-pinklet-500/10 hover:bg-pinklet-500 hover:text-white text-turquoise-900"
                  } rounded-full`}
                >
                  {num}
                </Link>
              ))}
            </div>
          </div>
          <ScheduleDetails id={id} />
        </div>
      </main>
    </>
  );
}
