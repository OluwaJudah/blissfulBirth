import { features, steps2 } from "@/data";
import React from "react";

const Features = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <p className="font-mono font-bold text-turquoise-900">Features</p>
      <div className="flex flex-row space-x-10">
        {features.map((feature: any) => (
          <div
            key={feature.name}
            className="basis-1/2 h-[140px] md:h-[130px] flex items-center justify-center p-3 bg-turquoise-100 rounded-2xl shadow-xl"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="flex justify-center items-center w-[60px] h-[60px] bg-turquoise-400 rounded-full overflow-hidden">
                <feature.Icon color="#fff" size={35} />
              </div>
              <div className="font mono text-sm text-turquoise-900 text-center">
                {feature.name}
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

export default Features;
