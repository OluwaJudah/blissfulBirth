import Image from "next/image";
import Link from "next/link";
import { calculateTrimester } from "@/utils";
import { trimesters } from "@/constants/appointment";
import { getMotherReport } from "@/data/appointment";

const MyReport = async ({
  appointmentId,
  pregnancyWeeks,
}: {
  appointmentId: string;
  pregnancyWeeks: number;
}) => {
  const trimester = calculateTrimester(pregnancyWeeks);
  const trimesterStr = trimesters[trimester];
  const motherReport = await getMotherReport(appointmentId);
  if (!motherReport) return null;

  const { motherBloodPressure, motherWeight } = motherReport;

  return (
    <div className="embla__slide__1 h-[210px] md:w-[80px] w-[90px]">
      <div className="relative embla__slide__number shadow-xl gap-4 flex flex-col w-[310px] md:w-[295px] h-[180px] bg-turquoise-100 rounded-2xl pl-2 md:pl-4 py-5 overflow-y-hidden">
        <div className="flex flex-col h-full w-4/6 gap-3">
          <div className="text-center">
            <h2 className="mb-0 font-sans font-bold text-turquoise-900">
              Week {pregnancyWeeks} - {trimesterStr} Trimester
            </h2>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-1 items-center">
              <p className="font-sans font-medium text-turquoise-600 text-base">
                Blood Pressure
              </p>
              <span className="font-mono font-bold text-black text-2xl tracking-tight">
                {motherBloodPressure}
              </span>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <p className="font-sans font-medium text-turquoise-600 text-base">
                Weight
              </p>
              <span className="font-mono font-bold text-black text-2xl tracking-tight">
                {motherWeight}kg
              </span>
            </div>
          </div>
          <div className="w-full">
            <Link
              className="flex items-center mx-auto bg-turquoise-700 hover:bg-turquoise-700 text-white rounded-2xl w-[140px] h-[30px]"
              href={`/appointments/${appointmentId}/my-body?pregnancyWeeks=${pregnancyWeeks}&from=home`}
            >
              <p className="text-center w-full text-sm">View Report</p>
            </Link>
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

export default MyReport;
