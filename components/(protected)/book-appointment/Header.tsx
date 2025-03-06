import { BackArrowButton } from "@/components/Buttons";
import Image from "next/image";

const Header = ({ type }: { type: string }) => {
  return (
    <div className="px-4 flex content-center justify-between py-4">
      {type === "book" ? (
        <div className="flex items-center gap-3">
          <div className="flex justify-center items-center bg-turquoise-200 w-[35px] h-[35px] rounded-full">
            <Image src="/calendar.svg" height={22} width={22} alt="calendar" />
          </div>
          <span className="font-mono font-semibold text-turquoise-900 text-xl">
            Book Appointment
          </span>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <div className="flex justify-center items-center bg-turquoise-100 w-[35px] h-[35px] rounded-full">
            <BackArrowButton />
          </div>
          <span className="font-mono font-semibold text-turquoise-900 text-xl">
            Confirm Booking
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
