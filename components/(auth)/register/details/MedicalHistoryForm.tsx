"use client";
import { conditions, familyHistory, tbSymptomsScreen } from "@/data/conditions";
import { BackButton, SubmitButton } from "@/components/Buttons";
import Selectables from "./Selectables";
import { useContext, useState } from "react";
import { medicalHistoryFormData } from "@/constants/mother-info";
import InputValidated from "@/components/InputValidated";
import {
  MedicalHistoryForm,
  medicalHistorySchema,
} from "@/definitions/mother-info";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { MotherInfoFormContext } from "@/context/mother-info";
type ConditionType = { name: string; isAdded: boolean };

const MedicalHistory = () => {
  const updateSelectablesArray = (
    selectableArary: ConditionType[],
    selectableString: string
  ) => {
    const selectableStringArray = selectableString.split(",");
    const updatedSelectableArary = selectableArary.map((s) => {
      if (selectableStringArray.includes(s.name))
        return { name: s.name, isAdded: true };
      return s;
    });
    return updatedSelectableArary;
  };

  const context = useContext(MotherInfoFormContext);
  if (!context) {
    throw new Error(
      "useMotherInfoFormContext must be used within a MotherInfoFormContextProvider"
    );
  }

  const { medicalHistory, setMedicalHistory } = context;

  const [conditionList, setConditionList] = useState<ConditionType[]>(
    updateSelectablesArray(conditions, medicalHistory.conditions)
  );
  const [familyHistoryList, setFamilyHistoryList] = useState<ConditionType[]>(
    updateSelectablesArray(familyHistory, medicalHistory.familyHistory)
  );
  const [tbSymptomsScreenList, setTbSymptomsScreenList] = useState<
    ConditionType[]
    >(updateSelectablesArray(tbSymptomsScreen, medicalHistory.tbSymptomsScreen));
  
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MedicalHistoryForm>({
    resolver: zodResolver(medicalHistorySchema),
    defaultValues: medicalHistory,
  });

  const onSubmit = (values: MedicalHistoryForm) => {
    console.log("values:", values);
    const conditions = conditionList
      .filter((c) => c.isAdded)
      .map((f) => f.name)
      .toString();
    const familyHistory = familyHistoryList
      .filter((c) => c.isAdded)
      .map((f) => f.name)
      .toString();
    const tbSymptomsScreen = tbSymptomsScreenList
      .filter((c) => c.isAdded)
      .map((f) => f.name)
      .toString();
    const data = {
      ...values,
      conditions,
      familyHistory,
      tbSymptomsScreen,
    };
    console.log("data: ", data);
    setMedicalHistory(data);
    // router.push("/register/details/birth-companion");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex md:h-screen flex-col items-center bg-white rounded-t-[50px] pt-2 pb-8 px-4 md:overflow-scroll"
    >
      <div className="w-full my-3">
        <div className="font-mono text-md font-semibold text-turquoise-900">
          Conditions
        </div>
        <Selectables list={conditionList} setList={setConditionList} />
      </div>

      <div className="w-full my-3">
        <div className="font-mono text-md font-semibold text-turquoise-900">
          Family History
        </div>
        <Selectables list={familyHistoryList} setList={setFamilyHistoryList} />
      </div>

      <div className="w-full mb-3">
        {medicalHistoryFormData.map((data) => (
          <InputValidated
            key={data.name}
            {...data}
            register={register}
            errors={errors}
          />
        ))}
      </div>
      <div className="w-full my-3">
        <div className="font-mono text-md font-semibold text-turquoise-900">
          TB symptoms screen
        </div>
        <Selectables
          list={tbSymptomsScreenList}
          setList={setTbSymptomsScreenList}
        />
      </div>
      <div className="flex gap-3">
        <BackButton />
        <SubmitButton name="Submit" />
      </div>
    </form>
  );
};

export default MedicalHistory;
