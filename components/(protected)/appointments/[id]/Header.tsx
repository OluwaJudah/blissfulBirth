"use client";
import { BackArrowUrlButton } from "@/components/Buttons";
import { useParams, useSearchParams } from "next/navigation";

const Header = () => {
  const { id } = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  return (
    <div className="px-4 flex content-center justify-between pt-4 pb-7">
      <div className="flex items-center gap-3">
        <div className="flex justify-center items-center bg-turquoise-100 w-[35px] h-[35px] rounded-full">
          <BackArrowUrlButton
            url={from === "home" ? "/home" : "/appointments"}
          />
        </div>
        <span className="font-mono font-semibold text-turquoise-900 text-xl">
          Week {id}
        </span>
      </div>
    </div>
  );
};

export default Header;
