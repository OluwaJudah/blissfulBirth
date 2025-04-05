import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const DateSlotHeader = ({
  monthName,
  year,
  changeMonth,
}: {
  monthName: string;
  year: string;
  changeMonth: (month: number) => void;
}) => {
  return (
    <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
      {/* <!-- Prev Button --> */}
      <div className="col-span-1">
        <button
          type="button"
          className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          aria-label="Previous"
          onClick={() => changeMonth(-1)}
        >
          <ChevronLeft size={18} />
        </button>
      </div>
      {/* <!-- End Prev Button --> */}

      {/* <!-- Month / Year --> */}
      <div className="col-span-3 flex justify-center items-center gap-x-1">
        <div className="relative">{monthName}</div>

        <span className="text-gray-800 dark:text-neutral-200">/</span>

        <div className="relative">{year}</div>
      </div>
      {/* <!-- End Month / Year --> */}

      {/* <!-- Next Button --> */}
      <div className="col-span-1 flex justify-end">
        <button
          type="button"
          className=" size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          aria-label="Next"
          onClick={() => changeMonth(1)}
        >
          <ChevronRight size={18} />
        </button>
      </div>
      {/* <!-- End Next Button --> */}
    </div>
  );
};

export default DateSlotHeader;
