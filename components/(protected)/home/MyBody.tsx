import EmblaCarouselWrapper from "../carousel/EmblaCarouselWrapper";
import MyReport from "./MyReport";
import MyPendingReport from "./MyPendingReport";
import { getLastAppointmentData } from "@/data/appointment";
import MyPendingReportSkeleton from "./MyPendingReportSkeleton";
import { Suspense } from "react";

const MyBody = async ({ pregnancyWeeks }: { pregnancyWeeks: number }) => {
  const appointment = await getLastAppointmentData();

  return (
    <div className="flex flex-col gap-y-4">
      <p className="font-mono font-bold text-turquoise-900">My Body</p>
      <div className="">
        <Suspense fallback={<MyPendingReportSkeleton />}>
          <EmblaCarouselWrapper>
            {appointment && (
              <MyReport
                appointmentId={appointment._id.toString()}
                pregnancyWeeks={appointment.pregnancyWeeks}
              />
            )}
            <MyPendingReport pregnancyWeeks={pregnancyWeeks} />
          </EmblaCarouselWrapper>
        </Suspense>
      </div>
    </div>
  );
};

export default MyBody;
