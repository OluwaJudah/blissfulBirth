"use client";
import { updateMotherInfo } from "@/actions/mother-info";
import { SubmitButton } from "@/components/Buttons";
import InputValidated from "@/components/InputValidated";
import { motherInputFormData } from "@/constants/mother-info";
import {
  IMotherInfo,
  MotherInfoForm,
  motherInfoFormSchema,
} from "@/definitions/mother-info";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { startTransition, useActionState, useRef } from "react";
import { useForm } from "react-hook-form";

const MotherInfoUpdateForm = ({ motherInfo }: { motherInfo: IMotherInfo }) => {
  const initialState = {
    message: "",
    errors: {},
  };

  const pathname = usePathname();
  const updateMotherInfoWithPathname = updateMotherInfo.bind(null, pathname);

  const [state, formAction, isPending] = useActionState(
    updateMotherInfoWithPathname,
    initialState
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MotherInfoForm>({
    resolver: zodResolver(motherInfoFormSchema),
    defaultValues: {
      ...motherInfo,
      dateOfBirth: motherInfo.dateOfBirth.toISOString().split("T")[0],
      lastMenstrualDate: motherInfo.lastMenstrualDate
        .toISOString()
        .split("T")[0],
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
          {motherInputFormData.map((data) => (
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

export default MotherInfoUpdateForm;
