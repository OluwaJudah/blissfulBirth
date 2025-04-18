import BabyReport from "./BabyReport";
import EmblaCarouselWrapper2 from "../carousel/EmblaCarouselWrapper2";
import { appointmentWeeks } from "@/constants/appointment";
import BabyPendingReport from "./BabyPendingReport";

const MyBaby = () => {
  const pregnancyWeeks = 24;

  return (
    <div className="flex flex-col gap-y-4">
      <p className="font-mono font-bold text-turquoise-900">My Appointments</p>
      <div className="">
        <EmblaCarouselWrapper2 pregnancyWeeks={pregnancyWeeks}>
          {appointmentWeeks.map((w) =>
            pregnancyWeeks >= w ? (
              <BabyReport key={w} pregnancyWeeks={w} />
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
