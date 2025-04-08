"use client";
import { firstAppointmentTimeSlots, monthNames } from "@/constants/user";
import { useMemo, useState } from "react";
import DateSlotHeader from "./DateSlotHeader";
import { DateSlotButton } from "@/components/Buttons";
import { getTuesdays } from "@/utils";

const DateSlots = ({
  trimester,
  setSelectedSlot,
  setError,
}: {
  trimester: number;
  setSelectedSlot: (slot: string) => void;
  setError: (slot: string) => void;
}) => {
  const [currentDate, setCurrentDate] = useState<any>(new Date());
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const timeSlot = firstAppointmentTimeSlots[trimester];

  const getTuesdays = (year: number, month: number) => {
    let result = [];
    for (let month = new Date().getMonth(); month < 12; month++) {
      let tuesdays = [];
      for (let day = 1; day <= 31; day++) {
        let date = new Date(year, month, day);
        if (date.getMonth() !== month) break; // Stop if the month changes
        if (date.getDay() === 2) tuesdays.push(date.toDateString()); // 2 = Tuesday
      }
      if (tuesdays.length >= 2) {
        result.push(tuesdays[1]); // 2nd Tuesday
        result.push(tuesdays[tuesdays.length - 1]); // Last Tuesday
      }
    }

    return result.filter((dateStr) => {
      let date = new Date(dateStr);
      return date.getMonth() === month; // May is month index 4 (0-based index)
    });
  };

  const changeMonth = (offset: number) => {
    setSelectedSlot("");
    setCurrentDate(
      (prevDate: any) =>
        new Date(prevDate.getFullYear(), prevDate.getMonth() + offset, 1)
    );
    setSelectedDate(null); // Reset selection when month changes
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const tuesdayArray = useMemo(() => getTuesdays(year, month), [year, month])

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

      <DateSlotHeader
        monthName={monthNames[month]}
        year={year}
        changeMonth={changeMonth}
      />
      <div className="flex flex-col px-7 gap-y-3">
        {tuesdayArray && tuesdayArray.length > 0 ? (
          tuesdayArray.map((dateStr) => (
            <DateSlotButton
              key={dateStr}
              dateTime={`${dateStr} ${timeSlot}`}
              setError={setError}
              setSelectedSlot={setSelectedSlot}
            />
          ))
        ) : (
          <p className="text-center text-gray-400">No Slots available</p>
        )}
      </div>
    </div>
  );
};

export default DateSlots;
