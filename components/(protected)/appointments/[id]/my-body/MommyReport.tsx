import { getMotherReport } from "@/data/appointment";
import { ChevronDown } from "lucide-react";

const MommyReport = async ({ id }: { id: string }) => {
  const motherReport = await getMotherReport(id);
  if (!motherReport) return null;

  const {
    motherWeight,
    motherUrine,
    motherPalpation,
    motherBloodPressure,
    motherFh,
    motherNote,
  } = motherReport;

  return (
    <div className="flex flex-col px-4 space-y-4">
      <div className="flex space-x-8">
        <div className="basis-1/2 h-[138px] rounded-3xl bg-turquoise-200 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <p className="font-sans text-black text-base tracking-tight leading-none">
              Weight
            </p>
            <span className="font-mono font-bold text-black text-3xl tracking-tight leading-none">
              <span className="mr-2">{motherWeight}</span>kg
            </span>
          </div>
        </div>
        <div className="basis-1/2 h-[138px] rounded-3xl bg-turquoise-200 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <p className="font-sans text-black text-base tracking-tight leading-none">
              Urine
            </p>
            <span className="font-mono font-bold text-black text-3xl tracking-tight leading-none">
              <span className="mr-2">{motherUrine}</span>l
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between p-6 bg-turquoise-200 rounded-3xl">
          <p className="font-sans text-black text-lg tracking-tight leading-none">
            Palpation
          </p>
          <p className="font-mono font-bold text-black text-lg tracking-tight leading-none">
            <span className="mr-1">{motherPalpation}</span>cm
          </p>
        </div>{" "}
        <div className="flex justify-between p-6 bg-turquoise-200 rounded-3xl">
          <p className="font-sans text-black text-lg tracking-tight leading-none">
            Blood Pressure
          </p>
          <p className="font-mono font-bold text-black text-lg tracking-tight leading-none">
            <span className="mr-2">{motherBloodPressure}</span>
          </p>
        </div>{" "}
        <div className="flex justify-between p-6 bg-turquoise-200 rounded-3xl">
          <p className="font-sans text-black text-lg tracking-tight leading-none">
            FH
          </p>
          <p className="font-mono font-bold text-black text-lg tracking-tight leading-none">
            {motherFh}
          </p>
        </div>
        <div className="flex justify-between px-6 py-5 bg-turquoise-200 rounded-3xl items-center">
          <p className="font-sans text-black text-lg tracking-tight leading-none">
            Notes
          </p>
          <ChevronDown size={24} strokeWidth={4} />
        </div>
      </div>
    </div>
  );
};

export default MommyReport;
