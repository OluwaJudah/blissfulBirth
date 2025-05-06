import Notes from "../Notes";
import BlockData from "../BlockData";
import FullWidthData from "../FullWidthData";

const BabyReport = () => {
  return (
    <div className="flex flex-col px-4 space-y-4">
      <div className="flex space-x-8">
        <BlockData title="SFH (Height)" data="24 g" />
        <BlockData title="FHR (Heart Rate)" data="120/80" />
      </div>
      <div className="flex flex-col space-y-4">
        <FullWidthData title="Presentation" data="Vertex" />
        <FullWidthData title="Position" data="LOA" />
        <Notes />
      </div>
    </div>
  );
};

export default BabyReport;
