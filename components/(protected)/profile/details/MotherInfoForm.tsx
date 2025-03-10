import { NextButton } from "@/components/Buttons";
import Input from "@/components/Input";
import { motherInputDetails } from "@/data";

const MotherInfoForm = () => {
  return (
    <div className="flex md:h-screen flex-col items-center bg-white rounded-t-[50px] pt-2 pb-8 px-7 md:overflow-scroll">
      <div className="w-full mb-2">
        {motherInputDetails.map((detail, index) => (
          <Input key={index} {...detail} />
        ))}
      </div>
      <div className="flex gap-3">
        <NextButton name="Submit" url={"/register?type=birth-companion-info"} />
      </div>
    </div>
  );
};

export default MotherInfoForm;
