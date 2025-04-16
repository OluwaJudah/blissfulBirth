import React from "react";
import Image from "next/image";
import Link from "next/link";
import { calculateTrimester, getNextAppointmentWeek } from "@/utils";
import { CONFIRMED_APPOINTMENT, trimesters } from "@/constants/appointment";

const NextAppointment = ({
  appointment,
}: {
  appointment: {
    _id: string;
    date: string;
    time: string;
    status: string;
    pregnancyWeeks: number;
  };
}) => {
  const { date, time, status, pregnancyWeeks } = appointment;
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
              <p className="font-sans font-medium text-black text-sm">
                200 Sanders Creek Rd, Joha...
              </p>
            </div>
          </div>
          <div className="w-full">
            {isCofirmed ? (
              <Link
                className="flex items-center mx-auto bg-pinklet-500 hover:bg-pinklet-700 text-white rounded-2xl w-[140px] h-[30px]"
                href={`/confirmed-booking?bookingId=${appointment._id}`}
              >
                <p className="text-center w-full text-sm">View Details</p>
              </Link>
            ) : (
              <Link
                className="flex items-center mx-auto bg-pinklet-500 hover:bg-pinklet-700 text-white rounded-2xl w-[180px] h-[30px]"
                href={`/confirm-appointment?from=home&appointmentWeek=${nextPregnancyWeeks}`}
              >
                <p className="text-center w-full text-sm">Book Appointment</p>
              </Link>
            )}
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
