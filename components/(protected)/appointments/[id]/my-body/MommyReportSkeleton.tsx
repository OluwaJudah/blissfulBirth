import BlockDataSkeleton from "../BlockDataSkeleton";
import FullWidthDataSkeleton from "../FullWidthDataSkeleton";

const MommyReportSkeleton = async () => {
  return (
    <div className="flex flex-col px-4 space-y-4">
      <div className="flex space-x-8">
        <BlockDataSkeleton />
        <BlockDataSkeleton />
      </div>
      <div className="flex flex-col space-y-4">
        <FullWidthDataSkeleton />
        <div className="flex flex-col gap-3 p-6 bg-turquoise-200 rounded-3xl">
          <div className="bg-turquoise-300 rounded-full h-[18px] w-[70px] animate-pulse"></div>
          <div className="flex justify-between">
            <div className="bg-turquoise-300 rounded-full h-[18px] w-[123px] animate-pulse"></div>
            <div className="bg-turquoise-300 rounded-full h-[18px] w-[62px] animate-pulse"></div>
          </div>
          <div className="flex justify-between">
            <div className="bg-turquoise-300 rounded-full h-[18px] w-[123px] animate-pulse"></div>
            <div className="bg-turquoise-300 rounded-full h-[18px] w-[62px] animate-pulse"></div>
          </div>
          <div className="flex justify-between">
            <div className="bg-turquoise-300 rounded-full h-[18px] w-[123px] animate-pulse"></div>
            <div className="bg-turquoise-300 rounded-full h-[18px] w-[62px] animate-pulse"></div>
          </div>
        </div>
        <FullWidthDataSkeleton />
      </div>
    </div>
  );
};

export default MommyReportSkeleton;
