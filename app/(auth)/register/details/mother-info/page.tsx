import MotherInfoForm from "@/components/(auth)/register/details/MotherInfoForm";
import Header from "@/components/(auth)/register/details/Header";
import { getMotherInfo } from "@/data/mother-info";
import { IMotherInfo } from "@/definitions/mother-info";
type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function MootherInfo({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const isExisting = query.isExisting || "";
  const motherInfo = (await getMotherInfo()) as IMotherInfo;

  return (
    <>
      <Header type="mother-info" />
      <MotherInfoForm
        isExistingParam={isExisting}
        motherInfoExisting={motherInfo}
      />
    </>
  );
}
