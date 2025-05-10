import BabyReport from "./BabyReport";
import EmblaCarouselWrapper2 from "../carousel/EmblaCarouselWrapper2";
import {
  appointmentWeeks,
  COMPLETED_APPOINTMENT,
} from "@/constants/appointment";
import BabyPendingReport from "./BabyPendingReport";
import { getAppointments, getNextAppointmentData } from "@/data/appointment";

const MyBaby = async () => {
  const appointments = await getAppointments();
  const lastAppointment = await getNextAppointmentData();
  const pregnancyWeeks = lastAppointment?.pregnancyWeeks || 0;

  return (
    <div className="flex flex-col gap-y-4">
      <p className="font-mono font-bold text-turquoise-900">My Appointments</p>
      <div className="">
        <EmblaCarouselWrapper2 pregnancyWeeks={pregnancyWeeks}>
          {appointments &&
            appointmentWeeks.map((w) =>
              appointments[w] &&
              appointments[w].status === COMPLETED_APPOINTMENT ? (
                <BabyReport
                  key={w}
                  babyReport={appointments[w]}
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
