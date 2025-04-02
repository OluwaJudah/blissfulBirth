import MotherInfoForm from "@/components/(auth)/register/details/MotherInfoForm";
import Header from "@/components/(auth)/register/details/Header";

export default async function MootherInfo() {
  return (
    <>
      <Header type="mother-info" />
      <MotherInfoForm />
    </>
  );
}
