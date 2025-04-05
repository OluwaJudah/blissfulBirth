import Header from "@/components/(protected)/Header";
import Body from "@/components/(protected)/profile/Body";
import { getNextAppointmentData } from "@/data/appointment";
import { getMotherInfoData } from "@/data/mother-info";
import { calculateDueDate } from "@/utils";

const ProfilePage = async () => {
  const title = "Profile";
  const motherInfo = await getMotherInfoData(
    "fullName surname lastMenstrualDate"
  );

  let dueDate = "";
  if (motherInfo) dueDate = calculateDueDate(motherInfo.lastMenstrualDate);

  const username = `${motherInfo?.fullName} ${motherInfo?.surname}`;
  const appointment = await getNextAppointmentData("pregnancyWeeks date");
  const pregnancyWeeks = appointment?.pregnancyWeeks || 0;

  return (
    <div className="flex h-screen items-center ">
      <main className="pb-[40px] md:rounded-3xl md:shadow-2xl bg-turquoise-50 h-full md:h-[700px] border md:border-gray-400/2 w-[400px] md:w-[350px] mx-auto overflow-hidden">
        <Header title={title} />
        <Body
          username={username}
          dueDate={dueDate}
          pregnancyWeeks={pregnancyWeeks}
        />
      </main>
    </div>
  );
};

export default ProfilePage;
