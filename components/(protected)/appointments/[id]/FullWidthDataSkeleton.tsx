const FullWidthDataSkeleton = () => {
  return (
    <div className="flex justify-between p-6 bg-turquoise-200 rounded-3xl">
      <div className="bg-turquoise-300 rounded-full h-[18px] w-[123px] animate-pulse"></div>
      <div className="bg-turquoise-300 rounded-full h-[18px] w-[62px] animate-pulse"></div>
    </div>
  );
};

export default FullWidthDataSkeleton;
