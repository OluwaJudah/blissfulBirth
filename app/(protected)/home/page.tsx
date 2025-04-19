import Header from "@/components/(protected)/Header";
import Body from "@/components/(protected)/home/Body";
import { getLastAppointmentData } from "@/data/appointment";
import { getMotherInfoData } from "@/data/mother-info";
import { calculateDueDate } from "@/utils";

export default async function HomePage() {
  const imgUrl = "/user_1.svg";
  const motherInfo = await getMotherInfoData("fullName lastMenstrualDate");

  const title = `Hi ${motherInfo?.fullName}`;
  let dueDate = "";
  if (motherInfo) dueDate = calculateDueDate(motherInfo.lastMenstrualDate);

  const appointmentDefault = {
    _id: "",
    date: "",
    time: "",
    status: "",
    pregnancyWeeks: 0,
  };

  const appointment = await getLastAppointmentData();

  const appointmentData = appointment
    ? { ...appointment, _id: appointment._id.toString() }
    : appointmentDefault;

  return (
    <div className="flex h-screen items-center">
      <main className="pb-[40px] md:rounded-3xl md:shadow-2xl bg-turquoise-50 h-full md:h-[700px] border md:border-gray-400/2 w-[400px] md:w-[350px] mx-auto overflow-x-hidden">
        <Header title={title} imgUrl={imgUrl} />
        <Body appointment={appointmentData} dueDate={dueDate} />
      </main>
    </div>
  );
}
