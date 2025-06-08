import BlockDataSkeleton from "../BlockDataSkeleton";
import FullWidthDataSkeleton from "../FullWidthDataSkeleton";

const BabyReportSkeleton = async () => {
  return (
    <div className="flex flex-col px-4 space-y-4">
      <div className="flex space-x-8">
        <BlockDataSkeleton />
        <BlockDataSkeleton />
      </div>
      <div className="flex flex-col space-y-4">
        <FullWidthDataSkeleton />
        <FullWidthDataSkeleton />
        <FullWidthDataSkeleton />
      </div>
    </div>
  );
};

export default BabyReportSkeleton;
