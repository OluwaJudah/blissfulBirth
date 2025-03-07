import Image from "next/image";

const Fetus = () => {
  return (
    <div className="w-full p-10">
      <div className="h-[270px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-[120px] h-[120px] bg-pinklet-100 rounded-full flex items-center justify-center">
            <Image
              className=""
              src="/fetus_month_2.svg"
              height={33}
              width={45}
              alt="Fetus Month 2"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="font-mono font-bold text-turquoise-800 text-lg tracking-tight leading-none">
              2nd Month
            </span>
            <p className="font-sans text-turquoise-800 text-base tracking-tight leading-none">
              175 days so far - 2nd Trimester
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fetus;
