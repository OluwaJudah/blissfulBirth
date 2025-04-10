import Header from "@/components/(protected)/Header";
import Body from "@/components/(protected)/home/Body";
import { getLastAppointmentData, getNextAppointmentData } from "@/data/appointment";
import { getMotherInfoData } from "@/data/mother-info";
import { calculateDueDate, calculatePregnancyWeeks } from "@/utils";

export default async function HomePage() {
  const imgUrl = "/user_1.svg";
  const motherInfo = await getMotherInfoData("fullName lastMenstrualDate");

  const title = `Hi ${motherInfo?.fullName}`;
  let dueDate = "";
  if (motherInfo) dueDate = calculateDueDate(motherInfo.lastMenstrualDate);

  const appointment = await getNextAppointmentData("pregnancyWeeks date");
  const lastAppointment = await getLastAppointmentData("pregnancyWeeks date");
  const date = appointment?.date || "";
  const pregnancyWeeks = appointment?.pregnancyWeeks || 0;

  return (
    <div className="flex h-screen items-center">
      <main className="pb-[40px] md:rounded-3xl md:shadow-2xl bg-turquoise-50 h-full md:h-[700px] border md:border-gray-400/2 w-[400px] md:w-[350px] mx-auto overflow-x-hidden">
        <Header title={title} imgUrl={imgUrl} />
        <Body
          appointmentDate={date}
          pregnancyWeeks={pregnancyWeeks}
          dueDate={dueDate}
          lastAppointment={lastAppointment}
        />
      </main>
    </div>
  );
}
