import BlockData from "../BlockData";
import FullWidthData from "../FullWidthData";
import Notes from "../Notes";
import { getMotherReport } from "@/data/appointment";

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
        <BlockData title="Weight" data={motherWeight + " kg"} />
        <BlockData title="Pulse" data="73 bpm" />
      </div>
      <div className="flex flex-col space-y-4">
        <FullWidthData title="Blood Pressurre" data="120/80" />
        <div className="flex flex-col gap-3 p-6 bg-turquoise-200 rounded-3xl">
          <div className="font-sans font-bold text-black text-lg tracking-tight leading-none">
            Urine
          </div>
          <div className="flex justify-between">
            <p className="font-sans text-black text-lg tracking-tight leading-none">
              Leucosite (L)
            </p>
            <p className="font-mono font-bold text-black text-lg tracking-tight leading-none">
              Clear
            </p>
          </div>
          <div className="flex justify-between">
            <p className="font-sans text-black text-lg tracking-tight leading-none">
              Protein (P)
            </p>
            <p className="font-mono font-bold text-black text-lg tracking-tight leading-none">
              Trace
            </p>
          </div>
          <div className="flex justify-between">
            <p className="font-sans text-black text-lg tracking-tight leading-none">
              Glucose (G)
            </p>
            <p className="font-mono font-bold text-black text-lg tracking-tight leading-none">
              +1
            </p>
          </div>
        </div>
        <FullWidthData title="Palpation" data={motherPalpation + " cm"} />
        <FullWidthData title="FH" data={motherFh + ""} />
        <Notes />
      </div>
    </div>
  );
};

export default MommyReport;
