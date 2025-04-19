import BabyReport from "./BabyReport";
import EmblaCarouselWrapper2 from "../carousel/EmblaCarouselWrapper2";
import {
  appointmentWeeks,
  COMPLETED_APPOINTMENT,
} from "@/constants/appointment";
import BabyPendingReport from "./BabyPendingReport";
import {
  getAppointments,
  getBabyReports,
  getNextAppointmentData,
} from "@/data/appointment";

const generateBabyReport = (babyReports: any[], appointments: any[]) => {
  const babyReportsIndex = babyReports?.reduce((acc, report) => {
    const appointmentId = report?.appointmentId;
    if (appointmentId) {
      acc[appointmentId] = report;
    }
    return acc;
  }, {} as Record<string, any>);

  return appointments?.reduce((acc, item) => {
    const pregnancyWeeks = item.pregnancyWeeks;
    const id = item._id.toString();
    if (pregnancyWeeks) {
      acc[pregnancyWeeks] = {};
      if (babyReportsIndex && babyReportsIndex[id]) {
        const { babyHeight, babyWeight } = babyReportsIndex[id];
        acc[pregnancyWeeks] = { appointmentId: id, babyHeight, babyWeight };
      }
    }
    return acc;
  }, {} as Record<number, { appointmentId: string; babyHeight: number; babyWeight: number }>);
};

const MyBaby = async () => {
  const appointments = (await getAppointments()) || [];
  const appointmentIds = appointments?.map((a) => a._id.toString()) || [];
  const babyReports = (await getBabyReports(appointmentIds)) || [];
  const generateBabyData = generateBabyReport(babyReports, appointments);
  console.log({ generateBabyData });

  const lastAppointment = await getNextAppointmentData();
  let pregnancyWeeks = lastAppointment?.pregnancyWeeks || 0;
  const isCompleted = lastAppointment?.status === COMPLETED_APPOINTMENT;

  return (
    <div className="flex flex-col gap-y-4">
      <p className="font-mono font-bold text-turquoise-900">My Appointments</p>
      <div className="">
        <EmblaCarouselWrapper2 pregnancyWeeks={pregnancyWeeks}>
          {appointmentWeeks.map((w) =>
            pregnancyWeeks > w || isCompleted ? (
              <BabyReport
                key={w}
                babyReport={generateBabyData[w]}
                pregnancyWeeks={w}
              />
            ) : (
              <BabyPendingReport key={w} pregnancyWeeks={w} />
            )
          )}
        </EmblaCarouselWrapper2>
      </div>
    </div>
  );
};

export default MyBaby;
