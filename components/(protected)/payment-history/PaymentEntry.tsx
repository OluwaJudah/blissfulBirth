import { DollarSign } from "lucide-react";

const PaymentEntry = () => {
  return (
    <div className="rounded-3xl flex px-3 py-4 items-center justify-between bg-turquoise-100">
      <div className="flex gap-3 items-center">
        <div
          className={`flex justify-center items-center bg-turquoise-200 w-[40px] h-[40px] rounded-full`}
        >
          <DollarSign />
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-sans font-bold text-black text-lg leading-none">
            Consultation Fee
          </span>
          <p className="font-light text-black text-sm leading-none">
            Date: 20 Jan 2025
          </p>
        </div>
      </div>
      <span className="font-sans font-bold text-black text-lg leading-none">
        R 280
      </span>
    </div>
  );
};

export default PaymentEntry;
