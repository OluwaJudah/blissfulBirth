import BabyInfoForm from "@/components/BabyInfoForm";
import BirthCompanionInfoForm from "@/components/BirthCompanionInfoForm";
import MedicalHistoryForm from "@/components/MedicalHistoryForm";
import MotherInfoForm from "@/components/MotherInfoForm";
import Register from "@/components/Register";
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
