import Header from "@/components/(protected)/Header";
import Body from "@/components/(protected)/home/Body";
import { getNextAppointmentData } from "@/data/appointment";
import { getMotherInfoData } from "@/data/mother-info";
import { calculateDueDate, calculatePregnancyWeeks } from "@/utils";

export default async function HomePage() {
  const imgUrl = "/user_1.svg";
  const motherInfo = await getMotherInfoData(
    "fullName lastMenstrualDate createdAt"
  );

  const title = `Hi ${motherInfo?.fullName}`;
  let pregnancyWeeks = 0;
  let dueDate = "";
  if (motherInfo) {
    const { lastMenstrualDate, createdAt } = motherInfo;
    if (lastMenstrualDate && createdAt) {
      pregnancyWeeks = calculatePregnancyWeeks(lastMenstrualDate, createdAt);
      dueDate = calculateDueDate(lastMenstrualDate);
    }
  }

  const appointmentDate = await getNextAppointmentData("date");
  let date = appointmentDate?.date || "";

  return (
    <div className="flex h-screen items-center">
      <main className="pb-[40px] md:rounded-3xl md:shadow-2xl bg-turquoise-50 h-full md:h-[700px] border md:border-gray-400/2 w-[400px] md:w-[350px] mx-auto overflow-scroll">
        <Header title={title} imgUrl={imgUrl} />
        <Body
          appointmentDate={date}
          pregnancyWeeks={pregnancyWeeks}
          dueDate={dueDate}
        />
      </main>
    </div>
  );
}
