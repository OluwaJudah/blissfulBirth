import React from "react";
import NextAppointment from "./NextAppointment";
import MyBaby from "./MyBaby";
import MyBody from "./MyBody";
import DueDate from "./DueDate";

const Body = ({
  appointment,
  dueDate,
}: {
  appointment: {
    _id: string;
    date: string;
    time: string;
    status: string;
    pregnancyWeeks: number;
  };
  dueDate: string;
}) => {
  const { pregnancyWeeks } = appointment;

  return (
    <div className="px-[20px] flex flex-col gap-[30px] overflow-x-hidden">
      <NextAppointment />
      <div className="flex flex-col gap-[15px]">
        <MyBaby pregnancyWeeks={pregnancyWeeks} />
        <MyBody pregnancyWeeks={pregnancyWeeks} />
      </div>
      <DueDate dueDate={dueDate} />
    </div>
  );
};

export default Body;
