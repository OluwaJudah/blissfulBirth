import BabyInfoForm from "@/components/(auth)/register/details/BabyInfoForm";
import BirthCompanionInfoForm from "@/components/(auth)/register/details/BirthCompanionInfoForm";
import Header from "@/components/(auth)/register/details/Header";
import MedicalHistoryForm from "@/components/(auth)/register/details/MedicalHistoryForm";
import MotherInfoForm from "@/components/(auth)/register/details/MotherInfoForm";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const { type } = query;

  return (
    <div className="flex h-screen items-center">
      <main className="md:rounded-3xl md:shadow-2xl bg-white h-full md:h-[700px] border md:border-gray-400/2 w-[400px] md:w-[350px] mx-auto overflow-scroll">
        <Header type={type as any} />
        {type === "mother-info" && <MotherInfoForm type={type} />}
        {type === "birth-companion" && <BirthCompanionInfoForm type={type} />}
        {type === "baby-info" && <BabyInfoForm type={type} />}
        {type === "medical-history" && <MedicalHistoryForm type={type} />}
      </main>
    </div>
  );
}
