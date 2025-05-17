import BlockData from "../BlockData";
import FullWidthData from "../FullWidthData";
import Notes from "../Notes";
import { getMotherReport } from "@/data/appointment";

const MommyReport = async ({ id }: { id: string }) => {
  const motherReport = await getMotherReport(id);
  if (!motherReport) return null;

  const {
    motherBloodPressure,
    motherFh,
    motherGlucose,
    motherLeucosite,
    motherNote,
    motherPalpation,
    motherProtein,
    motherPulse,
    motherWeight,
  } = motherReport;

  return (
    <div className="flex flex-col px-4 space-y-4">
      <div className="flex space-x-8">
        <BlockData title="Weight" data={motherWeight + ""} measurement="kg" />
        <BlockData title="Pulse" data={motherPulse + ""} measurement="bpm" />
      </div>
      <div className="flex flex-col space-y-4">
        <FullWidthData title="Blood Pressurre" data={motherBloodPressure} />
        <div className="flex flex-col gap-3 p-6 bg-turquoise-200 rounded-3xl">
          <div className="font-sans font-bold text-black text-lg tracking-tight leading-none">
            Urine
          </div>
          <div className="flex justify-between">
            <p className="font-sans text-black text-lg tracking-tight leading-none">
              Leucosite (L)
            </p>
            <p className="font-mono font-bold text-black text-lg tracking-tight leading-none">
              {motherLeucosite}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="font-sans text-black text-lg tracking-tight leading-none">
              Protein (P)
            </p>
            <p className="font-mono font-bold text-black text-lg tracking-tight leading-none">
              {motherProtein}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="font-sans text-black text-lg tracking-tight leading-none">
              Glucose (G)
            </p>
            <p className="font-mono font-bold text-black text-lg tracking-tight leading-none">
              {motherGlucose}
            </p>
          </div>
        </div>
        <FullWidthData title="Palpation" data={motherPalpation + " cm"} />
        <FullWidthData title="FH" data={motherFh + ""} />
        <Notes note={motherNote} />
      </div>
    </div>
  );
};

export default MommyReport;
