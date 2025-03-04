import React from "react";

const Header = () => {
  return (
    <div className="flex content-center justify-between py-[45px]">
      <div className="flex items-center">
        <span className="font-mono font-semibold text-turquoise-900 text-xl">Blissful Birth</span>
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
