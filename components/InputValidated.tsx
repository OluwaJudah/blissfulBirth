import React from "react";
import { UseFormRegister } from "react-hook-form";
import Image from "next/image";

const Input = ({
  type,
  label,
  name,
  placeholder,
  isPhoneNumber,
  register,
  iconUrl,
  errors,
  stateError,
  bgColour,
  isPending,
  isRequired,
}: {
  type?: string;
  label: string;
  name: string;
  placeholder?: string;
  isPhoneNumber?: boolean;
  register: UseFormRegister<any>;
  iconUrl?: string;
  errors?: any;
  stateError?: any;
  bgColour: string;
  isPending?: boolean;
  isRequired?: boolean;
}) => {
  const disabledBgColour = "bg-gray-100";
  return (
    <div className="flex flex-col my-3">
      <div className="flex gap-1">
        <label className="font-mono text-turquoise-900" htmlFor="">
          {label}
        </label>
        {isRequired && <p className="font-mono text-pinklet-500">*</p>}
      </div>

      <div
        className={`flex items-center px-2 rounded-full ${
          isPending ? disabledBgColour : bgColour
        } overflow-hidden shadow-md`}
      >
        {iconUrl && (
          <Image
            className=""
            src={iconUrl}
            height={23}
            width={23}
            alt={label}
          />
        )}

        {isPhoneNumber && <div>+27</div>}

        <input
          placeholder={placeholder}
          className={`w-full border-none focus:ring-transparent ${
            isPending ? disabledBgColour : bgColour
          } focus:inset-ring-transparent`}
          type={type ? type : "text"}
          disabled={isPending}
          {...register(name)}
        />
      </div>
      {errors && errors[name] && (
        <span className="text-pinklet-500">{errors[name]?.message}</span>
      )}
      {stateError && (
        <span className="text-pinklet-500">{stateError[name]}</span>
      )}
    </div>
  );
};

export default Input;
