"use client";

import { Controller, Control } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  control: Control<any>;
  name: string;
  placeholder?: string;
  min?: string | Date;
  max?: string | Date;
};

export default function ControlledDatePicker({
  control,
  name,
  placeholder,
  min,
  max,
}: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <DatePicker
          selected={field.value ? new Date(field.value) : null}
          onChange={(date) => field.onChange(date)}
          placeholderText={placeholder}
          minDate={min ? new Date(min) : undefined}
          maxDate={max ? new Date(max) : undefined}
          dateFormat="yyyy-MM-dd"
          openToDate={
            field.value
              ? new Date(field.value)
              : min
              ? new Date(min)
              : max
              ? new Date(max)
              : new Date()
          }
          calendarClassName="bg-white shadow-lg rounded-xl p-4 border border-gray-200"
          dayClassName={(date) =>
            "w-10 h-10 flex items-center justify-center rounded-full transition-colors hover:bg-teal-100 focus:bg-teal-200"
          }
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="flex items-center justify-between mb-3 px-2">
              <button
                type="button"
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
                className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-40 transition"
              >
                ‹
              </button>

              <div className="flex items-center gap-2">
                <select
                  value={date.getMonth()}
                  onChange={(e) => changeMonth(Number(e.target.value))}
                  className="px-2 py-1 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-teal-400"
                >
                  {[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ].map((month, index) => (
                    <option key={month} value={index}>
                      {month}
                    </option>
                  ))}
                </select>

                <select
                  value={date.getFullYear()}
                  onChange={(e) => changeYear(Number(e.target.value))}
                  className="px-2 py-1 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-teal-400 max-h-40 overflow-y-auto"
                >
                  {Array.from({ length: 100 }, (_, i) => {
                    const year = currentYear - 50 + i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>

              <button
                type="button"
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
                className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-40 transition"
              >
                ›
              </button>
            </div>
          )}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
      )}
    />
  );
}
