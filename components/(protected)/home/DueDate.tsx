import { getMotherInfoData } from "@/data/mother-info";
import Image from "next/image";

const DueDate = async () => {
  const motherInfo = await getMotherInfoData("edd");
  const edd = motherInfo && motherInfo.edd ? motherInfo.edd : "";

  return (
    <div className="w-full border border-turquoise-500 rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/baby-carriage.png"
            height={22}
            width={22}
            alt="calendar"
          />
          <p className="font-sans text-xl text-turquoise-300 tracking-tight">
            Due date:
          </p>
        </div>
        {edd ? (
          <span className="font-mono font-bold text-2xl md:text-xl text-turquoise-900 tracking-tight">
            {edd}
          </span>
        ) : (
          <span className="font-mono text-xl text-turquoise-600 tracking-tight">
            Not Available
          </span>
        )}
      </div>
    </div>
  );
};

export default DueDate;
