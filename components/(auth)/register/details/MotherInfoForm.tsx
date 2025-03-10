import { BackButton, NextButton } from "@/components/Buttons";
import Input from "@/components/Input";
import { formTitles, motherInputDetails } from "@/data";

const MotherInfoForm = ({ type }: { type: keyof typeof formTitles }) => {
  const { skipUrl } = formTitles[type];

  return (
    <div className="flex md:h-screen flex-col items-center bg-white rounded-t-[50px] pt-2 pb-8 px-7 md:overflow-scroll">
      <div className="w-full mb-2">
        {motherInputDetails.map((detail, index) => (
          <Input key={index} {...detail} />
        ))}
      </div>
      <div className="flex gap-3">
        <BackButton />
        <NextButton url={skipUrl} />
      </div>
    </div>
  );
};

export default MotherInfoForm;
