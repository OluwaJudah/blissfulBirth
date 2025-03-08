import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProfileInfoCard = ({
  name,
  image,
  url,
  bgColor,
}: {
  name: string;
  image: string;
  url: string;
  bgColor: string;
}) => {
  return (
    <Link
      href={url}
      className="rounded-full flex px-3 py-2 items-center justify-between bg-turquoise-100"
    >
      <div className="flex gap-3 items-center">
        <div
          className={`flex justify-center items-center bg-${bgColor}-200 w-[40px] h-[40px] rounded-full`}
        >
          <Image className="" src={image} height={26} width={26} alt={image} />
        </div>
        <span className="font-bold text-turquoise-900 leading-none">
          {name}
        </span>
      </div>
      <ChevronRight />
    </Link>
  );
};

export default ProfileInfoCard;
