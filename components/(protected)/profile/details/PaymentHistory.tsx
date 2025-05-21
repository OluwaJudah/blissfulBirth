import { getPayments } from "@/data/payment-history";
import PaymentEntry from "./PaymentEntry";

const PaymentHistory = async () => {
  const payments = await getPayments();
  return (
    <>
      {payments && payments.length > 0 ? (
        <div className="h-pt-4 pb-8 px-4 flex flex-col gap-3">
          {payments.map((p, index) => (
            <PaymentEntry {...p} key={p.id} />
          ))}
        </div>
      ) : (
        <div className="h-1/2 pt-4 pb-8 px-4 flex flex-col gap-3">
          <div className="h-full flex items-center justify-center text-turquoise-900 text-lg">
            No Payment Entry Available!!
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentHistory;
