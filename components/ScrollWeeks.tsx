"use client";
import { schedulesNos } from "@/data";
import Link from "next/link";
import { useEffect } from "react";

const ScrollWeeks = ({ id }: { id: string }) => {
  useEffect(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
  }, [id]);
  return (
    <div className="flex items-center px-1 gap-4 w-[1000px]">
      {schedulesNos.map((num) => (
        <Link
          id={num.toString()}
          scroll={false}
          href={`/schedules/${num}`}
          key={num}
          className={`ring-4 flex shadow-md hover:shadow-xl transition delay-150 duration-300 ease-in-out justify-center items-center size-12 ${
            id === num.toString()
              ? "ring-pinklet-500 bg-pinklet-500 hover:bg-pinklet-600 text-white"
              : "ring-pinklet-500/10 hover:bg-pinklet-500 hover:text-white text-turquoise-900"
          } rounded-full`}
        >
          {num}
        </Link>
      ))}
    </div>
  );
};

export default ScrollWeeks;
