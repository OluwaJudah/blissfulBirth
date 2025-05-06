"use client";
import { Calendar1, CalendarCheck, LoaderCircle, Pen } from "lucide-react";
import Location from "./Location";
import TimeSlot from "./TimeSlot";
import { getLastTuesdayFromCurrentOrNextMonth } from "@/utils";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Body = () => {
  const [note, setNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const submit = () => {
    setIsLoading(true);
    router.push("/confirmed-booking");
  };

  const newIntakeDateStr = getLastTuesdayFromCurrentOrNextMonth();

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
              {newIntakeDateStr}
            </p>
          </div>
        </div>
        <div className="border border-t-turquoise-100 my-3"></div>
        <TimeSlot />
        <Location />
        <div className="flex flex-col gap-3 px-7">
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center bg-turquoise-200 w-[40px] h-[40px] rounded-full">
              <Pen size={20} strokeWidth={3} />
            </div>
            <p className="font-mono font-bold">Notes</p>
          </div>
          <div className="w-full">
            <textarea
              onChange={() => setNote("")}
              className="w-full h-[110px] rounded-2xl border border-turquoise-200 focus:border-turquoise-400 focus:ring-transparent focus:inset-ring-transparent"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="border border-t-turquoise-100 my-3"></div>
        <div className="w-full px-7">
          {isLoading ? (
            <button
              onClick={() => console.log("Loading...")}
              className="flex items-center justify-center gap-2 bg-pinklet-400 w-full text-white rounded-full h-[35px]"
            >
              <LoaderCircle className="animate-spin" />
              <p>Loading ...</p>
            </button>
          ) : (
            <button
              onClick={submit}
              className="bg-pinklet-500 w-full hover:bg-pinklet-700 text-white rounded-full h-[35px]"
            >
              Confirm Booking
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
