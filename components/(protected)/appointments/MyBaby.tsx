import BabyReport from "./BabyReport";
import EmblaCarouselWrapper2 from "../carousel/EmblaCarouselWrapper2";
import {
  appointmentWeeks,
  COMPLETED_APPOINTMENT,
} from "@/constants/appointment";
import BabyPendingReport from "./BabyPendingReport";
import { getAppointments, getNextAppointmentData } from "@/data/appointment";
import { getMotherInfoData } from "@/data/mother-info";

const MyBaby = async () => {
  const appointments = await getAppointments();
  const lastAppointment = await getNextAppointmentData();
  const lastPregnancyWeeks = lastAppointment?.pregnancyWeeks || 0;
  const motherInfo = await getMotherInfoData();
  const pregnancyWeeks = motherInfo.edd
    ? Object.keys(appointments)
    : appointmentWeeks;

  return (
    <div className="flex flex-col gap-y-4">
      <p className="font-mono font-bold text-turquoise-900">My Appointments</p>
      <div className="">
        <EmblaCarouselWrapper2
          pregnancyWeeks={pregnancyWeeks}
          lastPregnancyWeeks={lastPregnancyWeeks}
        >
          {pregnancyWeeks.map((w) => {
            if (
              appointments[w] &&
              appointments[w].status === COMPLETED_APPOINTMENT
            )
              return (
                <BabyReport
                  key={w}
                  babyReport={appointments[w]}
                  pregnancyWeeks={+w}
                />
              );
            return <BabyPendingReport key={w} pregnancyWeeks={+w} />;
          })}
        </EmblaCarouselWrapper2>
      </div>
    </div>
  );
};

export default MyBaby;
