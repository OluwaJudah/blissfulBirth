import { Home, Pen } from "lucide-react";
import Link from "next/link";

const NoteBackHome = ({ from, note }: { from?: string; note?: string }) => {
  return (
    <>
      <div className="flex flex-col gap-3 px-7">
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center bg-pinklet-200 w-[40px] h-[40px] rounded-full">
            <Pen size={20} strokeWidth={3} />
          </div>
          <p className="font-mono font-bold text-turquoise-900">Notes</p>
        </div>
        <div className="w-full">
          <p className="font-sans font-medium text-turquoise-950 text-base">
            {note === "" ? "No Note available" : note}
          </p>
        </div>
      </div>{" "}
      <div className="border border-t-turquoise-100 my-3"></div>
      <div className="w-full px-7">
        <Link
          className="flex items-center mx-auto justify-center gap-3 bg-turquoise-500 hover:bg-turquoise-700 text-white rounded-full w-full h-[35px]"
          href={from ? "/home" : "/appointments"}
        >
          <Home size={15} color="#fff" />
          <p className="text-center">Back to Home</p>
        </Link>
      </div>
    </>
  );
};

export default NoteBackHome;
