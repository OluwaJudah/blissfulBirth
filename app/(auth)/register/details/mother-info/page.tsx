import MotherInfoForm from "@/components/(auth)/register/details/MotherInfoForm";
import Header from "@/components/(auth)/register/details/Header";
type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function MootherInfo({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const isExisting = query.isExisting || "";

  return (
    <>
      <Header type="mother-info" />
      <MotherInfoForm isExistingParam={isExisting} />
    </>
  );
}
