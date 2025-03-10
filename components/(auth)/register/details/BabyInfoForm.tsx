import { BackButton, NextButton } from "@/components/Buttons";
import Input from "@/components/Input";
import { babyInputDetails, formTitles } from "@/data";

const BabyInfoForm = ({ type }: { type: keyof typeof formTitles }) => {
  const { skipUrl } = formTitles[type];

  return (
    <div className="flex md:h-screen flex-col items-center bg-white rounded-t-[50px] pt-2 pb-8 md:py-4 px-7 md:overflow-scroll">
      <div className="w-full mb-2">
        {babyInputDetails.map((detail, index) => (
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

export default BabyInfoForm;
