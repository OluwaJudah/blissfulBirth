import { getBabyReport } from "@/data/appointment";
import Notes from "../Notes";
import BlockData from "../BlockData";
import FullWidthData from "../FullWidthData";

const BabyReport = async ({ id }: { id: string }) => {
  const babyReport = await getBabyReport(id);
  if (!babyReport) return null;

  const {
    babyHeight,
    babyPosition,
    babyPresentation,
    babyHeartRate,
    babyNote,
  } = babyReport;

  return (
    <div className="flex flex-col px-4 space-y-4">
      <div className="flex space-x-8">
        <BlockData title="Height (cm)" data={`${babyHeight || "N/A"}` + ""} />
        <BlockData
          title="Heart Rate (bpm)"
          data={`${babyHeartRate || "N/A"}` + ""}
        />
      </div>
      <div className="flex flex-col space-y-4">
        <FullWidthData title="Presentation" data={babyPresentation || "N/A"} />
        <FullWidthData title="Position" data={babyPosition || "N/A"} />
        <Notes note={babyNote} />
      </div>
    </div>
  );
};

export default BabyReport;
