import { Calendar1, CalendarCheck } from "lucide-react";
import Location from "./Location";
import TimeSlot from "./TimeSlot";
import NoteBackHome from "./NoteBackHome";
import NotesAndBooking from "./NotesButton";

import type { IAppointment } from "@/definitions/appointment";
import { calculateTrimester } from "@/utils";
import { APPOINTMENT, trimesters } from "@/constants/appointment";

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

  const { date, time, pregnancyWeeks, note, type } = appointment;
  const dateFormatted = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const trimester = calculateTrimester(pregnancyWeeks);
  const trimesterStr = trimesters[trimester];
  const url = from === "home" ? "/home" : "/appointments";
  const weeksLabel =
    type === APPOINTMENT
      ? ` Week ${pregnancyWeeks} - ${trimesterStr} Trimester`
      : "First Appointment";

  return (
    <div className="flex flex-col flex-1 gap-4 rounded-t-[30px] bg-turquoise-50 py-6">
      {/* Pregnancy Weeks */}
      <div className="flex items-center gap-2 px-7">
        <div className="flex justify-center items-center bg-pinklet-200 w-10 h-10 rounded-full">
          <CalendarCheck className="text-white" size={20} strokeWidth={3} />
        </div>
        <p className="font-mono font-bold text-turquoise-900 tracking-tight">
          {weeksLabel}
        </p>
      </div>

      <div className="border-t border-t-turquoise-100" />

      {/* Appointment Date */}
      <div className="flex items-center gap-2 px-7">
        <div className="flex justify-center items-center bg-turquoise-200 w-10 h-10 rounded-full">
          <Calendar1 className="text-white" size={20} strokeWidth={3} />
        </div>
        <p className="font-mono font-bold text-turquoise-900">
          {dateFormatted}
        </p>
      </div>

      <div className="border-t border-t-turquoise-100" />

      <TimeSlot time={time} />
      <Location />

      {/* Notes / Booking */}
      {book ? (
        <NotesAndBooking bookingId={bookingId} from={from} />
      ) : (
        <NoteBackHome note={note} from={from} />
      )}

      {/* Extra space for iOS safe area */}
      <div className="pb-[env(safe-area-inset-bottom)]" />
    </div>
  );
};

export default Body;
