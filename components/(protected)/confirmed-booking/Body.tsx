import { Calendar1, CalendarCheck, Home, Pen } from "lucide-react";
import Location from "./Location";
import TimeSlot from "./TimeSlot";
import NoteBackHome from "./NoteBackHome";
import NotesAndBooking from "./NotesButton";

import Link from "next/link";
import type { IAppointment } from "@/definitions/appointment";
import { calculateTrimester } from "@/utils";
import { trimesters } from "@/constants/appointment";
import Note from "./Note";

const Body = ({
  appointment,
  bookingId,
  from,
  book,
}: {
  appointment: IAppointment;
  bookingId: string;
  from: string;
  book?: string;
}) => {
  if (!appointment) return <></>;

  const { date, time, pregnancyWeeks, note } = appointment;
  const dateFormatted = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const trimester = calculateTrimester(pregnancyWeeks);
  const trimesterStr = trimesters[trimester];
  const url = from === "home" ? "/home" : "/appointments";

  return (
    <>
      <div className="flex flex-col h-full gap-[10px] rounded-t-[50px] bg-turquoise-50 py-8 flex flex-col">
        <div className="flex flex-col px-7 ">
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center bg-pinklet-200 w-[40px] h-[40px] rounded-full">
              <CalendarCheck size={20} strokeWidth={3} />
            </div>
            <p className="font-mono font-bold text-turquoise-900 tracking-tight">
              Week {pregnancyWeeks} - {trimesterStr} Trimester
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
              {dateFormatted}
            </p>
          </div>
        </div>
        <div className="border border-t-turquoise-100 my-3"></div>
        <TimeSlot time={time} />
        <Location />
        {book ? (
          <NotesAndBooking bookingId={bookingId} from={from} />
        ) : (
          <NoteBackHome note={note} from={from} />
        )}
      </div>
    </>
  );
};

export default Body;
