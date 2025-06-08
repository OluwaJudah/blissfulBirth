import ProfileInfoCard from "./ProfileInfoCard";
import ProfilePicture from "./ProfilePicture";
import DueDate from "../home/DueDate";
import { profileInfos } from "@/data";
import DueDateSkeleton from "../home/DueDateSkeleton";
import { Suspense } from "react";
import ProfilePictureSkeleton from "./ProfilePictureSkeleton";

const Body = ({
  username,
  pregnancyWeeks,
}: {
  username: string;
  pregnancyWeeks: number;
}) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="px-[20px] flex flex-col gap-3">
        <Suspense fallback={<ProfilePictureSkeleton />}>
          <ProfilePicture username={username} pregnancyWeeks={pregnancyWeeks} />
        </Suspense>
        <Suspense fallback={<DueDateSkeleton />}>
          <DueDate />
        </Suspense>
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
