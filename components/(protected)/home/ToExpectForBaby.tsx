import React from "react";
import Image from "next/image";
import Link from "next/link";

const ToExpectForBaby = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="font-mono font-bold text-turquoise-900 tracking-tight">
        My Baby
      </p>
      <div className="relative shadow-xl w-full h-[190px] bg-turquoise-100 rounded-2xl pr-4 py-6 overflow-hidden">
        <div className="relative">
          <div className="flex flex-col h-full w-4/6 gap-1 float-right">
            <div className="text-center">
              <h2 className="mb-0 mx-auto font-sans font-bold text-turquoise-900 tracking-wide">
                Week 16 - 2nd Trimester
              </h2>
            </div>
            <div className="flex flex-col gap-2 pl-4">
              <div>
                <p className="font-sans font-medium text-turquoise-800 text-sm mb-1">
                  What to Expect
                </p>
                <div className="border border-t-turquoise-200 w-1/2"></div>
              </div>
              <p className="font-sans font-medium text-turquoise-800 text-sm">
                Symptoms to expect for your baby in your 16 weeks
              </p>
            </div>
          </div>
          <div className="absolute -top-5 -left-6">
            <Image
              className="mb-4"
              src="/baby_1.svg"
              height={210}
              width={155}
              alt="Baby 1"
            />
          </div>
        </div>
        <div className="absolute bottom-0 w-full pb-5">
          <Link
            className="flex mx-auto items-center bg-turquoise-700 hover:bg-turquoise-700 text-white rounded-2xl w-[130px] h-[30px]"
            href="/appointments/12/my-baby?from=home"
          >
            <p className="text-center w-full text-sm">Read More</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToExpectForBaby;
