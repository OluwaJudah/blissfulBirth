"use client";

import { ArrowLeft, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export const RegisterButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/register?type=welcome")}
      className="bg-turquoise-500 hover:bg-turquoise-700 text-white rounded-full w-[148px] h-[33px]"
    >
      Sign Up
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

export const NextButton = ({ url }: { url: string }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(url)}
      className="bg-turquoise-500 hover:bg-turquoise-700 text-white rounded-full w-[148px] h-[33px]"
    >
      Next
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
      className="border border-pinklet-500 hover:bg-white text-turquoise-900 rounded-full w-[70px] h-[30px]"
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
      className="border border-pinklet-500 hover:bg-pinklet-300 text-turquoise-900 rounded-full w-[110px] h-[33px]"
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
      size={23}
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
      className="border border-pinklet-500 hover:bg-pinklet-500 hover:text-white text-turquoise-900 rounded-full px-4 h-[33px]"
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
      className="flex flex-row gap-2 items-center bg-pinklet-500 hover:bg-pinklet-600 text-white rounded-full px-3 h-[33px]"
    >
      <span>{name}</span>
      <X className="text-torquoise-900" size={23} strokeWidth={2} />
    </button>
  );
};
