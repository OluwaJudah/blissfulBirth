"use client";
import { logout } from "@/actions/auth";
import { ArrowLeft, ChevronRight, LogInIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";

export const SubmitButton = ({
  name,
  isPending,
}: {
  name: string;
  isPending?: boolean;
}) => {
  return (
    <button
      type="submit"
      className={`${
        isPending ? "bg-gray-300" : "bg-turquoise-500 hover:bg-turquoise-700"
      } text-white rounded-full w-[148px] h-[33px]`}
    >
      {name}
    </button>
  );
};

export const LoginButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/schedules/8")}
      className="bg-turquoise-500 hover:bg-turquoise-700 text-white rounded-full w-[148px] h-[33px]"
    >
      Sign In
    </button>
  );
};

export const NextButton = ({ url, name }: { url: string; name?: string }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(url)}
      className="bg-turquoise-500 hover:bg-turquoise-700 text-white rounded-full w-[148px] h-[33px]"
    >
      {name ? name : "Next"}
    </button>
  );
};

export const BookButton = ({ url }: { url: string }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(url)}
      className="bg-pinklet-500 w-full hover:bg-pinklet-700 text-white rounded-full h-[35px]"
    >
      Book
    </button>
  );
};

export const BackButtonWrapper = ({
  url,
  children,
}: {
  url?: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        if (url) router.push(url);
        else router.back();
      }}
      className={`flex justify-center items-center bg-turquoise-200 w-[65px] h-[40px] rounded-full`}
    >
      {children}
    </button>
  );
};

export const MedicalHistoryButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/book-appointment?type=book")}
      className="bg-turquoise-500 hover:bg-turquoise-700 text-white rounded-full w-[148px] h-[33px]"
    >
      Submit
    </button>
  );
};

export const SkipButton = ({ url }: { url: string }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(url)}
      className="bg-pinklet-100 hover:bg-pinklet-200 shadow-md hover:bg-white text-turquoise-950 rounded-3xl px-4 h-[35px]"
    >
      Skip
    </button>
  );
};

export const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="bg-pinklet-100 hover:bg-pinklet-200 text-turquoise-950 shadow-md rounded-full w-[110px] h-[33px]"
    >
      Back
    </button>
  );
};

export const BackArrowButton = () => {
  const router = useRouter();
  return (
    <ArrowLeft
      className="text-pinklet-500"
      size={23}
      strokeWidth={3}
      onClick={() => router.back()}
    />
  );
};

export const BackArrowUrlButton = ({ url }: { url: string }) => {
  const router = useRouter();
  return (
    <ArrowLeft
      className="text-pinklet-500"
      size={22}
      strokeWidth={3}
      onClick={() => router.push(url)}
    />
  );
};

export const ConditionButton = ({
  name,
  addToCancelList,
}: {
  name: string;
  addToCancelList: () => void;
}) => {
  return (
    <button
      onClick={addToCancelList}
      className="bg-pinklet-50 shadow-md hover:bg-pinklet-500 hover:text-white text-turquoise-900 rounded-full px-4 h-[33px]"
    >
      {name}
    </button>
  );
};

export const ConditionCancelButton = ({
  name,
  addToList,
}: {
  name: string;
  addToList: () => void;
}) => {
  return (
    <button
      onClick={addToList}
      className="flex flex-row gap-2 items-center bg-pinklet-500 shadow-md hover:bg-pinklet-600 text-white rounded-full px-3 h-[33px]"
    >
      <span>{name}</span>
      <X className="text-torquoise-900" size={23} strokeWidth={2} />
    </button>
  );
};

type Item = { name: string; url: string; Icon: any; bgColor: string };

export const LogOutButton = ({ item }: { item: Item }) => {
  return (
    <div onClick={logout} className="w-full flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div
          className={`flex justify-center items-center bg-${item.bgColor}-100 w-[40px] h-[40px] rounded-full`}
        >
          <LogInIcon size={23} />
        </div>
        <p>{item.name}</p>
      </div>
      <div>
        <ChevronRight />
      </div>
    </div>
  );
};

export const DateSlotButton = ({
  date,
  time,
  setSelectedSlot,
  setError,
}: {
  date: string;
  time: string;
  setSelectedSlot: (date: string) => void;
  setError: (error: string) => void;
}) => (
  <button
    onClick={() => {
      setSelectedSlot(date);
      setError("");
    }}
    className={`bg-pinklet-50 md:focus:bg-pinklet-500 md:focus:text-white hover:bg-pinklet-500 hover:text-white text-turquoise-900 rounded-full px-5 h-[35px]`}
  >
    <span className="md:text-sm">
      {date} {time}
    </span>
  </button>
);

export const NextAppointmentButton = ({
  id,
  from,
  nextPregnancyWeeks,
  isCofirmed,
}: {
  id: string;
  from?: string;
  nextPregnancyWeeks: number;
  isCofirmed: boolean;
}) => {
  return isCofirmed ? (
    <Link
      className="flex items-center mx-auto bg-pinklet-500 hover:bg-pinklet-700 text-white rounded-2xl w-[140px] h-[30px]"
      href={`/confirmed-booking?bookingId=${id}${from ? `&from=${from}` : ""}`}
    >
      <p className="text-center w-full text-sm">View Details</p>
    </Link>
  ) : (
    <Link
      className="flex items-center mx-auto bg-pinklet-500 hover:bg-pinklet-700 text-white rounded-2xl w-[180px] h-[30px]"
      href={`/confirm-appointment?appointmentWeek=${nextPregnancyWeeks}${
        from ? `&from=${from}` : ""
      }`}
    >
      <p className="text-center w-full text-sm">Book Appointment</p>
    </Link>
  );
};
