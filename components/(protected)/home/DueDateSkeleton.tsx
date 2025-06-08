import Image from "next/image";

const DueDateSkeleton = async () => {
  return (
    <div className="w-full border border-turquoise-500 rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/baby-carriage.png"
            height={22}
            width={22}
            alt="calendar"
          />
          <p className="font-sans text-xl text-turquoise-300 tracking-tight">
            Due date:
          </p>
        </div>
        <div className="bg-turquoise-200 rounded-lg h-[28px] w-[149px] animate-pulse"></div>
      </div>
    </div>
  );
};

export default DueDateSkeleton;
