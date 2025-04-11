"use client";
import { Pen } from "lucide-react";
import Location from "./Location";
import { useState } from "react";
import DateSlots from "./DateSlots";
import { useRouter } from "next/navigation";
import TimeSlot from "./TimeSlot";

const Body = ({ from }: { from: string }) => {
  const [selectedDateSlot, setSelectedDateSlot] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [note, setNote] = useState("");
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");

  const router = useRouter();
  const submit = () => {
    let isError = false;
    if (selectedDateSlot === "") {
      setDateError("Please select a Date");
      isError = true;
    }

    if (selectedTimeSlot === "") {
      setTimeError("Please select a Time slot");
      isError = true;
    }

    if (isError) return;

    console.log({ note, selectedDateSlot, selectedTimeSlot });
    router.push(`/confirmed-booking`);
  };

  return (
    <>
      <div className="w-full flex flex-col overflow-hidden pb-0 h-[195px]">
        <DateSlots
          setError={setDateError}
          selectedSlot={selectedDateSlot}
          setSelectedSlot={setSelectedDateSlot}
        />
        {dateError && (
          <p className="text-center text-pinklet-500">{dateError}</p>
        )}
      </div>
      <div className="flex flex-col h-full gap-[10px] rounded-t-[50px] bg-turquoise-50 py-6 flex flex-col">
        <TimeSlot
          selectedTimeSlot={selectedTimeSlot}
          setSelectedTimeSlot={setSelectedTimeSlot}
          timeError={timeError}
          setTimeError={setTimeError}
        />

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
              className="w-full h-[150px] rounded-2xl border border-turquoise-200 focus:border-turquoise-400 focus:ring-transparent focus:inset-ring-transparent"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="border border-t-turquoise-100 my-3"></div>
        <div className="w-full px-7">
          <button
            onClick={submit}
            className="bg-pinklet-500 w-full hover:bg-pinklet-700 text-white rounded-full h-[35px]"
          >
            Book
          </button>
        </div>
      </div>
    </>
  );
};

export default Body;
