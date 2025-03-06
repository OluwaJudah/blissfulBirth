import Image from "next/image";

const Header = () => {
  return (
    <div className="flex content-center justify-between pt-4 pb-[40px]">
      <div className="flex items-center gap-5">
        <div className="flex justify-center items-center bg-turquoise-100 w-[45px] h-[45px] rounded-full">
          <Image
            className=""
            src="/user_1.svg"
            height={35}
            width={35}
            alt="User 1"
          />
        </div>
        <span className="font-mono font-semibold text-turquoise-900 text-xl">
          Hi Yanela
        </span>
      </div>{" "}
      <div className="w-[40px] h-[40px] p-3 border shadow-lg shadow-turquoise-500 border-turquoise-200 rounded-2xl flex justify-center content-center">
        <div className="flex flex-col justify-between">
          <div className="w-[20px] border border-turquoise-900"></div>
          <div className="w-[20px] border border-turquoise-900"></div>
          <div className="w-[20px] border border-turquoise-900"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
