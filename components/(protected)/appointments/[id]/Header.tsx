import { BackArrowButton } from "@/components/Buttons";

const Header = () => {
  return (
    <div className="px-4 flex content-center justify-between pt-4 pb-7">
      <div className="flex items-center gap-3">
        <div className="flex justify-center items-center bg-turquoise-100 w-[35px] h-[35px] rounded-full">
          <BackArrowButton />
        </div>
        <span className="font-mono font-semibold text-turquoise-900 text-xl">
          Appointment
        </span>
      </div>
    </div>
  );
};

export default Header;
