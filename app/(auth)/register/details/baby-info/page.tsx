import BabyInfoForm from "@/components/(auth)/register/details/BabyInfoForm";
import Header from "@/components/(auth)/register/details/Header";

export default async function MootherInfo() {
  return (
    <>
      <Header type="baby-info" />
      <BabyInfoForm />
    </>
  );
}
