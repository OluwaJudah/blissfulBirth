import PaymentEntry from "./PaymentEntry";
import { paymentHistory } from "@/data";

const PaymentHistory = () => {
  return (
    <div className="pt-4 pb-8 px-4 flex flex-col gap-3">
      {paymentHistory.map((p, index) => (
        <PaymentEntry {...p} key={index} />
      ))}
    </div>
  );
};

export default PaymentHistory;
