"use client";

import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import DatePickerInput from "./date-picker-input"; // ✅ Import correctly

const Input = ({
  type,
  label,
  name,
  placeholder,
  isPhoneNumber,
  isPassword,
  register,
  control,
  iconUrl,
  errors,
  stateError,
  bgColour,
  isPending,
  isRequired,
  min,
  max,
}: {
  type?: string;
  label: string;
  name: string;
  placeholder?: string;
  isPhoneNumber?: boolean;
  isPassword?: boolean;
  register: UseFormRegister<any>;
  control?: any; // <-- required for react-hook-form Controller
  iconUrl?: string;
  errors?: any;
  stateError?: any;
  bgColour: string;
  isPending?: boolean;
  isRequired?: boolean;
  min?: string;
  max?: string;
}) => {
  const disabledBgColour = "bg-gray-100";
  const [isShow, setIsShow] = useState(false);
  const [typeName, setTypeName] = useState(type);

  return (
    <div className="flex flex-col my-3">
      <div className="flex gap-1">
        <label className="font-mono text-turquoise-900" htmlFor={name}>
          {label}
        </label>
        {isRequired && <p className="font-mono text-pinklet-500">*</p>}
      </div>

      <div
        className={`flex items-center px-2 rounded-full ${
          isPending ? disabledBgColour : bgColour
        } overflow-hidden shadow-md`}
      >
        {iconUrl && <Image src={iconUrl} height={23} width={23} alt={label} />}

        {isPhoneNumber && <div className="text-black">+27</div>}

        {/* ✅ Use DatePickerInput directly */}
        {type === "date" ? (
          <DatePickerInput
            control={control}
            name={name}
            placeholder={placeholder}
            min={min ? new Date(min) : undefined}
            max={max ? new Date(max) : undefined}
            error={errors?.[name]?.message || stateError?.[name]}
            isRequired={isRequired}
          />
        ) : (
          <input
            placeholder={placeholder}
            className={`w-full border-none focus:ring-0 text-black ${
              isPending ? disabledBgColour : bgColour
            }`}
            type={typeName ? typeName : "text"}
            disabled={isPending}
            {...register(name)}
            min={min}
            max={max}
          />
        )}

        {isPassword &&
          (isShow ? (
            <EyeOff
              className="text-black cursor-pointer"
              onClick={() => {
                setIsShow(false);
                setTypeName("password");
              }}
            />
          ) : (
            <Eye
              className="text-black cursor-pointer"
              onClick={() => {
                setIsShow(true);
                setTypeName("text");
              }}
            />
          ))}
      </div>

      {errors && errors[name] && (
        <span className="text-red-500">{errors[name]?.message}</span>
      )}
      {stateError && <span className="text-red-500">{stateError[name]}</span>}
    </div>
  );
};

export default Input;
