const TimeSlotSkeleton = () => {
  return (
    <>
      <div className="flex flex-col px-7 ">
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center bg-turquoise-200 w-[40px] h-[40px] rounded-full">
            <div className="bg-turquoise-200 rounded-full h-[40px] w-[40px] animate-pulse"></div>
          </div>

          <div className="bg-turquoise-200 rounded-full h-[24px] w-[48px] animate-pulse"></div>
        </div>
      </div>
      <div className="border border-t-turquoise-100 my-3"></div>
    </>
  );
};

export default TimeSlotSkeleton;
