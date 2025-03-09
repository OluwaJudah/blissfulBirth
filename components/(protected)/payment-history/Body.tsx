import PaymentEntry from "./PaymentEntry";
import { paymentHistory } from "@/data";

const Body = () => {
  return (
    <div className="px-[20px] flex flex-col gap-3">
      {paymentHistory.map((p, index) => (
        <PaymentEntry {...p} key={index} />
      ))}
    </div>
  );
};

export default Body;
