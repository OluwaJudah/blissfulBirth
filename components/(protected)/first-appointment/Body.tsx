"use client";
import Location from "./Location";
import { useState } from "react";
import DateSlots from "./DateSlots";
import { createAppointment } from "@/actions/appointment";
import {
  CONFIRMED_APPOINTMENT,
  FIRST_APPOINTMENT,
  firstAppointmentTimeSlots,
  trimesters,
} from "@/constants/appointment";
import Notes from "./Notes";
import { calculateTrimester } from "@/utils";

const Body = ({ pregnancyWeeks }: { pregnancyWeeks: number }) => {
  const [selectedSlot, setSelectedSlot] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const trimester = calculateTrimester(pregnancyWeeks);
  const trimesterStr = trimesters[trimester];
  const time = firstAppointmentTimeSlots[trimester];

  const submit = async () => {
    if (selectedSlot === "") {
      setError("Please select a Date");
      return;
    }

    setIsLoading(true);
    try {
      await createAppointment(
        {
          date: selectedSlot,
          time,
          status: CONFIRMED_APPOINTMENT,
          note,
          pregnancyWeeks,
          type: FIRST_APPOINTMENT,
        },
        "home"
      );
    } catch (err) {}
  };
  return (
    <>
      <div className="w-full flex flex-col overflow-hidden pt-2 h-[175px]">
        <DateSlots
          trimester={trimester}
          setError={setError}
          setSelectedSlot={setSelectedSlot}
        />
        {error && <p className="text-center text-pinklet-700">{error}</p>}
      </div>
      <div className="flex flex-col h-full gap-[10px] rounded-t-[50px] bg-turquoise-50 py-6 flex flex-col">
        <div className="flex flex-col px-7 text-center">
          <p className="font-sans font-bold text-lg text-pinklet-700">
            Congratulations
          </p>
          <p className="font-mono text-sm text-turquoise-800 tracking-tight">
            You're in your{" "}
            <b className="text-turquoise-900">{trimesterStr} Trimester</b>
          </p>
        </div>
        <div className="border border-t-turquoise-100 my-3"></div>
        <Location />
        <Notes setNote={setNote} />
        <div className="w-full px-7">
          <button
            onClick={submit}
            className={`${
              isLoading ? "bg-gray-300" : "bg-pinklet-500"
            } w-full hover:bg-pinklet-700 text-white rounded-full h-[35px]`}
          >
            Book
          </button>
        </div>
      </div>
    </>
  );
};

export default Body;
