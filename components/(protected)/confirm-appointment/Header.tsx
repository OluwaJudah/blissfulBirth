import { BackButtonWrapper } from "@/components/Buttons";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <div style={{ zIndex: 999 }} className=" sticky top-0">
      <div className="px-4 flex content-center justify-between py-4 bg-white">
        <div className="flex items-center gap-3">
          <BackButtonWrapper url="/home">
            <div className="flex items-center px-2">
              <ArrowLeft
                className="text-pinklet-500"
                size={22}
                strokeWidth={3}
              />
              <Image
                src="/calendar.svg"
                height={22}
                width={22}
                alt="calendar"
              />
            </div>
          </BackButtonWrapper>
          <span className="font-mono font-semibold text-turquoise-900 text-lg">
            Book Appointment
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
