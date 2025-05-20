import BabyInfo from "@/components/(protected)/profile/details/BabyInfo";
import BirthCompanionInfo from "@/components/(protected)/profile/details/BirthCompanionInfo";
import BloodResult from "@/components/(protected)/profile/details/BloodResult";
import Header from "@/components/(protected)/profile/details/Header";
import MedicalHistory from "@/components/(protected)/profile/details/MedicalHistory";
import MotherInfo from "@/components/(protected)/profile/details/MotherInfo";
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
        {type === "mother-info" && <MotherInfo />}
        {type === "birth-companion" && <BirthCompanionInfo />}
        {type === "baby-info" && <BabyInfo />}
        {type === "medical-history" && <MedicalHistory />}
        {type === "payment-history" && <PaymentHistory />}
        {type === "blood-result" && <BloodResult />}
      </main>
    </div>
  );
}
