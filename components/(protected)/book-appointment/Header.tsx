import { BackArrowUrlButton, BackButtonWrapper } from "@/components/Buttons";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const Header = ({ type, from }: { type: string; from: string }) => {
  let name = "Confirm Booking";
  let url = from === "home" ? "/home" : "/appointments";

  if (type === "book") {
    name = "Book Appointment";
    url = "";
  }

  return (
    <div style={{ zIndex: 999 }} className="pb-[20px] sticky top-0">
      <div className="px-4 flex content-center justify-between py-4 bg-white">
        <div className="flex items-center gap-3">
          <BackButtonWrapper url={url}>
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
          <span className="font-mono font-semibold text-turquoise-900 text-xl">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
