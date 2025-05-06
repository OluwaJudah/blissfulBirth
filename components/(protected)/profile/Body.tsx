import ProfileInfoCard from "./ProfileInfoCard";
import ProfilePicture from "./ProfilePicture";
import DueDate from "../home/DueDate";
import { profileInfos } from "@/data";

const Body = ({
  username,
  dueDate,
  pregnancyWeeks,
}: {
  username: string;
  dueDate: string;
  pregnancyWeeks: number;
}) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="px-[20px] flex flex-col gap-3">
        <ProfilePicture username={username} pregnancyWeeks={pregnancyWeeks} />
        <DueDate dueDate={dueDate} />
      </div>

      <div className="px-[20px] flex flex-col gap-3">
        {profileInfos.map((p) => (
          <ProfileInfoCard {...p} key={p.name} />
        ))}
      </div>
    </div>
  );
};

export default Body;
