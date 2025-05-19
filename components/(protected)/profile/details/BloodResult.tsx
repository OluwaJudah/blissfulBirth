import { getBloodResult } from "@/data/mother-info";
import BlockData from "./BlockData";
import FullWidthData from "./FullWidthData";
import Notes from "./Notes";
import { defaultBloodResultData } from "@/constants/mother-info";

const BloodResult = async () => {
  let bloodResult = defaultBloodResultData;
  const data = await getBloodResult(
    "date bloodGroup glucose hb hiv hepatitis notes rpr rubella"
  );

  if (data) bloodResult = data;

  const { date, bloodGroup, glucose, hb, hiv, hepatitis, notes, rpr, rubella } =
    bloodResult;
  let dateStr = "Not Available";
  if (date) {
    const newDate = new Date(date);
    dateStr = newDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  const notAvailable = "Not Available";
  return (
    <>
      <div className="flex flex-col gap-[35px] mt-4 px-3 ">
        <div className="bg-turquoise-100 rounded-3xl h-full py-8">
          <div className="flex flex-col px-4 space-y-4">
            <div className="flex space-x-8">
              <BlockData title="Glucose (mmol/l)" data={glucose + ""} />
              <BlockData title="Hb (g/dl)" data={hb + ""} />
            </div>
            <div className="flex flex-col space-y-4">
              <FullWidthData title="Date" data={dateStr || notAvailable} />
              <FullWidthData title="RPR" data={rpr || notAvailable} />
              <FullWidthData
                title="Blood Group"
                data={bloodGroup || notAvailable}
              />
              <FullWidthData
                title="Hepatits"
                data={hepatitis || notAvailable}
              />
              <FullWidthData title="Rubella" data={rubella || notAvailable} />
              <FullWidthData title="HIV" data={hiv || notAvailable} />
              <Notes note={notes} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BloodResult;
