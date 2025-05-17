import { BackArrowUrlButton } from "@/components/Buttons";
import { formTitles } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Header = ({ type }: { type: keyof typeof formTitles }) => {
  const { name, image } = formTitles[type];
  return (
    <div style={{ zIndex: 999 }} className="sticky top-0">
      <div className="px-4 flex content-center justify-between py-4 bg-white">
        <div className="flex items-center gap-3">
          <Link href="/profile"
            className={`flex justify-center items-center bg-turquoise-200 w-[65px] h-[40px] rounded-full`}
          >
            <div className="flex items-center px-2">
              <BackArrowUrlButton url={""} />
              <Image
                className=""
                src={image}
                height={26}
                width={24}
                alt={image}
              />
            </div>
          </Link>
          <span className="font-mono font-semibold text-turquoise-900 text-xl">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
