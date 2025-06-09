const LocationSkeleton = () => {
  return (
    <div className="">
      <div className="flex gap-2 px-7">
        <div className="w-[40px]">
          <div className="flex justify-center items-center bg-turquoise-200 w-[40px] h-[40px] rounded-full">
            <div className="bg-turquoise-200 rounded-full h-[40px] w-[40px] animate-pulse"></div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="bg-turquoise-200 rounded-full h-[24px] w-[244px] animate-pulse"></div>
          <div className="bg-turquoise-200 rounded-full h-[40px] w-[264px] animate-pulse"></div>
        </div>
      </div>
      <div className="border border-t-turquoise-100 my-3"></div>
    </div>
  );
};

export default LocationSkeleton;
