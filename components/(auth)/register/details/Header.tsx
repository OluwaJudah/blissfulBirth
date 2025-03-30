import {
  BackArrowUrlButton,
  BackButtonWrapper,
  SkipButton,
} from "@/components/Buttons";
import { formTitles } from "@/data";
import Image from "next/image";

const Header = ({ type }: { type: keyof typeof formTitles }) => {
  const { name, image, skipUrl } = formTitles[type];

  return (
    <div style={{ zIndex: 999 }} className="sticky top-0">
      <div className="px-4 flex content-center justify-between py-4 bg-white">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-1">
            <BackButtonWrapper>
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
            </BackButtonWrapper>
            <span className="font-mono font-semibold text-turquoise-900 text-xl">
              {name}
            </span>
          </div>
          <div>{type !== "mother-info" && <SkipButton url={skipUrl} />}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
