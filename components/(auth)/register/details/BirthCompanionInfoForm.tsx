"use client";
import { BackButton, SubmitButton } from "@/components/Buttons";
import InputValidated from "@/components/InputValidated";
import { MotherInfoFormContext } from "@/context/mother-info";
import { birthCompanionFormData } from "@/constants/mother-info";
import {
  BirthCompanionForm,
  birthCompanionSchema,
} from "@/definitions/mother-info";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const BirthCompanionInfoForm = () => {
  const context = useContext(MotherInfoFormContext);

  if (!context) {
    throw new Error(
      "useMotherInfoFormContext must be used within a MotherInfoFormContextProvider"
    );
  }

  const { birthCompanion, setBirthCompanion } = context;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BirthCompanionForm>({
    resolver: zodResolver(birthCompanionSchema),
    defaultValues: birthCompanion,
  });

  const onSubmit = (values: BirthCompanionForm) => {
    console.log("values:", values);
    setBirthCompanion(values);
    router.push("/register/details/baby-info");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex md:h-screen flex-col items-center bg-white rounded-t-[50px] pt-2 pb-8 md:py-4 px-7 md:overflow-scroll"
      >
        <div className="w-full mb-2">
          {birthCompanionFormData.map((data) => (
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
    </>
  );
};

export default BirthCompanionInfoForm;
