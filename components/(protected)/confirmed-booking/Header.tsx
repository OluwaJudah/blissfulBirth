import { BackButtonWrapper } from "@/components/Buttons";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const ThumbNail = () => (
    <>
      <div
        className={`flex justify-center items-center bg-turquoise-200 w-[40px] h-[40px] rounded-full`}
      >
        <div className="flex items-center">
          <Image src="/calendar.svg" height={22} width={22} alt="calendar" />
        </div>
      </div>
      <span className="font-mono font-semibold text-turquoise-900 text-xl">
        Appointment
      </span>
    </>
  );

  const BackButton = () => (
    <>
      <BackButtonWrapper url="/home">
        <div className="flex items-center px-2">
          <ArrowLeft className="text-pinklet-500" size={22} strokeWidth={3} />
          <Image src="/calendar.svg" height={22} width={22} alt="calendar" />
        </div>
      </BackButtonWrapper>
      <span className="font-mono font-semibold text-turquoise-900 text-lg">
        Appointment
      </span>
    </>
  );

  return (
    <div style={{ zIndex: 999 }} className="pb-[10px] sticky top-0">
      <div className="px-4 flex content-center justify-between py-4 bg-white">
        <div className="flex items-center gap-3">
          <ThumbNail />
        </div>
      </div>
    </div>
  );
};

export default Header;
