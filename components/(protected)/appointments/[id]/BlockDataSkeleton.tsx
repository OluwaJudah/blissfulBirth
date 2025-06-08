const BlockDataSkeleton = () => {
  return (
    <div className="basis-1/2 h-[138px] rounded-3xl bg-turquoise-200 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="bg-turquoise-300 rounded-full h-[16px] w-[77px] animate-pulse"></div>
        <div className="bg-turquoise-300 rounded-full h-[30px] w-[35px] animate-pulse"></div>
      </div>
    </div>
  );
};

export default BlockDataSkeleton;
