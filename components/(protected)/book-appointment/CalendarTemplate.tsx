"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <div className="w-80 mx-auto p-4 border rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => changeMonth(-1)}>
          <ChevronLeft />
        </button>
        <h2 className="text-lg font-semibold">
          {monthNames[month]} {year}
        </h2>
        <button onClick={() => changeMonth(1)}>
          <ChevronRight />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-semibold">
            {day}
          </div>
        ))}
        {daysArray.map(({ day, offset }, index) => {
          const displayDate = new Date(year, month + offset, day);
          const isToday = today.toDateString() === displayDate.toDateString();
          const isSelected =
            selectedDate?.toDateString() === displayDate.toDateString();
          const isFaded = offset !== 0; // Previous/Next month days

          return (
            <div
              key={index}
              className={`p-2 border cursor-pointer rounded-md 
                ${isToday ? "bg-teal-400 text-white font-bold" : ""} 
                ${isSelected ? "bg-teal-500 text-white" : "hover:bg-gray-200"} 
                ${isFaded ? "opacity-50" : ""}`}
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
  );
};

export default Calendar;
