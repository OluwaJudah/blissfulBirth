import { Calendar1, CalendarCheck } from "lucide-react";
import Location from "./Location";
import TimeSlot from "./TimeSlot";
import NoteBackHome from "./NoteBackHome";
import NotesAndBooking from "./NotesButton";

const Body = ({ book, from }: { book?: string; from?: string }) => {
  return (
    <>
      <div className="flex flex-col h-full gap-[10px] rounded-t-[50px] bg-turquoise-50 py-8 flex flex-col">
        <div className="flex flex-col px-7 ">
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center bg-pinklet-200 w-[40px] h-[40px] rounded-full">
              <CalendarCheck size={20} strokeWidth={3} />
            </div>
            <p className="font-mono font-bold text-turquoise-900 tracking-tight">
              2nd Week - 3rd Trimester
            </p>
          </div>
        </div>
        <div className="border border-t-turquoise-100 my-3"></div>{" "}
        <div className="flex flex-col px-7 ">
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center bg-turquoise-200 w-[40px] h-[40px] rounded-full">
              <Calendar1 size={20} strokeWidth={3} />
            </div>
            <p className="font-mono font-bold text-turquoise-900">
              Tue Apr 01 2025
            </p>
          </div>
        </div>
        <div className="border border-t-turquoise-100 my-3"></div>
        <TimeSlot />
        <Location />
        {book ? <NotesAndBooking from={from} /> : <NoteBackHome from={from} />}
      </div>
    </>
  );
};

export default Body;
