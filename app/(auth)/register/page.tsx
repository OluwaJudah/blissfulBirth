import BabyInfoForm from "@/components/(auth)/register/BabyInfoForm";
import BirthCompanionInfoForm from "@/components/(auth)/register/BirthCompanionInfoForm";
import MedicalHistoryForm from "@/components/(auth)/register/MedicalHistoryForm";
import MotherInfoForm from "@/components/(auth)/register/MotherInfoForm";
import Register from "@/components/(auth)/register/Register";
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const { type } = query;

  return (
    <>
      {type === "mother-info" && <MotherInfoForm />}
      {type === "birth-companion-info" && <BirthCompanionInfoForm />}
      {type === "baby-info" && <BabyInfoForm />}
      {type === "medical-history" && <MedicalHistoryForm />}
      {!type && <Register />}
    </>
  );
}
