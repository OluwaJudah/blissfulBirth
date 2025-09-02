import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { cn } from "@/lib/utils";

import "./datepicker-custom.css"; // custom overrides

interface DatePickerInputProps {
  control: any;
  name: string;
  placeholder?: string;
  min?: string | Date;
  max?: string | Date;
  error?: string;
  isRequired?: boolean;
}

export default function DatePickerInput({
  control,
  name,
  placeholder,
  min,
  max,
  error,
  isRequired,
}: DatePickerInputProps) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            className={cn(
              "w-full border-none focus:ring-0 text-black bg-transparent"
            )}
            selected={field.value ? new Date(field.value) : null}
            onChange={(date) => field.onChange(date)}
            placeholderText={placeholder}
            showYearDropdown
            showMonthDropdown
            dropdownMode="select"
            minDate={min ? new Date(min) : undefined}
            maxDate={max ? new Date(max) : undefined}
            dateFormat="yyyy-MM-dd"
            calendarClassName="custom-calendar"
            popperClassName="custom-popper"
          />
        )}
      />
      {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
    </>
  );
}
