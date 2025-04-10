import EmblaCarouselWrapper from "../carousel/EmblaCarouselWrapper";
import MyReport from "./MyReport";
import MyPendingReport from "./MyPendingReport";

const MyBody = ({
  pregnancyWeeks,
  lastAppointment,
}: {
  pregnancyWeeks: number;
  lastAppointment: any;
}) => {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="font-mono font-bold text-turquoise-900">My Body</p>
      <div className="">
        <EmblaCarouselWrapper>
          {lastAppointment && (
            <MyReport
              lastAppointment={lastAppointment}
              pregnancyWeeks={pregnancyWeeks}
            />
          )}

          <MyPendingReport pregnancyWeeks={pregnancyWeeks} />
        </EmblaCarouselWrapper>
      </div>
    </div>
  );
};

export default MyBody;
