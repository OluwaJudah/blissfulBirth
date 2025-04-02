import MedicalHistoryForm from "@/components/(auth)/register/details/MedicalHistoryForm";
import Header from "@/components/(auth)/register/details/Header";

export default async function MootherInfo() {
  return (
    <>
      <Header type="medical-history" />
      <MedicalHistoryForm />
    </>
  );
}
