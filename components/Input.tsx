import React from "react";

const Input = ({
  type,
  label,
  placeholder,
  isPhoneNumber,
}: {
  type?: string;
  label: string;
  placeholder?: string;
  isPhoneNumber?: boolean;
}) => {
  return (
    <div className="flex flex-col my-3">
      <label className="font-mono text-turquoise-900" htmlFor="">
        {label}
      </label>

      <div className="flex items-center px-2 rounded-full bg-turquoise-100 overflow-hidden shadow-md">
        {isPhoneNumber && <div>+27</div>}
        <input
          placeholder={placeholder}
          className="w-full border-none focus:ring-transparent bg-turquoise-100 focus:inset-ring-transparent"
          type={type ? type : "text"}
        />
      </div>
    </div>
  );
};

export default Input;
