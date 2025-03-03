import { services, steps2 } from "@/data";
import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <p className="font-mono font-bold text-turquoise-900">Services</p>
      <div className="flex flex-row justify-between">
        {services.map((service: any) => (
          <div
            key={service.name}
            className="w-[140] h-[140] md:w-[130] md:h-[130] flex items-center justify-center p-3 bg-turquoise-100 rounded-2xl shadow-xl"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-[74px] h-[57px] rounded-3xl overflow-hidden">
                <Image
                  className="mb-4"
                  src={service.img}
                  height={77}
                  width={94}
                  alt={service.name}
                />
              </div>
              <div className="font mono text-sm text-turquoise-900 text-center">
                {service.name}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center gap-4">
        {steps2.map((step) => (
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

export default Services;
