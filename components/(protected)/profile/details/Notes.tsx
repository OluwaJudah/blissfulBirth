"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const Notes = ({ note }: { note: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col gap-3 px-6 py-5 bg-turquoise-200 rounded-3xl transition delay-150 duration-700 ease-out"
    >
      <div className="flex justify-between w-full">
        <p className="font-sans text-black text-lg tracking-tight leading-none">
          Notes
        </p>
        {isOpen ? (
          <ChevronDown
            className="text-turquoise-900"
            size={24}
            strokeWidth={4}
          />
        ) : (
          <ChevronUp className="text-turquoise-900" size={24} strokeWidth={4} />
        )}
      </div>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p className="text-turquoise-900">
            {note ? note : "No Note available"}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Notes;
