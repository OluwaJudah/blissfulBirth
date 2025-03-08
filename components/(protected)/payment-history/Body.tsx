import PaymentEntry from "./PaymentEntry";
import { profileInfos } from "@/data";

const Body = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="px-[20px] flex flex-col gap-3">
        {profileInfos.map((p) => (
          <PaymentEntry {...p} key={p.name} />
        ))}
      </div>
    </div>
  );
};

export default Body;
