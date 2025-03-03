import React from "react";
import Image from "next/image";
import { steps } from "@/data";

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="font-mono font-bold text-turquoise-900">Testimonials</p>
      <div className="flex flex-row gap-10 ">
        <div className="shadow-xl flex flex-col justify-between w-[330px] md:w-[310px] h-[180px] bg-turquoise-100 rounded-2xl p-5 overflow-hidden">
          <div className="flex items-center gap-2">
            {" "}
            <div className="flex justify-center items-center bg-turquoise-100 w-[30px] h-[30px] rounded-full">
              <Image
                className=""
                src="/user_1.svg"
                height={25}
                width={25}
                alt="User 1"
              />
            </div>
            <p className="font-mono font-bold text-turquoise-900 text-medium">
              John Doe
            </p>
          </div>
          <p className="font-sans font-medium text-turquoise-900 text-sm overflow-hidden">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer...
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-4">
        {steps.map((step) => (
          <div
            key={step}
            className={`w-3 h-3 ${
              step === 1 ? "bg-pinklet-400" : "border border-pinklet-400"
            }  rounded-full`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
