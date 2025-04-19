import EmblaCarouselWrapper from "../carousel/EmblaCarouselWrapper";
import MyReport from "./MyReport";
import MyPendingReport from "./MyPendingReport";
import { getLastAppointmentData } from "@/data/appointment";

const MyBody = async ({ pregnancyWeeks }: { pregnancyWeeks: number }) => {
  const appointment = await getLastAppointmentData();

  return (
    <div className="flex flex-col gap-y-4">
      <p className="font-mono font-bold text-turquoise-900">My Body</p>
      <div className="">
        <EmblaCarouselWrapper>
          {appointment && (
            <MyReport
              appointmentId={appointment._id.toString()}
              pregnancyWeeks={appointment.pregnancyWeeks}
            />
          )}

          <MyPendingReport pregnancyWeeks={pregnancyWeeks} />
        </EmblaCarouselWrapper>
      </div>
    </div>
  );
};

export default MyBody;
