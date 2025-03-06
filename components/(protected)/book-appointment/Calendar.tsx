"use client";
import { useState } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState<any>(new Date());
  const [selectedDate, setSelectedDate] = useState<any>(null);

  const changeMonth = (offset: number) => {
    setCurrentDate(
      (prevDate: any) =>
        new Date(prevDate.getFullYear(), prevDate.getMonth() + offset, 1)
    );
    setSelectedDate(null); // Reset selection when month changes
  };

  const today = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

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
    <div className="w-full flex flex-col overflow-hidden">
      {/* <!-- Calendar --> */}
      <div className="p-3 space-y-0.5">
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
        {/* <!-- Months --> */}

        {/* <!-- Weeks --> */}
        <div className="flex pb-1.5 justify-between">
          {days.map((day, index) => (
            <span
              key={index}
              className="m-px w-10 block text-center text-sm text-turquoise-800"
            >
              {day}
            </span>
          ))}
        </div>
        {/* <!-- Weeks --> */}

        {/* <!-- Days --> */}
        <div className="grid grid-cols-7 gap-1 text-center">
          {daysArray.map(({ day, offset }, index) => {
            const displayDate = new Date(year, month + offset, day);
            const isToday = today.toDateString() === displayDate.toDateString();
            const isSelected =
              selectedDate?.toDateString() === displayDate.toDateString();
            const isFaded = offset !== 0; // Previous/Next month days

            let style = "";
            if (isFaded)
              style =
                "m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 opacity-50 pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200 dark:hover:border-blue-500 dark:hover:text-blue-500 dark:focus:border-blue-500 dark:focus:text-blue-500";
            else if (isToday)
              style =
                "m-px size-10 flex justify-center items-center bg-pinklet-500 border border-transparent text-sm font-medium text-white hover:border-pinklet-500 rounded-full dark:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:hover:border-neutral-700";
            else if (isSelected)
              style =
                "m-px size-10 flex justify-center items-center bg-pinklet-500 border border-transparent text-sm font-medium text-white hover:border-pinklet-500 rounded-full dark:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:hover:border-neutral-700";
            else
              style =
                "m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200 dark:hover:border-blue-500 dark:hover:text-blue-500 dark:focus:border-blue-500 dark:focus:text-blue-500";
            return (
              <div
                key={index}
                className={style}
                onClick={() =>
                  offset === 0
                    ? setSelectedDate(displayDate)
                    : changeMonth(offset)
                }
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
