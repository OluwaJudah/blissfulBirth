import React from "react";
import NextAppointment from "./NextAppointment";
import MyBaby from "./MyBaby";
import MyBody from "./MyBody";
import DueDate from "./DueDate";
import ToExpectForBaby from "./ToExpectForBaby";
import ToExpectForBody from "./ToExpectForBody";

const Body = () => {
  return (
    <div className="px-[20px] flex flex-col gap-[35px]">
      <NextAppointment />
      <ToExpectForBaby />
      <ToExpectForBody />
      {/* <MyBaby /> */}
      {/* <MyBody /> */}
      <DueDate />
    </div>
  );
};

export default Body;
