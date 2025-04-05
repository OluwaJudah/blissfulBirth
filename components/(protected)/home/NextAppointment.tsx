import React from "react";
import Image from "next/image";
import Link from "next/link";
import { calculateTrimester } from "@/utils";
import { trimesters } from "@/constants/user";

const NextAppointment = ({
  appointmentDate,
  pregnancyWeeks,
}: {
  appointmentDate: string;
  pregnancyWeeks: number;
}) => {
  const trimester = calculateTrimester(pregnancyWeeks);
  const trimesterStr = trimesters[trimester];

  return (
    <div className="flex flex-col gap-y-4">
      <p className="font-mono font-bold text-turquoise-900 tracking-tight">
        Next Appointment
      </p>
      <div className="shadow-xl relative w-full h-[168px] md:h-[172px] bg-pinklet-100 rounded-2xl px-4 py-5 md:py-4 overflow-hidden">
        <div className="flex flex-col h-full w-4/5 md:gap-2 gap-3">
          <h2 className=" font-sans font-bold text-turquoise-900 tracking-wide">
            Week {pregnancyWeeks} - {trimesterStr} Trimester
          </h2>
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 items-center">
              <Image
                src="/calendar.svg"
                height={23}
                width={23}
                alt="calendar"
              />
              <p className="font-sans text-black text-sm">{appointmentDate}</p>
            </div>
            <div className="flex gap-3 items-center">
              <Image src="/pin.svg" height={23} width={23} alt="pin" />
              <p className="font-sans font-medium text-black text-sm">
                200 Sanders Creek Rd, Joha...
              </p>
            </div>
          </div>
          <div className="w-full">
            <Link
              className="flex items-center mx-auto bg-pinklet-500 hover:bg-pinklet-700 text-white rounded-2xl w-[140px] h-[30px]"
              href="/book-appointment?from=home"
            >
              <p className="text-center w-full text-sm">More Details</p>
            </Link>
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
