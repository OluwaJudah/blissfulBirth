"use client";
import { useState } from "react";

const Times = ({ times }: { times: string[] }) => {
  const [selected, setSelected] = useState("");

  return (
    <>
      <div className="grid grid-cols-3 gap-2 my-3">
        {times.map((t: string) => {
          const style =
            selected === t
              ? "bg-pinklet-500 hover:bg-pinklet-600 text-white"
              : "bg-white border border-turquoise-100 hover:bg-pinklet-500 hover:text-white text-turquoise-900";
          return (
            <button
              key={t}
              onClick={() => setSelected(t)}
              className={`${style} rounded-full px-3 h-[33px]`}
            >
              <span className="md:text-sm">{t}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Times;
