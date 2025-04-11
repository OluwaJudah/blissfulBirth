import React from "react";
import NextAppointment from "./NextAppointment";
import MyBaby from "./MyBaby";
import MyBody from "./MyBody";
import DueDate from "./DueDate";

const Body = ({
  appointment,
  dueDate,
  lastAppointment,
}: {
  appointment: {
    _id: string;
    date: string;
    time: string;
    status: string;
    pregnancyWeeks: number;
  };
  dueDate: string;
  lastAppointment: any;
}) => {
  const { pregnancyWeeks } = appointment;
  return (
    <div className="px-[20px] flex flex-col gap-[30px] overflow-x-hidden">
      <NextAppointment appointment={appointment} />
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
