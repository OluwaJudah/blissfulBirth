import BirthCompanionInfoForm from "@/components/(auth)/register/details/BirthCompanionInfoForm";
import Header from "@/components/(auth)/register/details/Header";

export default async function MootherInfo() {
  return (
    <>
      <Header type="birth-companion" />
      <BirthCompanionInfoForm />
    </>
  );
}
