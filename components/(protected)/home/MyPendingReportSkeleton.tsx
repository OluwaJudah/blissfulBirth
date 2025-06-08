import Image from "next/image";

const MyPendingReportSkeleton = () => {
  return (
    <div className="embla__slide__1 h-[210px] md:w-[80px] w-[90px]">
      <div className="relative embla__slide__number shadow-xl gap-4 flex flex-col w-[310px] md:w-[295px] h-[180px] bg-turquoise-100 rounded-2xl pl-2 md:pl-3 py-5 overflow-y-hidden">
        <div className="flex flex-col h-full w-4/6 gap-1">
          <div className="text-center">
            <div className="bg-turquoise-200 rounded-full h-[24px] w-[196px] animate-pulse"></div>
          </div>
          <div className="flex flex-col gap-1 pl-3 md:pl-1 mb-1">
            <div>
              <div className="bg-turquoise-200 rounded-lg h-[24px] w-[140px] animate-pulse"></div>
              <div className="border border-t-turquoise-200 w-1/2"></div>
            </div>
            <div className="bg-turquoise-200 rounded-lg h-[40px] w-[180px] animate-pulse"></div>
          </div>
          <div className="w-full flex justify-center">
            <div className="bg-turquoise-200 rounded-full h-[30px] w-[130px] animate-pulse"></div>
          </div>
        </div>
        <div className="absolute -bottom-6 right-4">
          <Image
            className="mb-4"
            src="/pregnant_woman_3.svg"
            height={165}
            width={80}
            alt="Pregnant Woman 3"
          />
        </div>
      </div>
    </div>
  );
};

export default MyPendingReportSkeleton;
