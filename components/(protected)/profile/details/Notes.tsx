"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Notes = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col gap-3 justify-between items-center px-6 py-5 bg-turquoise-200 rounded-3xl transition delay-150 duration-700 ease-out"
    >
      <div className="flex justify-between w-full">
        <p className="font-sans text-black text-lg tracking-tight leading-none">
          Notes
        </p>
        {isOpen ? (
          <ChevronDown size={24} strokeWidth={4} />
        ) : (
          <ChevronUp size={24} strokeWidth={4} />
        )}
      </div>
      {isOpen && (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer...
        </p>
      )}
    </div>
  );
};

export default Notes;
