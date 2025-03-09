import { BackArrowButton } from "@/components/Buttons";

const Header = () => {
  return (
    <div style={{ zIndex: 999 }} className="pb-[20px] sticky top-0">
      <div className="relative flex content-center justify-between bg-turquoise-50 py-5 px-[20px]">
        <div className="flex items-center gap-3">
          <div className="flex justify-center items-center bg-turquoise-100 w-[35px] h-[35px] rounded-full">
            <BackArrowButton />
          </div>
          <span className="font-mono font-semibold text-turquoise-900 text-xl">
            Payment History
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
