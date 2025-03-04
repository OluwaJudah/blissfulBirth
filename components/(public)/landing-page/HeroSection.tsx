import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="shadow-xl relative w-full h-[180px] bg-pinklet-300 rounded-2xl p-5 overflow-hidden">
      <div className="flex flex-col justify-between h-full w-5/6">
        <p className="font-mono font-bold text-white text-lg">
          Experience Pregnancy Care Blissfully
        </p>
        <p className="font-sans font-medium text-white text-sm">
          Pregnancy, Birth & Beyond
        </p>
        <Link
          className="flex items-center bg-pinklet-500 hover:bg-pinklet-700 text-white rounded-full w-[120px] h-[33px]"
          href="/register"
        >
          <p className="text-center w-full">Get Started</p>
        </Link>
      </div>
      <div className="absolute -top-2 -right-5">
        {" "}
        <Image
          className="mb-4"
          src="/pregnant_woman_2.png"
          height={230}
          width={145}
          alt="Pregnant Woman 2"
        />
      </div>
    </div>
  );
};

export default HeroSection;
