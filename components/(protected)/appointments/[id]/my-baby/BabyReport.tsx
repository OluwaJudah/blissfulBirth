import { ChevronDown } from "lucide-react";

const BabyReport = () => {
  return (
    <div className="flex flex-col px-4 space-y-4">
      <div className="flex space-x-8">
        <div className="basis-1/2 h-[138px] rounded-3xl bg-turquoise-200 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <p className="font-sans text-black text-base tracking-tight leading-none">
              Weight
            </p>
            <span className="font-mono font-bold text-black text-3xl tracking-tight leading-none">
              <span className="mr-2">24</span>g
            </span>
          </div>
        </div>
        <div className="basis-1/2 h-[138px] rounded-3xl bg-turquoise-200 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <p className="font-sans text-black text-base tracking-tight leading-none">
              Height
            </p>
            <span className="font-mono font-bold text-black text-3xl tracking-tight leading-none">
              <span className="mr-2">24</span>cm
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between p-6 bg-turquoise-200 rounded-3xl">
          <p className="font-sans text-black text-lg tracking-tight leading-none">
            Heart Rate
          </p>
          <p className="font-mono font-bold text-black text-lg tracking-tight leading-none">
            <span className="mr-1">24</span>bpm
          </p>
        </div>{" "}
        <div className="flex justify-between p-6 bg-turquoise-200 rounded-3xl">
          <p className="font-sans text-black text-lg tracking-tight leading-none">
            Position
          </p>
          <p className="font-mono font-bold text-black text-lg tracking-tight leading-none">
            Vertex
          </p>
        </div>{" "}
        <div className="flex justify-between px-6 py-5 bg-turquoise-200 rounded-3xl items-center">
          <p className="font-sans text-black text-lg tracking-tight leading-none">
            Notes
          </p>
          <ChevronDown size={24} strokeWidth={4} />
        </div>
      </div>
    </div>
  );
};

export default BabyReport;
