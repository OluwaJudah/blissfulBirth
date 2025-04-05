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
        {tuesdayArray.length > 0 ? (
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
