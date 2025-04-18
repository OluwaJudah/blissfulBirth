import { appointmentWeeks } from "@/constants/appointment";

export const calculateTrimester = (pregnancyWeeks: number) => {
  if (pregnancyWeeks <= 12) return 0;
  else if (pregnancyWeeks <= 27) return 1;
  return 2;
};

export const getPregnancyMonth = (weeksPregnant: number) => {
  const months = Math.floor(weeksPregnant / 4.345);
  const s = ["th", "st", "nd", "rd"],
    v = months % 100;
  return months + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const getNextAppointmentWeek = (currentWeek: number) => {
  const currentIndex = appointmentWeeks.findIndex(
    (week) => week === currentWeek
  );
  if (currentIndex + 1 < appointmentWeeks.length)
    return appointmentWeeks[currentIndex + 1];

  return 41;
};

export const calculatePregnancyWeeks = (
  lastMenstrualDate: Date,
  currentDate: Date
) => {
  const differenceInTime =
    new Date(currentDate).getTime() - new Date(lastMenstrualDate).getTime();
  return Math.floor(differenceInTime / (1000 * 60 * 60 * 24 * 7));
};

export const getPregnancyDays = (lmpDateStr: string): number => {
  const lmpDate = new Date(lmpDateStr);
  const today = new Date();

  const diffTime = today.getTime() - lmpDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

export const calculateDueDate = (lastMenstrualDate: Date) => {
  const lmpDate = new Date(lastMenstrualDate);

  lmpDate.setFullYear(lmpDate.getFullYear() + 1);
  lmpDate.setMonth(lmpDate.getMonth() - 3);
  lmpDate.setDate(lmpDate.getDate() + 7);

  return lmpDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const getTuesdays = (year: number, month: number) => {
  let result = [];
  for (let month = new Date().getMonth(); month < 144; month++) {
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
