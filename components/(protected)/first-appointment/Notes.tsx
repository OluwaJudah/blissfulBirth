import { Pen } from "lucide-react";
import React from "react";

const Notes = ({ setNote }: { setNote: (note: string) => void }) => {
  return (
    <>
      {" "}
      <div className="flex flex-col gap-3 px-7">
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center bg-pinklet-200 w-[40px] h-[40px] rounded-full">
            <Pen size={20} strokeWidth={3} />
          </div>
          <p className="font-mono font-bold">Notes</p>
        </div>
        <div className="w-full">
          <textarea
            onChange={() => setNote("")}
            className="w-full h-[100px] rounded-2xl border border-turquoise-200 focus:border-turquoise-400 focus:ring-transparent focus:inset-ring-transparent"
            name=""
            id=""
          />
        </div>
      </div>
      <div className="border border-t-turquoise-100 my-3"></div>
    </>
  );
};

export default Notes;
