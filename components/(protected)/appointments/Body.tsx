import React from "react";
import NextAppointment from "./NextAppointment";
import MyBaby from "./MyBaby";
import DueDate from "./DueDate";

const Body = () => {
  return (
    <div className="px-[20px] flex flex-col gap-[30px]">
      <NextAppointment />
      <MyBaby />
      <DueDate />
    </div>
  );
};

export default Body;
