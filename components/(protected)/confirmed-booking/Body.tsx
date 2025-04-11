import { Calendar, Calendar1, CalendarCheck, Home, Pen } from "lucide-react";
import Location from "./Location";
import TimeSlot from "./TimeSlot";
import Link from "next/link";

const Body = () => {
  return (
    <>
      <div className="flex flex-col h-full gap-[10px] rounded-t-[50px] bg-turquoise-50 py-8 flex flex-col">
        <div className="flex flex-col px-7 ">
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center bg-pinklet-200 w-[40px] h-[40px] rounded-full">
              <CalendarCheck size={20} strokeWidth={3} />
            </div>
            <p className="font-mono font-bold text-turquoise-900 tracking-tight">
              2nd Week - 3rd Trimester
            </p>
          </div>
        </div>
        <div className="border border-t-turquoise-100 my-3"></div>{" "}
        <div className="flex flex-col px-7 ">
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center bg-turquoise-200 w-[40px] h-[40px] rounded-full">
              <Calendar1 size={20} strokeWidth={3} />
            </div>
            <p className="font-mono font-bold text-turquoise-900">
              Tue Apr 01 2025
            </p>
          </div>
        </div>
        <div className="border border-t-turquoise-100 my-3"></div>
        <TimeSlot />
        <Location />
        <div className="flex flex-col gap-3 px-7">
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center bg-pinklet-200 w-[40px] h-[40px] rounded-full">
              <Pen size={20} strokeWidth={3} />
            </div>
            <p className="font-mono font-bold">Notes</p>
          </div>
          <div className="w-full">
            <p className="font-sans font-medium text-turquoise-950 text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer...
            </p>
          </div>
        </div>{" "}
        <div className="border border-t-turquoise-100 my-3"></div>
        <div className="w-full px-7">
          <Link
            className="flex items-center mx-auto justify-center gap-3 bg-turquoise-500 hover:bg-turquoise-700 text-white rounded-full w-full h-[35px]"
            href="/home"
          >
            <Home size={15} color="#fff" />
            <p className="text-center">Back to Home</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Body;
