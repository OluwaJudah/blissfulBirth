import { Calendar1, Pen } from "lucide-react";
import Location from "./Location";
import TimeSlot from "./TimeSlot";
import {
  calculateTrimester,
  getLastTuesdayFromCurrentOrNextMonth,
} from "@/utils";
import { firstAppointmentTimeSlots, trimesters } from "@/constants/appointment";
import NoteAndConfirmButton from "./NoteAndConfirmButton";

const Body = ({ pregnancyWeeks }: { pregnancyWeeks: number }) => {
  const trimester = calculateTrimester(pregnancyWeeks);
  const trimesterStr = trimesters[trimester];
  const time = firstAppointmentTimeSlots[trimester];
  const newIntakeDateStr = getLastTuesdayFromCurrentOrNextMonth();

  return (
    <>
      <div className="flex flex-col px-5 text-center pb-2">
        <p className="font-sans font-bold text-lg text-pinklet-700">
          Congratulations
        </p>
        <p className="font-mono text-sm text-turquoise-800 tracking-tight">
          You are{" "}
          <b className="text-turquoise-900">
            {pregnancyWeeks} Weeks({trimesterStr} Trimester)
          </b> pregnant.
        </p>
      </div>
      <div className="flex flex-col h-full gap-[10px] rounded-t-[50px] bg-turquoise-50 py-6 flex flex-col">
        <div className="flex flex-col px-7 text-center">
          <p className="font-mono font-medium text-sm text-pinklet-700 tracking-tight">
            Please confirm the Date and Time below
          </p>
        </div>
        <div className="border border-t-turquoise-100 my-2"></div>
        <div className="flex flex-col px-7 ">
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center bg-pinklet-200 w-[40px] h-[40px] rounded-full">
              <Calendar1 className="text-white" size={20} strokeWidth={3} />
            </div>
            <p className="font-mono font-bold text-turquoise-900">
              {newIntakeDateStr}
            </p>
          </div>
        </div>
        <div className="border border-t-turquoise-100 my-2"></div>
        <TimeSlot time={time} />
        <Location />
        <NoteAndConfirmButton {...{ pregnancyWeeks, time, newIntakeDateStr }} />
      </div>
    </>
  );
};

export default Body;
