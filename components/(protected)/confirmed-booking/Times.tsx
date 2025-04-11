const Times = ({
  selectedTimeSlot,
  times,
  setSelectedTimeSlot,
  setTimeError,
}: {
  selectedTimeSlot: string;
  times: string[];
  setSelectedTimeSlot: (timeSlot: string) => void;
  setTimeError: (timeError: string) => void;
}) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-2 my-3">
        {times.map((t: string) => {
          const style =
            selectedTimeSlot === t
              ? "bg-pinklet-500 text-white"
              : "bg-white border border-turquoise-100 hover:bg-pinklet-500 hover:text-white text-turquoise-900";
          return (
            <div key={t} className="relative">
              <div className="absolute -right-1 -top-2 w-[20] h-[20] bg-pinklet-300 text-black rounded-full text-center font-semibold text-sm">
                4
              </div>
              <button
                key={t}
                onClick={() => {
                  setSelectedTimeSlot(t);
                  setTimeError("");
                }}
                className={`${style} rounded-full px-3 w-[95px] h-[33px]`}
              >
                <span className="md:text-sm">{t}</span>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Times;
