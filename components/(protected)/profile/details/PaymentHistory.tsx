import { getPayments } from "@/data/payment-history";
import PaymentEntry from "./PaymentEntry";

const PaymentHistory = async () => {
  const payments = await getPayments();
  if (!payments) return null;

  return (
    <div className="pt-4 pb-8 px-4 flex flex-col gap-3">
      {payments.map((p, index) => (
        <PaymentEntry {...p} key={p.id} />
      ))}
    </div>
  );
};

export default PaymentHistory;
