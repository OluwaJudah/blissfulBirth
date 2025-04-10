import BabyReport from "./BabyReport";
import EmblaCarouselWrapper from "../carousel/EmblaCarouselWrapper";
import BabyPendingReport from "./BabyPendingReport";

const MyBaby = ({
  pregnancyWeeks,
  lastAppointment,
}: {
  pregnancyWeeks: number;
  lastAppointment: any;
}) => {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="font-mono font-bold text-turquoise-900">My Baby</p>
      <div className="">
        <EmblaCarouselWrapper>
          {lastAppointment && (
            <BabyReport
              lastAppointment={lastAppointment}
              pregnancyWeeks={pregnancyWeeks}
            />
          )}
          <BabyPendingReport pregnancyWeeks={pregnancyWeeks} />
        </EmblaCarouselWrapper>
      </div>
    </div>
  );
};

export default MyBaby;
