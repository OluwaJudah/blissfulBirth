import React from "react";
import NextAppointment from "./NextAppointment";
import MyBaby from "./MyBaby";
import MyBody from "./MyBody";

const Body = () => {
  return (
    <div className="flex flex-col gap-[35px]">
      <NextAppointment />
      <MyBaby />
      <MyBody />
    </div>
  );
};

export default Body;
