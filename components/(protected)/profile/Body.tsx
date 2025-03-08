import ProfileInfoCard from "./ProfileInfoCard";
import ProfilePicture from "./ProfilePicture";
import DueDate from "../home/DueDate";
import { profileInfos } from "@/data";

const Body = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="px-[20px] flex flex-col gap-3">
        <ProfilePicture />
        <DueDate />
      </div>

      <div className="px-[20px] flex flex-col gap-3">
        {profileInfos.map((p) => (
          <ProfileInfoCard {...p} key={p.name} />
        ))}
      </div>

      <div className="px-[20px] flex flex-col gap-5">
        <ProfileInfoCard
          name="Payment History"
          url="#"
          image="/payment_history.png"
          bgColor="turquoise"
        />
      </div>
    </div>
  );
};

export default Body;
