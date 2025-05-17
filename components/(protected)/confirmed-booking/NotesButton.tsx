"use client";
import { updateAppointment } from "@/actions/appointment";
import { LoaderCircle, Pen } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NotesAndBooking = ({
  bookingId,
  from,
}: {
  bookingId: string;
  from?: string;
}) => {
  const [note, setNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const submit = async () => {
    setIsLoading(true);
    await updateAppointment(bookingId, note);
    router.push(
      `/confirmed-booking?bookingId=${bookingId}${from ? "&from=home" : ""}`
    );
  };

  return (
    <>
      <div className="flex flex-col gap-3 px-7">
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center bg-turquoise-200 w-[40px] h-[40px] rounded-full">
            <Pen size={20} strokeWidth={3} />
          </div>
          <p className="font-mono font-bold">Notes</p>
        </div>
        <div className="w-full">
          <textarea
            onChange={(e) => setNote(e.target.value)}
            className="w-full h-[110px] rounded-2xl border border-turquoise-200 focus:border-turquoise-400 focus:ring-transparent focus:inset-ring-transparent"
            name=""
            id=""
          />
        </div>
      </div>
      <div className="border border-t-turquoise-100 my-3"></div>
      <div className="w-full px-7">
        {isLoading ? (
          <button
            onClick={() => console.log("Loading...")}
            className="flex items-center justify-center gap-2 bg-pinklet-400 w-full text-white rounded-full h-[35px]"
          >
            <LoaderCircle className="animate-spin" />
            <p>Loading ...</p>
          </button>
        ) : (
          <button
            onClick={submit}
            className="bg-pinklet-500 w-full hover:bg-pinklet-700 text-white rounded-full h-[35px]"
          >
            Confirm Booking
          </button>
        )}
      </div>
    </>
  );
};

export default NotesAndBooking;
