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
        transition={{ duration: 1, type: "tween" }}
        initial="top"
        animate="bottom"
        exit="top"
        className="h-[70vh] w-full hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out hover:shadow-2xl shadow-xl rounded-xl border border-gray-300 p-3 mt-3"
      >
        <div className="border-b border-gray-300 py-2">
          <h3 className="text-2xl font-semibold">Week {id}</h3>
          <span className="text-sm italic text-gray-500">
            Date: 10 Aug 2025{" "}
          </span>
        </div>
        <div className="">
          <div className="flex py-3 border-b border-gray-300">
            <span className="mr-3 text-md font-semibold">Urine: </span>
            <span>45 ml</span>
          </div>
          <div className="flex py-3 border-b border-gray-300">
            <span className="mr-3 text-md font-semibold">Mommy's Weight: </span>
            <span>45 kg</span>
          </div>
          <div className="flex py-3 border-b border-gray-300">
            <span className="mr-3 text-md font-semibold">Blood Pressure: </span>
            <span>45'C</span>
          </div>
          <div className="flex py-3 border-b border-gray-300">
            <span className="mr-3 text-md font-semibold">Palpation: </span>
            <span>45 CM</span>
          </div>
          <div className="flex py-3 border-b border-gray-300">
            <span className="mr-3 text-md font-semibold">FH: </span>
            <span>116</span>
          </div>
          <div className="flex py-3 border-b border-gray-300">
            <span className="mr-3 text-md font-semibold">
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
