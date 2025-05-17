import { getBabyReport } from "@/data/appointment";
import Notes from "../Notes";
import BlockData from "../BlockData";
import FullWidthData from "../FullWidthData";

const BabyReport = async ({ id }: { id: string }) => {
  const babyReport = await getBabyReport(id);
  if (!babyReport) return null;

  const { babyHeight, babyPosition, babyHeartRate, babyNote } = babyReport;

  return (
    <div className="flex flex-col px-4 space-y-4">
      <div className="flex space-x-8">
        <BlockData
          title="SFH (Height)"
          data={babyHeight + ""}
          measurement="cm"
        />
        <BlockData
          title="FHR (Heart Rate)"
          data={babyHeartRate + ""}
          measurement="bpm"
        />
      </div>
      <div className="flex flex-col space-y-4">
        <FullWidthData title="Presentation" data="Vertex" />
        <FullWidthData title="Position" data={babyPosition} />
        <Notes note={babyNote} />
      </div>
    </div>
  );
};

export default BabyReport;
