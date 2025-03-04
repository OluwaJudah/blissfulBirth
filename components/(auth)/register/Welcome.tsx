import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Welcome = () => {
  return (
    <div className="flex h-screen items-center ">
      <main className="relative md:rounded-3xl md:shadow-2xl bg-turquoise-50 h-full md:h-[850px] border md:border-gray-400/2 w-[400px] md:w-[370px] mx-auto md:p-6 md:overflow-scroll">
        <div className="flex py-[45px] flex-col items-center justify-center">
          {" "}
          <Image
            className="mb-4"
            src="/blissfulLogo.svg"
            height={230}
            width={145}
            alt="BlissfulLogo"
          />
          <Image
            className="mb-4"
            src="/welcomeBanner.png"
            height={160}
            width={275}
            alt="BlissfulLogo"
          />
        </div>
        <Link
          style={{ zIndex: 999 }}
          className="z-2 absolute bottom-14 left-28 flex items-center justify-center gap-1 bg-turquoise-800 hover:bg-turquoise-700 text-white rounded-2xl w-[158px] h-[43px]"
          href="/register?type=mother-info"
        >
          <p className="text-center">Next</p>
          <ChevronRight color="#fff" />
        </Link>
        <div className="absolute left-0 bottom-0 w-full">
          <div className="relative">
            <Image
              className="absolute bottom-20 left-[45px]"
              src="/pregnant_woman_bg.svg"
              height={185}
              width={300}
              alt="BlissfulLogo"
            />
            <Image
              className=""
              src="/Intersection.svg"
              height={1060}
              width={1175}
              alt="BlissfulLogo"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Welcome;
