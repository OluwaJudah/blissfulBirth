import React from "react";
import NextAppointment from "./NextAppointment";
import MyBaby from "./MyBaby";
import MyBody from "./MyBody";
import DueDate from "./DueDate";
import ToExpectForBaby from "./ToExpectForBaby";
import ToExpectForBody from "./ToExpectForBody";

const Body = ({
  appointmentDate,
  dueDate,
  pregnancyWeeks,
}: {
  appointmentDate: string;
  dueDate: string;
  pregnancyWeeks: number;
}) => {
  return (
    <div className="px-[20px] flex flex-col gap-[35px]">
      <NextAppointment
        appointmentDate={appointmentDate}
        pregnancyWeeks={pregnancyWeeks}
      />
      <MyBaby pregnancyWeeks={pregnancyWeeks} />
      <MyBody pregnancyWeeks={pregnancyWeeks} />
      <DueDate dueDate={dueDate} />
      {/* <ToExpectForBaby />
      <ToExpectForBody /> */}
    </div>
  );
};

export default Body;
