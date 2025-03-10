import BabyInfoForm from "@/components/(protected)/profile/details/BabyInfoForm";
import BirthCompanionInfoForm from "@/components/(protected)/profile/details/BirthCompanionInfoForm";
import Header from "@/components/(protected)/profile/details/Header";
import MedicalHistoryForm from "@/components/(protected)/profile/details/MedicalHistoryForm";
import MotherInfoForm from "@/components/(protected)/profile/details/MotherInfoForm";
import PaymentHistory from "@/components/(protected)/profile/details/PaymentHistory";
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
        {type === "mother-info" && <MotherInfoForm />}
        {type === "birth-companion" && <BirthCompanionInfoForm />}
        {type === "baby-info" && <BabyInfoForm />}
        {type === "medical-history" && <MedicalHistoryForm />}
        {type === "payment-history" && <PaymentHistory />}
      </main>
    </div>
  );
}
