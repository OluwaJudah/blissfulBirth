import { getMotherInfoData } from "@/data/mother-info";
import Image from "next/image";

const DueDate = async () => {
  const motherInfo = await getMotherInfoData("edd");
  const edd = motherInfo && motherInfo.edd ? motherInfo.edd : "";

  let eddStr = "N/A";
  if (edd) {
    const date = new Date(edd);
    eddStr = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

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
        <span className="font-mono font-bold text-2xl md:text-xl text-turquoise-900 tracking-tight">
          {eddStr}
        </span>
      </div>
    </div>
  );
};

export default DueDate;
