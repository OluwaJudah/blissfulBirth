"use client";
import { Pen } from "lucide-react";
import Location from "./Location";
import { useState } from "react";
import DateSlots from "./DateSlots";
import { useRouter } from "next/navigation";

const Body = () => {
  const [selectedSlot, setSelectedSlot] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const submit = () => {
    if (selectedSlot === "") {
      setError("Please select a Date");
      return;
    }
    console.log({ note, selectedSlot });
    router.push("/confirmed-booking");
  };
  return (
    <>
      <div className="w-full flex flex-col overflow-hidden pb-0 h-[165px]">
        <DateSlots
          setError={setError}
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
        />
        {error && <p className="text-center text-pinklet-500">{error}</p>}
      </div>
      <div className="flex flex-col h-full gap-[10px] rounded-t-[50px] bg-turquoise-50 py-10 flex flex-col">
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
