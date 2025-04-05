import React from "react";
import NextAppointment from "./NextAppointment";
import MyBaby from "./MyBaby";
import MyBody from "./MyBody";
import DueDate from "./DueDate";

const Body = ({
  appointmentDate,
  pregnancyWeeks,
}: {
  appointmentDate: string;
  pregnancyWeeks: number;
}) => {
  return (
    <div className="px-[20px] flex flex-col gap-[35px]">
      <NextAppointment appointmentDate={appointmentDate} pregnancyWeeks={pregnancyWeeks} />
      <MyBaby />
      <MyBody />
      <DueDate />
    </div>
  );
};

export default Body;
