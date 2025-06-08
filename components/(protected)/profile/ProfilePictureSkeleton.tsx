import Image from "next/image";

const ProfilePictureSkeleton = () => {
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
        <div className="bg-pinklet-200 rounded-full h-[18px] w-[160px] animate-pulse"></div>
        <div className="bg-pinklet-200 rounded-full h-[14px] w-[180px] animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProfilePictureSkeleton;
