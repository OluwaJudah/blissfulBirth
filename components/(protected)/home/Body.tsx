import React from "react";
import NextAppointment from "./NextAppointment";
import MyBaby from "./MyBaby";
import MyBody from "./MyBody";
import DueDate from "./DueDate";

const Body = () => {
  return (
    <div className="px-[20px] flex flex-col gap-[30px] overflow-x-hidden">
      <NextAppointment />
      <div className="flex flex-col gap-[15px]">
        <MyBaby />
        <MyBody />
      </div>
      <DueDate />
    </div>
  );
};

export default Body;
