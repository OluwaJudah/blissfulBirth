import React from "react";
import NextAppointment from "./NextAppointment";
import MyBaby from "./MyBaby";
import MyBody from "./MyBody";
import DueDate from "./DueDate";

const Body = ({
  appointmentDate,
  dueDate,
  pregnancyWeeks,
  lastAppointment,
}: {
  appointmentDate: string;
  dueDate: string;
  pregnancyWeeks: number;
  lastAppointment: any;
}) => {
  return (
    <div className="px-[20px] flex flex-col gap-[30px] overflow-x-hidden">
      <NextAppointment
        appointmentDate={appointmentDate}
        pregnancyWeeks={pregnancyWeeks}
      />
      <div className="flex flex-col gap-[15px]">
        <MyBaby
          pregnancyWeeks={pregnancyWeeks}
          lastAppointment={lastAppointment}
        />
        <MyBody
          pregnancyWeeks={pregnancyWeeks}
          lastAppointment={lastAppointment}
        />
      </div>
      <DueDate dueDate={dueDate} />
    </div>
  );
};

export default Body;
