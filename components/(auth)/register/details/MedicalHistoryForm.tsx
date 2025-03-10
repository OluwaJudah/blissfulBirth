import { conditions, familyHistory, tbSymptomsScreen } from "@/data/conditions";
import { BackButton, NextButton } from "@/components/Buttons";
import Conditions from "./Conditions";
import Input from "@/components/Input";
import { formTitles, medicalHistoryInputDetails } from "@/data";

const MedicalHistoryForm = ({ type }: { type: keyof typeof formTitles }) => {
  const { skipUrl } = formTitles[type];
  return (
    <div className="flex md:h-screen flex-col items-center bg-white rounded-t-[50px] pt-2 pb-8 px-4 md:overflow-scroll">
      <div className="w-full my-3">
        <div className="font-mono text-md font-semibold text-turquoise-900">
          Conditions
        </div>
        <Conditions conditions={conditions} />
      </div>

      <div className="w-full my-3">
        <div className="font-mono text-md font-semibold text-turquoise-900">
          Family History
        </div>
        <Conditions conditions={familyHistory} />
      </div>

      <div className="w-full mb-3">
        {medicalHistoryInputDetails.map((detail, index) => (
          <Input key={index} {...detail} />
        ))}
      </div>
      <div className="w-full my-3">
        <div className="font-mono text-md font-semibold text-turquoise-900">
          TB symptoms screen
        </div>
        <Conditions conditions={tbSymptomsScreen} />
      </div>
      <div className="flex gap-3">
        <BackButton />
        <NextButton name="Submit" url={skipUrl} />
      </div>
    </div>
  );
};

export default MedicalHistoryForm;
