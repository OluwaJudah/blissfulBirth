import React from "react";
import Image from "next/image";
import Link from "next/link";

const NextAppointment = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="font-mono font-bold text-turquoise-900 tracking-tight">Next Appointment</p>
      <div className="shadow-xl relative w-full h-[180px] bg-pinklet-100 rounded-2xl px-4 py-5 overflow-hidden">
        <div className="flex flex-col h-full w-4/5 gap-4">
          <h2 className="pb-2 font-sans font-bold text-turquoise-900 tracking-wide border-b border-turquoise-700">
            Week 16 - 2nd Trimester
          </h2>
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 items-center">
              <Image
                src="/calendar.svg"
                height={23}
                width={23}
                alt="calendar"
              />
              <p className="font-sans text-black text-sm">16, Jan - 9:00 am</p>
            </div>
            <div className="flex gap-3 items-center">
              <Image src="/pin.svg" height={23} width={23} alt="pin" />
              <p className="font-sans font-medium text-black text-sm">
                200 Sanders Creek Rd, Joha...
              </p>
            </div>
          </div>
          <div className="w-full -mt-1">
            <Link
              className="flex items-center mx-auto bg-pinklet-500 hover:bg-pinklet-700 text-white rounded-2xl w-[140px] h-[30px]"
              href="/book-appointment?from=home"
            >
              <p className="text-center w-full text-sm">More Details</p>
            </Link>
          </div>
        </div>
        <div className="absolute -bottom-7 -right-6">
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
