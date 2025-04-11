import { Pen } from "lucide-react";
import React from "react";

const Note = ({ note }: { note: string }) => {
  return (
    <div className="flex flex-col gap-3 px-7">
      <div className="flex items-center gap-2">
        <div className="flex justify-center items-center bg-pinklet-200 w-[40px] h-[40px] rounded-full">
          <Pen size={20} strokeWidth={3} />
        </div>
        <p className="font-mono font-bold">Notes</p>
      </div>
      <div className="w-full">
        {note ? (
          <p className="font-sans font-medium text-turquoise-950 text-base">
            {note}
          </p>
        ) : (
          <p className="font-sans font-medium text-turquoise-400 text-base">
            No note provided
          </p>
        )}
      </div>
    </div>
  );
};

export default Note;
