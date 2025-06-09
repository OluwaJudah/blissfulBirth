import { Calendar1, CalendarCheck } from "lucide-react";
import Location from "./Location";
import TimeSlot from "./TimeSlot";
import NoteBackHome from "./NoteBackHome";
import NotesAndBooking from "./NotesButton";
import TimeSlotSkeleton from "./TimeSlotSkeleton";
import LocationSkeleton from "./LocationSkeleton";
import NoteBackHomeSkeleton from "./NoteBackHomeSkeleton";

const BodySkeleton = () => {
  return (
    <>
      <div className="flex flex-col h-full gap-[10px] rounded-t-[50px] bg-turquoise-50 py-8 flex flex-col">
        <div className="flex flex-col px-7 ">
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center bg-turquoise-200 w-[40px] h-[40px] rounded-full">
              <div className="bg-turquoise-200 rounded-full h-[40px] w-[40px] animate-pulse"></div>
            </div>
            <div className="bg-turquoise-200 rounded-full h-[24px] w-[212px] animate-pulse"></div>
          </div>
        </div>
        <div className="border border-t-turquoise-100 my-3"></div>
        <div className="flex flex-col px-7 ">
          <div className="flex items-center gap-2">
            <div className="bg-turquoise-200 rounded-full h-[40px] w-[40px] animate-pulse"></div>
            <div className="bg-turquoise-200 rounded-full h-[24px] w-[106px] animate-pulse"></div>
          </div>
        </div>
        <div className="border border-t-turquoise-100 my-3"></div>
        <TimeSlotSkeleton />
        <LocationSkeleton />
        <NoteBackHomeSkeleton />
      </div>
    </>
  );
};

export default BodySkeleton;
