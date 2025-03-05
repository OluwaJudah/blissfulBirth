import React from "react";
import Image from "next/image";
import Link from "next/link";

const DueDate = () => {
  return (
    <div className="w-full border border-turquoise-500 rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/baby-carriage.png"
            height={22}
            width={22}
            alt="calendar"
          />
          <p className="font-sans text-xl text-turquoise-300 tracking-tight">
            Due date:
          </p>
        </div>
        <span className="font-mono font-bold text-2xl text-turquoise-900 tracking-tight">
          19 Oct 2025
        </span>
      </div>
    </div>
  );
};

export default DueDate;
