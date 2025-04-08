import { timeSlots } from "@/data";
import { Clock } from "lucide-react";
import Times from "./Times";

const TimeSlot = ({
  selectedTimeSlot,
  timeError,
  setSelectedTimeSlot,
  setTimeError,
}: {
  selectedTimeSlot: string;
  timeError: string;
  setSelectedTimeSlot: (timeSlot: string) => void;
  setTimeError: (timeError: string) => void;
}) => {
  return (
    <>
      <div className="flex flex-col px-7">
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center bg-pinklet-200 w-[40px] h-[40px] rounded-full">
            <Clock size={20} strokeWidth={3} />
          </div>
          <p className="font-mono font-bold">Time Slots</p>
        </div>
        <Times
          selectedTimeSlot={selectedTimeSlot}
          times={timeSlots}
          setSelectedTimeSlot={setSelectedTimeSlot}
          setTimeError={setTimeError}
        />
      </div>
      {timeError && <p className="text-center text-pinklet-500">{timeError}</p>}
      <div className="border border-t-turquoise-100 my-3"></div>
    </>
  );
};

export default TimeSlot;
