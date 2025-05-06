import Image from "next/image";

const Location = () => {
  return (
    <div className="">
      <div className="flex gap-2 px-7">
        <div className="w-[40px]">
          <div className="flex justify-center items-center bg-turquoise-200 w-[40px] h-[40px] rounded-full">
            <Image src="/pin.svg" height={23} width={23} alt="pin" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-mono font-bold text-turquoise-900">
            Blissful Birth Clinic
          </span>
          <p className="font-sans font-medium text-turquoise-950 text-sm">
            200 Sanders Creek Rd, Johanesburg, South Africa
          </p>
        </div>
      </div>
      <div className="border border-t-turquoise-100 my-3"></div>
    </div>
  );
};

export default Location;
