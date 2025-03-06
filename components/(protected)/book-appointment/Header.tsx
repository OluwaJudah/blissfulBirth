import { BackArrowButton } from "@/components/Buttons";

const Header = () => {
  return (
    <div className="px-4 flex content-center justify-between py-[45px]">
      <div className="flex items-center gap-5">
        <div className="flex justify-center items-center bg-turquoise-100 w-[45px] h-[45px] rounded-full">
          <BackArrowButton />
        </div>
        <span className="font-mono font-semibold text-turquoise-900 text-xl">
          Confirm Booking
        </span>
      </div>{" "}
    </div>
  );
};

export default Header;
