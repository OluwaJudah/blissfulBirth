import { getBloodResult } from "@/data/mother-info";
import BlockData from "./BlockData";
import FullWidthData from "./FullWidthData";
import Notes from "./Notes";

const BloodResult = async () => {
  const bloodResult = await getBloodResult(
    "date bloodGroup glucose hb hiv hepatitis notes rpr rubella"
  );

  if (!bloodResult) return <></>;
  
  const { date, bloodGroup, glucose, hb, hiv, hepatitis, notes, rpr, rubella } =
    bloodResult;
  const newDate = new Date(date);
  const dateStr = newDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return (
    <>
      <div className="flex flex-col gap-[35px] mt-4 px-3 ">
        <div className="bg-turquoise-100 rounded-3xl h-full py-8">
          <div className="flex flex-col px-4 space-y-4">
            <div className="flex space-x-8">
              <BlockData title="Glucose (mmol/l)" data={glucose} />
              <BlockData title="Hb (g/dl)" data={hb} />
            </div>
            <div className="flex flex-col space-y-4">
              <FullWidthData title="Date" data={dateStr} />
              <FullWidthData title="RPR" data={rpr} />
              <FullWidthData title="Blood Group" data={bloodGroup} />
              <FullWidthData title="Hepatits" data={hepatitis} />
              <FullWidthData title="Rubella" data={rubella} />
              <FullWidthData title="HIV" data={hiv} />
              <Notes note={notes} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BloodResult;
