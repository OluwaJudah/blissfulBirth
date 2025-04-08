import { trimesters } from "@/constants/user";
import { calculateTrimester } from "@/utils";
import Image from "next/image";

const ProfilePicture = ({
  username,
  pregnancyWeeks,
}: {
  username: string;
  pregnancyWeeks: number;
}) => {
  const trimester = calculateTrimester(pregnancyWeeks);
  const trimesterStr = trimesters[trimester];

  return (
    <div className="rounded-3xl p-4 bg-pinklet-100 flex gap-4 items-center">
      <div className="flex justify-center items-center bg-turquoise-200 w-[80px] h-[80px] rounded-full">
        <Image
          className=""
          src="/user_1.svg"
          height={65}
          width={65}
          alt="User 1"
        />
      </div>
      <div className="flex flex-col gap-1 w-[200px]">
        <span className="font-sans font-bold text-turquoise-900 text-lg leading-none truncate">
          {username}
        </span>
        <p className="text-black text-sm leading-none">
          Week {pregnancyWeeks} - {trimesterStr} Trimester
        </p>
      </div>
    </div>
  );
};

export default ProfilePicture;
