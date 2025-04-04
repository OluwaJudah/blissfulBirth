import Image from "next/image";

const Header = () => {
  return (
    <div style={{ zIndex: 999 }} className="sticky top-0">
      <div className="px-4 flex content-center justify-between py-4 bg-white">
        <div className="flex items-center gap-3">
          <div
            className={`flex justify-center items-center bg-turquoise-200 w-[40px] h-[40px] rounded-full`}
          >
            <div className="flex items-center">
              <Image
                src="/calendar.svg"
                height={22}
                width={22}
                alt="calendar"
              />
            </div>{" "}
          </div>
          <span className="font-mono font-semibold text-turquoise-900 text-xl">
            Book Appointment
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
