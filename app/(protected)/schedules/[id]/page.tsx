import ScheduleDetails from "@/components/(protected)/schedules/[id]/ScheduleDetails";
import ScrollWeeks from "@/components/(protected)/schedules/[id]/ScrollWeeks";
import Header from "@/components/Header";

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
      </div>
      <main className="bg-turquoise-100">
        <div className="h-full items-center py-16 px-2 rounded-t-[50px] bg-white md:p-6">
          <h3 className="text-lg font-medium">Weeks</h3>
          <div className="overflow-x-auto py-4">
            <ScrollWeeks id={id} />
          </div>
          <ScheduleDetails id={id} />
        </div>
      </main>
    </>
  );
}
