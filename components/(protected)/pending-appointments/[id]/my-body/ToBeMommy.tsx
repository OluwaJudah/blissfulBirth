import { trimesters } from "@/constants/appointment";
import { calculateTrimester, getPregnancyMonth } from "@/utils";
import Image from "next/image";

const ToBeMommy = ({ pregnancyWeeks }: { pregnancyWeeks: number }) => {
  const month = getPregnancyMonth(pregnancyWeeks);
  const trimester = calculateTrimester(pregnancyWeeks);
  const trimesterStr = trimesters[trimester];
  const daysPregnant = pregnancyWeeks * 7;

  return (
    <div className="w-full p-5">
      <div className="h-[270px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-[120px] h-[120px] bg-pinklet-100 rounded-full overflow-hidden">
            <div className="absolute -bottom-2 w-full">
              <Image
                className="mx-auto transform -scale-x-100"
                src="/pregnant_woman_3.svg"
                height={40}
                width={55}
                alt="Mommy Month 2"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="font-mono font-bold text-turquoise-800 text-lg tracking-tight leading-none">
              {month} Month
            </span>
            <p className="font-sans text-turquoise-800 text-base tracking-tight leading-none">
              {daysPregnant} days so far - {trimesterStr} Trimester
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToBeMommy;
