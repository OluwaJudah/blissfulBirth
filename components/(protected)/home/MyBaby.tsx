import BabyReport from "./BabyReport";
import EmblaCarouselWrapper from "../carousel/EmblaCarouselWrapper";
import BabyPendingReport from "./BabyPendingReport";
import { getLastAppointmentData } from "@/data/appointment";

const MyBaby = async ({ pregnancyWeeks }: { pregnancyWeeks: number }) => {
  const appointment = await getLastAppointmentData();

  return (
    <div className="flex flex-col gap-y-4">
      <p className="font-mono font-bold text-turquoise-900">My Baby</p>
      <div className="">
        <EmblaCarouselWrapper>
          {appointment && (
            <BabyReport
              appointmentId={appointment._id.toString()}
              pregnancyWeeks={appointment.pregnancyWeeks}
            />
          )}
          <BabyPendingReport pregnancyWeeks={pregnancyWeeks} />
        </EmblaCarouselWrapper>
      </div>
    </div>
  );
};

export default MyBaby;
