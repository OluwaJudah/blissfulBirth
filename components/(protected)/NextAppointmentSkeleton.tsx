import Image from "next/image";

const NextAppointmentSkeleton = async () => {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="font-mono font-bold text-turquoise-900 tracking-tight">
        Next Appointment
      </p>
      <div className="shadow-xl relative w-full h-[168px] md:h-[172px] bg-pinklet-100 rounded-2xl px-4 py-5 md:py-4 overflow-hidden">
        <div className="flex flex-col h-full w-4/5 md:gap-2 gap-3">
          <div className="bg-pinklet-200 rounded-full h-[24px] w-[240px] animate-pulse"></div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 items-center">
              <div className="bg-pinklet-200 rounded-full h-[23px] w-[23px] animate-pulse"></div>
              <div className="bg-pinklet-200 rounded-full h-[20px] w-[182px] animate-pulse"></div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="bg-pinklet-200 rounded-full h-[23px] w-[23px] animate-pulse"></div>
              <div className="bg-pinklet-200 rounded-full h-[20px] w-[182px] animate-pulse"></div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="bg-pinklet-200 rounded-full h-[30px] w-[130px] animate-pulse"></div>
          </div>
        </div>
        <div className="absolute -bottom-10 md:-bottom-8 -right-3">
          <Image
            className="mb-4"
            src="/pregnant_woman_1.png"
            height={210}
            width={125}
            alt="Pregnant Woman 1"
          />
        </div>
      </div>
    </div>
  );
};

export default NextAppointmentSkeleton;
