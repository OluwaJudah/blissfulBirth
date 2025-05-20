"use client";
import { updateBirthCompanionInfo } from "@/actions/mother-info";
import { SubmitButton } from "@/components/Buttons";
import InputValidated from "@/components/InputValidated";
import { birthCompanionInputFormData } from "@/constants/mother-info";
import {
  IBirthCompanion,
  BirthCompanionForm,
  birthCompanionSchema,
} from "@/definitions/mother-info";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { startTransition, useActionState, useRef } from "react";
import { useForm } from "react-hook-form";

const BirthCompanionInfoUpdateForm = ({
  birthCompanionInfo,
}: {
  birthCompanionInfo: IBirthCompanion;
}) => {
  const initialState = {
    message: "",
    errors: {},
  };

  const pathname = usePathname();
  const updateBirthCompanionInfoWithPathname = updateBirthCompanionInfo.bind(
    null,
    pathname
  );

  const [state, formAction, isPending] = useActionState(
    updateBirthCompanionInfoWithPathname,
    initialState
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BirthCompanionForm>({
    resolver: zodResolver(birthCompanionSchema),
    defaultValues: {
      ...birthCompanionInfo,
      dateOfBirth: birthCompanionInfo.dateOfBirth.toISOString().split("T")[0],
    },
  });
  const formRef = useRef<HTMLFormElement>(null);

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
    >
      <div className="flex md:h-screen flex-col items-center bg-white rounded-t-[50px] pt-2 pb-8 px-7 md:overflow-scroll">
        <div className="w-full mb-2">
          {birthCompanionInputFormData.map((data) => (
            <InputValidated
              key={data.name}
              {...data}
              register={register}
              errors={errors}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <SubmitButton name="Update" isPending={isPending} />
        </div>
      </div>
    </form>
  );
};

export default BirthCompanionInfoUpdateForm;
