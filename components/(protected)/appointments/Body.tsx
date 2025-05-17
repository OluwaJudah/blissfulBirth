import NextAppointment from "./NextAppointment";
import MyBaby from "./MyBaby";
import DueDate from "./DueDate";

const Body = () => {
  return (
    <div className="px-[20px] flex flex-col gap-[30px]">
      <NextAppointment />
      <div className="flex flex-col gap-[10px]">
        <MyBaby />
        <DueDate />
      </div>
    </div>
  );
};

export default Body;
