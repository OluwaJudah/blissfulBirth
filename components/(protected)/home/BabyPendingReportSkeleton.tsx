import Image from "next/image";

const BabyPendingReportSkeleton = () => {
  return (
    <div className="embla__slide__1 h-[210px] md:w-[80px] w-[90px]">
      <div className="relative embla__slide__number shadow-xl flex flex-col w-[310px] md:w-[295px] h-[180px] bg-turquoise-100 rounded-2xl pr-4 py-6 overflow-y-hidden">
        <div className="relative">
          <div className="flex flex-col h-full w-4/6 gap-1 float-right">
            <div className="text-center">
              <div className="bg-turquoise-200 rounded-full h-[24px] w-[196px] animate-pulse"></div>
            </div>
            <div className="flex flex-col md:gap-0 md:pl-3 gap-1 pl-4">
              <div>
                <div className="bg-turquoise-200 rounded-lg h-[24px] w-[140px] animate-pulse"></div>
                <div className="border border-t-turquoise-200 w-1/2"></div>
              </div>
              <div className="bg-turquoise-200 rounded-lg h-[40px] w-[180px] animate-pulse"></div>
            </div>
          </div>
          <div className="absolute -top-5 -left-6 md:-top-3 ">
            <Image
              className="mb-4 w-[140px]"
              src="/baby_1.svg"
              height={210}
              width={155}
              alt="Baby 1"
            />
          </div>
        </div>
        <div className="absolute -bottom-1 w-full flex justify-center pb-5">
          <div className="bg-turquoise-200 rounded-full h-[30px] w-[130px] animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default BabyPendingReportSkeleton;
