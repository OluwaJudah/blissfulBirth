"use client";
import { useState } from "react";
type ConditionType = { name: string; isAdded: boolean };

const Times = ({ times }: { times: string[] }) => {
  const [selected, setSelected] = useState("");

  return (
    <>
      <div className="flex flex-wrap gap-2 my-3">
        {times.map((t: string) => {
          const style =
            selected === t
              ? "bg-pinklet-500 hover:bg-pinklet-600 text-white"
              : "border border-pinklet-500 hover:bg-pinklet-500 hover:text-white text-turquoise-900";
          return (
            <button
              key={t}
              onClick={() => setSelected(t)}
              className={`${style} rounded-full px-4 h-[33px]`}
            >
              {t}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Times;
