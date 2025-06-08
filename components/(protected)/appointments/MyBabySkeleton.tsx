import BabyPendingReportSkeleton from "./BabyPendingReportSkeleton";

const MyBaby = async () => {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="font-mono font-bold text-turquoise-900">My Appointments</p>
      <div className="">
        <div className="w-full mb-3 flex gap-3 flex-column">
          <div className="bg-turquoise-200 rounded-full w-8 h-8 animate-pulse"></div>
          <div className="bg-turquoise-200 rounded-full w-8 h-8 animate-pulse"></div>
          <div className="bg-turquoise-200 rounded-full w-8 h-8 animate-pulse"></div>
          <div className="bg-turquoise-200 rounded-full w-8 h-8 animate-pulse"></div>
          <div className="bg-turquoise-200 rounded-full w-8 h-8 animate-pulse"></div>
          <div className="bg-turquoise-200 rounded-full w-8 h-8 animate-pulse"></div>
          <div className="bg-turquoise-200 rounded-full w-8 h-8 animate-pulse"></div>
          <div className="bg-turquoise-200 rounded-full w-8 h-8 animate-pulse"></div>
        </div>
        <BabyPendingReportSkeleton />
      </div>
    </div>
  );
};

export default MyBaby;
