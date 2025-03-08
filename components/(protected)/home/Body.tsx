import React from "react";
import NextAppointment from "./NextAppointment";
import MyBaby from "./MyBaby";
import MyBody from "./MyBody";
import DueDate from "./DueDate";

const Body = () => {
  return (
    <div className="px-[20px] flex flex-col gap-[35px]">
      <NextAppointment />
      <MyBaby />
      <MyBody />
      <DueDate />
    </div>
  );
};

export default Body;
