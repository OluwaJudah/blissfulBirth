"use client";
import { BackButton, SubmitButton } from "@/components/Buttons";
import InputValidated from "@/components/InputValidated";
import { babyInfoFormData, formTitles } from "@/constants/mother-info";
import { MotherInfoFormContext } from "@/context/mother-info";
import { BabyInfoForm, babyInfoSchema } from "@/definitions/mother-info";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const BabyInfo = () => {
  const context = useContext(MotherInfoFormContext);

  if (!context) {
    throw new Error(
      "useMotherInfoFormContext must be used within a MotherInfoFormContextProvider"
    );
  }

  const { babyInfo, setBabyInfo } = context;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BabyInfoForm>({
    resolver: zodResolver(babyInfoSchema),
    defaultValues: babyInfo,
  });

  const onSubmit = (values: BabyInfoForm) => {
    setBabyInfo(values);
    router.push("/register/details/medical-history");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex md:h-screen flex-col items-center bg-white rounded-t-[50px] pt-2 pb-8 md:py-4 px-7 md:overflow-scroll"
    >
      <div className="w-full mb-2">
        {babyInfoFormData.map((data) => (
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

export default BabyInfo;
