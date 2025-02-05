"use client";
import { AnimatePresence, motion } from "motion/react";

const ScheduleDetails = ({ id }: { id: string }) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={{
          top: {
            y: -20,
            opacity: 0,
          },
          bottom: {
            y: 5,
            opacity: 1,
          },
        }}
        transition={{ duration: 1, type: "spring" }}
        initial="top"
        animate="bottom"
        exit="top"
        className="h-[65vh] w-full hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out hover:shadow-2xl shadow-xl rounded-xl border border-pinklet-500/20 p-3 mt-3"
      >
        <div className="border-b border-gray-300 py-2">
          <h3 className="font-mono text-2xl font-semibold">Week {id}</h3>
          <span className="text-pinklet-400 text-sm italic font-light">
            Date: 10 Aug 2025{" "}
          </span>
        </div>
        <div className="">
          <div className="flex py-3 border-b border-gray-300">
            <span className="font-mono mr-3 text-md font-medium">Urine: </span>
            <span>45 ml</span>
          </div>
          <div className="flex py-3 border-b border-gray-300">
            <span className="font-mono mr-3 text-md font-medium">Mommy's Weight: </span>
            <span>45 kg</span>
          </div>
          <div className="flex py-3 border-b border-gray-300">
            <span className="font-mono mr-3 text-md font-medium">Blood Pressure: </span>
            <span>45'C</span>
          </div>
          <div className="flex py-3 border-b border-gray-300">
            <span className="font-mono mr-3 text-md font-medium">Palpation: </span>
            <span>45 CM</span>
          </div>
          <div className="flex py-3 border-b border-gray-300">
            <span className="font-mono mr-3 text-md font-medium">FH: </span>
            <span>116</span>
          </div>
          <div className="flex py-3 border-b border-gray-300">
            <span className="font-mono mr-3 text-md font-medium">
              Baby's Position:{" "}
            </span>
            <span>Vertex</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ScheduleDetails;
