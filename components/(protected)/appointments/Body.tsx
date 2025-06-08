import MyBaby from "./MyBaby";
import DueDate from "./DueDate";
import { CONFIRMED_APPOINTMENT } from "@/constants/appointment";
import { getNextAppointmentData } from "@/data/appointment";
import NextAppointment from "../NextAppointment";
import NextAppointmentSkeleton from "../NextAppointmentSkeleton";
import { Suspense } from "react";
import DueDateSkeleton from "../home/DueDateSkeleton";
import MyBabySkeleton from "./MyBabySkeleton";

const Body = async () => {
  const appointment = await getNextAppointmentData();

  const appointmentDefault = {
    _id: "",
    date: "",
    type: "",
    time: "",
    status: "",
    pregnancyWeeks: 0,
  };

  const appointmentData = appointment
    ? { ...appointment, _id: appointment._id.toString() }
    : appointmentDefault;

  const { date, time, status, pregnancyWeeks, type } = appointmentData;
  const isCofirmed = status === CONFIRMED_APPOINTMENT;
  const dateStr = date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const dateTime = isCofirmed ? `${dateStr} ${time}` : "To be Confirmed";

  return (
    <div className="px-[20px] flex flex-col gap-[30px]">
      <Suspense fallback={<NextAppointmentSkeleton />}>
        <NextAppointment
          nextPregnancyWeeks={pregnancyWeeks}
          appointmentId={appointmentData._id}
          dateTime={dateTime}
          type={type}
          isCofirmed={isCofirmed}
        />
      </Suspense>
      <div className="flex flex-col gap-[10px]">
        <Suspense fallback={<MyBabySkeleton />}>
          <MyBaby />
        </Suspense>
        <Suspense fallback={<DueDateSkeleton />}>
          <DueDate />
        </Suspense>
      </div>
    </div>
  );
};

export default Body;
