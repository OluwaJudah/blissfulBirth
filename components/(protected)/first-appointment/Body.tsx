"use client";
import Location from "./Location";
import { useState } from "react";
import DateSlots from "./DateSlots";
import { createFirstAppointment } from "@/actions/appointment";
import { FIRST_APPOINTMENT, firstAppointmentTrimester } from "@/constants/user";
import Notes from "./Notes";
import { calculateTrimester } from "@/utils";

const Body = ({ pregnancyWeeks }: { pregnancyWeeks: number }) => {
  const [selectedSlot, setSelectedSlot] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const trimester = calculateTrimester(pregnancyWeeks);
  const trimesterStr = firstAppointmentTrimester[trimester];
  const submit = async () => {
    if (selectedSlot === "") {
      setError("Please select a Date");
      return;
    }

    try {
      await createFirstAppointment({
        date: new Date(selectedSlot),
        note,
        type: FIRST_APPOINTMENT,
      });
    } catch (err) {
      setError("Something went wrong");
    }
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
