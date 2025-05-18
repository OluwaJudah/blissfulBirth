"use client";
import { conditions, familyHistory, tbSymptomsScreen } from "@/data/conditions";
import { SubmitButton } from "@/components/Buttons";
import {
  IMedicalHistory,
  medicalHistoryFormSchema,
  MedicalHistoryFormSchema,
  SelectableType,
} from "@/definitions/mother-info";
import { startTransition, useActionState, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { updateMedicalReport } from "@/actions/mother-info";
import Selectables from "./Selectables";

const initialState = {
  message: "",
  errors: {},
};

const MedicalHistoryForm = ({
  medicalHistory,
}: {
  medicalHistory: IMedicalHistory;
}) => {
  const updateSelectablesArray = (
    selectableArray: SelectableType[],
    selectableString: string
  ) => {
    const selectableStringArray = selectableString.split(",");
    const updatedSelectableArray = selectableArray.map((s) => {
      if (selectableStringArray.includes(s.name))
        return { name: s.name, isAdded: true };
      return s;
    });
    return updatedSelectableArray;
  };

  const [conditionList, setConditionList] = useState<SelectableType[]>(
    updateSelectablesArray(conditions, medicalHistory.conditions)
  );
  const [familyHistoryList, setFamilyHistoryList] = useState<SelectableType[]>(
    updateSelectablesArray(familyHistory, medicalHistory.familyHistory)
  );
  const [tbSymptomsScreenList, setTbSymptomsScreenList] = useState<
    SelectableType[]
  >(updateSelectablesArray(tbSymptomsScreen, medicalHistory.tbSymptomsScreen));

  const filterArraytoStr = (condition: SelectableType[]) =>
    condition
      .filter((c) => c.isAdded)
      .map((f) => f.name)
      .toString();

  const pathname = usePathname();

  const updateMedicalReportWithDetails = updateMedicalReport.bind(
    null,
    filterArraytoStr(conditionList),
    filterArraytoStr(familyHistoryList),
    filterArraytoStr(tbSymptomsScreenList),
    pathname
  );

  const [state, formAction, isPending] = useActionState(
    updateMedicalReportWithDetails,
    initialState
  );

  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<MedicalHistoryFormSchema>({
    resolver: zodResolver(medicalHistoryFormSchema),
    defaultValues: medicalHistory,
  });

  const { handleSubmit } = form;

  return (
    <form
      ref={formRef}
      onSubmit={(evt) => {
        evt.preventDefault();

        handleSubmit(() => {
          const formData = new FormData(formRef.current!);
          startTransition(() => {
            formAction(formData);
          });
        })(evt);
      }}
      className="space-y-2"
    >
      <div className="flex md:h-screen flex-col items-center bg-white rounded-t-[50px] pb-8 md:py-4 px-7 md:overflow-scroll">
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
          <Selectables
            list={familyHistoryList}
            setList={setFamilyHistoryList}
          />
        </div>
        <div className="w-full mb-3">
          <div className="flex flex-col my-3">
            <label className="font-mono text-turquoise-900" htmlFor="">
              Details
            </label>
            <div className="flex items-center px-2 rounded-full border border-turquoise-900 overflow-hidden">
              <input
                name="details"
                placeholder="Enter details of Family history"
                className="w-full border-none focus:ring-transparent focus:inset-ring-transparent"
                type="text"
                defaultValue={medicalHistory.details}
              />
            </div>
          </div>
          <div className="flex flex-col my-3">
            <label className="font-mono text-turquoise-900" htmlFor="">
              Medication
            </label>
            <div className="flex items-center px-2 rounded-full border border-turquoise-900 overflow-hidden">
              <input
                name="medication"
                placeholder="Enter Medications"
                className="w-full border-none focus:ring-transparent focus:inset-ring-transparent"
                type="text"
                defaultValue={medicalHistory.medication}
              />
            </div>
          </div>
          <div className="flex flex-col my-3">
            <label className="font-mono text-turquoise-900" htmlFor="">
              Operations
            </label>
            <div className="flex items-center px-2 rounded-full border border-turquoise-900 overflow-hidden">
              <input
                name="operations"
                placeholder="Enter Operations description"
                className="w-full border-none focus:ring-transparent focus:inset-ring-transparent"
                type="text"
                defaultValue={medicalHistory.operations}
              />
            </div>
          </div>
          <div className="flex flex-col my-3">
            <label className="font-mono text-turquoise-900" htmlFor="">
              Allergies
            </label>
            <div className="flex items-center px-2 rounded-full border border-turquoise-900 overflow-hidden">
              <input
                name="allergies"
                placeholder="Enter Allergies"
                className="w-full border-none focus:ring-transparent focus:inset-ring-transparent"
                type="text"
                defaultValue={medicalHistory.allergies}
              />
            </div>
          </div>
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
          <SubmitButton name="Update" isPending={isPending} />
        </div>
      </div>
    </form>
  );
};

export default MedicalHistoryForm;
