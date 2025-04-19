import Image from "next/image";
import { calculateTrimester, getNextAppointmentWeek } from "@/utils";
import { CONFIRMED_APPOINTMENT, trimesters } from "@/constants/appointment";
import { getNextAppointmentData } from "@/data/appointment";
import { NextAppointmentButton } from "@/components/Buttons";

const NextAppointment = async () => {
  const appointment = await getNextAppointmentData();

  const appointmentDefault = {
    _id: "",
    date: "",
    time: "",
    status: "",
    pregnancyWeeks: 0,
  };

  const appointmentData = appointment
    ? { ...appointment, _id: appointment._id.toString() }
    : appointmentDefault;

  const { date, time, status, pregnancyWeeks } = appointmentData;
  const isCofirmed = status === CONFIRMED_APPOINTMENT;
  const nextPregnancyWeeks = isCofirmed
    ? pregnancyWeeks
    : getNextAppointmentWeek(pregnancyWeeks);
  const trimester = calculateTrimester(nextPregnancyWeeks);
  const trimesterStr = trimesters[trimester];
  const dateTime = isCofirmed ? `${date} ${time}` : "To be Confirmed";

  return (
    <div className="flex flex-col gap-y-4">
      <p className="font-mono font-bold text-turquoise-900 tracking-tight">
        Next Appointment
      </p>
      <div className="shadow-xl relative w-full h-[168px] md:h-[172px] bg-pinklet-100 rounded-2xl px-4 py-5 md:py-4 overflow-hidden">
        <div className="flex flex-col h-full w-4/5 md:gap-2 gap-3">
          <h2 className=" font-sans font-bold text-turquoise-900 tracking-wide">
            Week {nextPregnancyWeeks} - {trimesterStr} Trimester
          </h2>
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 items-center">
              <Image
                src="/calendar.svg"
                height={23}
                width={23}
                alt="calendar"
              />
              <p className="font-sans text-black text-sm">{dateTime}</p>
            </div>
            <div className="flex gap-3 items-center">
              <Image src="/pin.svg" height={23} width={23} alt="pin" />
              <p className="font-sans font-medium text-black text-sm md:tracking-normal tracking-tight">
                200 Sanders Creek Rd, Joha...
              </p>
            </div>
          </div>
          <div className="w-full">
            <NextAppointmentButton
              id={appointmentData._id}
              nextPregnancyWeeks={nextPregnancyWeeks}
              isCofirmed={isCofirmed}
            />
          </div>
        </div>
        <div className="absolute -bottom-10 md:-bottom-8 -right-3">
          <Image
            className="mb-4"
            src="/pregnant_woman_1.png"
            height={210}
            width={125}
            alt="Pregnant Woman 1"
          />
        </div>
      </div>
    </div>
  );
};

export default NextAppointment;
