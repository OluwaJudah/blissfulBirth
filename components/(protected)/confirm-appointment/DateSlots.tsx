"use client";
import { useMemo, useState } from "react";

const DateSlots = ({
  selectedSlot,
  setSelectedSlot,
  setError,
}: {
  selectedSlot: string;
  setSelectedSlot: (slot: any) => void;
  setError: (slot: string) => void;
}) => {
  const [currentDate, setCurrentDate] = useState<any>(new Date());

  function getMondaysAndTuesdaysOfMonth(year: number, month: number) {
    const results = [];

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dayOfWeek = date.getDay(); // 1 = Monday, 2 = Tuesday

      if (dayOfWeek === 1 || dayOfWeek === 2) {
        results.push(date.toDateString()); // Format: "Tue Apr 08 2025"
      }
    }

    return results;
  }

  const changeMonth = (offset: number) => {
    setSelectedSlot("");
    setCurrentDate(
      (prevDate: any) =>
        new Date(prevDate.getFullYear(), prevDate.getMonth() + offset, 1)
    );
    setSelectedSlot(""); // Reset selection when month changes
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const tuesdayArray = useMemo(
    () => getMondaysAndTuesdaysOfMonth(year, month),
    [year, month]
  );

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate(); // Days in previous month

  // Generate days array with previous and next month days
  const daysArray = [
    ...Array.from({ length: firstDay }, (_, i) => ({
      day: prevMonthDays - firstDay + i + 1,
      offset: -1,
    })), // Previous month days
    ...Array.from({ length: daysInMonth }, (_, i) => ({
      day: i + 1,
      offset: 0,
    })), // Current month days
  ];

  // Fill remaining cells with next month's days
  while (daysArray.length % 7 !== 0) {
    daysArray.push({
      day: daysArray.length - firstDay - daysInMonth + 1,
      offset: 1,
    });
  }

  return (
    <div className="p-1 space-y-0.5">
      {/* <!-- Months --> */}
      <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
        {/* <!-- Prev Button --> */}
        <div className="col-span-1">
          <button
            type="button"
            className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            aria-label="Previous"
            onClick={() => changeMonth(-1)}
          >
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        </div>
        {/* <!-- End Prev Button --> */}

        {/* <!-- Month / Year --> */}
        <div className="col-span-3 flex justify-center items-center gap-x-1">
          <div className="relative">{monthNames[month]}</div>

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
            <svg
              className="shrink-0 size-4"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
        {/* <!-- End Next Button --> */}
      </div>

      <div className="flex flex-col px-7 gap-y-3 overflow-scroll h-[110px]">
        {tuesdayArray.length > 0 ? (
          tuesdayArray.map((dateStr, index) => {
            const style =
              selectedSlot === dateStr
                ? "bg-pinklet-500 text-white"
                : "bg-pinklet-50 hover:bg-pinklet-500 hover:text-white text-turquoise-900";
            return (
              <button
                key={index}
                onClick={() => {
                  setSelectedSlot(dateStr);
                  setError("");
                }}
                className={`${style} rounded-full px-5 min-h-[35px]`}
              >
                <span className="md:text-sm">{dateStr}</span>
              </button>
            );
          })
        ) : (
          <p className="text-center text-gray-400">No Slots available</p>
        )}
      </div>
    </div>
  );
};

export default DateSlots;
