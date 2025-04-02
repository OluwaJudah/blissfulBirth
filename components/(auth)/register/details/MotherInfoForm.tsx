"use client";
import { BackButton, SubmitButton } from "@/components/Buttons";
import InputValidated from "@/components/InputValidated";
import { MotherInfoFormContext } from "@/context/mother-info";
import { motherInputFormData } from "@/constants/mother-info";
import {
  MotherInfoForm,
  motherInfoFormSchema,
} from "@/definitions/mother-info";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const MotherInfo = () => {
  const context = useContext(MotherInfoFormContext);

  if (!context) {
    throw new Error(
      "useMotherInfoFormContext must be used within a MotherInfoFormContextProvider"
    );
  }

  const { motherInfo, setMotherInfo } = context;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MotherInfoForm>({
    resolver: zodResolver(motherInfoFormSchema),
    defaultValues: motherInfo,
  });

  const onSubmit = (values: MotherInfoForm) => {
    console.log("values:", values);
    setMotherInfo(values);
    router.push("/register/details/birth-companion");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center bg-white rounded-t-[50px] pt-2 pb-8 px-7 md:overflow-scroll"
    >
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
        <BackButton />
        <SubmitButton name="Next" />
      </div>
    </form>
  );
};

export default MotherInfo;
