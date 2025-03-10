import { DollarSign } from "lucide-react";

const PaymentEntry = ({
  name,
  amount,
  date,
}: {
  name: string;
  amount: string;
  date: string; 
}) => {
  return (
    <div className="rounded-3xl flex px-3 py-4 items-center justify-between bg-turquoise-100 group">
      <div className="flex gap-3 items-center">
        <div
          className={`flex justify-center items-center group-even:bg-pinklet-200 group-odd:bg-turquoise-300 w-[40px] h-[40px] rounded-full`}
        >
          <DollarSign />
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-sans font-bold text-black text-lg leading-none">
            {name}
          </span>
          <p className="font-light text-black text-sm leading-none">
            Date: {date}
          </p>
        </div>
      </div>
      <span className="font-sans font-bold text-black text-lg leading-none">
        R {amount}
      </span>
    </div>
  );
};

export default PaymentEntry;
