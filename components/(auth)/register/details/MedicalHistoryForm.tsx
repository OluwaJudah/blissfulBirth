"use client";
import { conditions, familyHistory, tbSymptomsScreen } from "@/data/conditions";
import { BackButton, SubmitButton } from "@/components/Buttons";
import Selectables from "./Selectables";
import {
  startTransition,
  useActionState,
  useContext,
  useRef,
  useState,
} from "react";
import { medicalHistoryFormData } from "@/constants/mother-info";
import InputValidated from "@/components/InputValidated";
import {
  CreateMotherInfoForm,
  createMotherInfoSchema,
} from "@/definitions/mother-info";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MotherInfoFormContext } from "@/context/mother-info";
import { createMotherInfo } from "@/actions/mother-info";
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

  const initialState = {
    message: "",
    errors: {},
  };

  const { motherInfo, birthCompanion, babyInfo, medicalHistory } = context;

  const motherInfoString = JSON.stringify(motherInfo);
  const birthCompanionString = JSON.stringify(birthCompanion);
  const babyInfoString = JSON.stringify(babyInfo);

  const [conditionList, setConditionList] = useState<ConditionType[]>(
    updateSelectablesArray(conditions, medicalHistory.conditions)
  );
  const [familyHistoryList, setFamilyHistoryList] = useState<ConditionType[]>(
    updateSelectablesArray(familyHistory, medicalHistory.familyHistory)
  );
  const [tbSymptomsScreenList, setTbSymptomsScreenList] = useState<
    ConditionType[]
  >(updateSelectablesArray(tbSymptomsScreen, medicalHistory.tbSymptomsScreen));

  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    createMotherInfo,
    initialState
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateMotherInfoForm>({
    resolver: zodResolver(createMotherInfoSchema),
    defaultValues: medicalHistory,
  });

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    handleSubmit(async () => {
      if (formRef.current) {
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

        const form = formRef.current;
        (form.elements.namedItem("conditions") as HTMLInputElement).value =
          conditions;
        (form.elements.namedItem("familyHistory") as HTMLInputElement).value =
          familyHistory;
        (
          form.elements.namedItem("tbSymptomsScreen") as HTMLInputElement
        ).value = tbSymptomsScreen;
      }
      const formData = new FormData(formRef.current!);
      startTransition(() => {
        formAction(formData);
      });
    })(evt);
  };

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="flex md:h-screen flex-col items-center bg-white rounded-t-[50px] pt-2 pb-8 px-4 md:overflow-scroll"
    >
      <div className="w-full my-3">
        <div className="font-mono text-md font-semibold text-turquoise-900">
          Conditions
        </div>
        <Selectables list={conditionList} setList={setConditionList} />
        <input type="hidden" name="conditions" value="" />
      </div>

      <div className="w-full my-3">
        <div className="font-mono text-md font-semibold text-turquoise-900">
          Family History
        </div>
        <Selectables list={familyHistoryList} setList={setFamilyHistoryList} />
        <input type="hidden" name="familyHistory" value="" />
      </div>

      <div className="w-full mb-3">
        {medicalHistoryFormData.map((data) => (
          <InputValidated
            key={data.name}
            {...data}
            register={register}
            errors={errors}
            isPending={isPending}
            stateError={state?.errors}
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
        <input type="hidden" name="tbSymptomsScreen" value="" />
      </div>
      <input type="hidden" name="motherInfo" value={motherInfoString} />
      <input type="hidden" name="birthCompanion" value={birthCompanionString} />
      <input type="hidden" name="babyInfo" value={babyInfoString} />
      <div className="flex gap-3">
        <BackButton />
        <SubmitButton isPending={isPending} name="Submit" />
      </div>
    </form>
  );
};

export default MedicalHistory;
