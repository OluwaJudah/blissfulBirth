import BlockData from "./BlockData";
import FullWidthData from "./FullWidthData";
import Notes from "./Notes";

const BloodResult = () => {
  return (
    <>
      <div className="flex flex-col gap-[35px] mt-4 px-3 ">
        <div className="bg-turquoise-100 rounded-3xl h-full py-8">
          <div className="flex flex-col px-4 space-y-4">
            <div className="flex space-x-8">
              <BlockData title="Glucose (mmol/l)" data="4.7" />
              <BlockData title="Hb (g/dl)" data="12.2" />
            </div>
            <div className="flex flex-col space-y-4">
              <FullWidthData title="Date" data="09 Oct 2025" />
              <FullWidthData title="RPR" data="Negative" />
              <FullWidthData title="Blood Group" data="Negative" />
              <FullWidthData title="Hepatits" data="Negative" />
              <FullWidthData title="Rubella" data="Negative" />
              <FullWidthData title="HIV" data="Negative" />
              <Notes />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BloodResult;
