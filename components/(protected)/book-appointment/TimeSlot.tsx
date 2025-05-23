import { timeSlots } from "@/data";
import Times from "./Times";
import { Clock } from "lucide-react";

const TimeSlot = () => {
  return (
    <>
      <div className="flex flex-col px-7">
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center bg-pinklet-200 w-[40px] h-[40px] rounded-full">
            <Clock size={20} strokeWidth={3} />
          </div>
          <p className="font-mono font-bold">Time Slots</p>
        </div>
        <Times times={timeSlots} />
      </div>
      <div className="border border-t-turquoise-100 my-3"></div>
    </>
  );
};

export default TimeSlot;
