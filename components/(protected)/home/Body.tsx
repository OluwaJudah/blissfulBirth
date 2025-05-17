import NextAppointment from "./NextAppointment";
import MyBaby from "./MyBaby";
import MyBody from "./MyBody";
import DueDate from "./DueDate";
import { getNextAppointmentData } from "@/data/appointment";
import { CONFIRMED_APPOINTMENT } from "@/constants/appointment";

const Body = async ({ dueDate }: { dueDate: string }) => {
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
    <div className="px-[20px] flex flex-col gap-[30px] overflow-x-hidden">
      <NextAppointment
        nextPregnancyWeeks={pregnancyWeeks}
        appointmentId={appointmentData._id}
        dateTime={dateTime}
        type={type}
        isCofirmed={isCofirmed}
      />
      <div className="flex flex-col gap-[15px]">
        <MyBaby pregnancyWeeks={pregnancyWeeks} />
        <MyBody pregnancyWeeks={pregnancyWeeks} />
      </div>
      <DueDate dueDate={dueDate} />
    </div>
  );
};

export default Body;
