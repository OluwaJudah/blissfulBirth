import { getMedicalHistory } from "@/data/mother-info";
import { defaultMedicalHistoryData } from "@/constants/mother-info";
import MedicalHistoryForm from "./MedicalHistoryForm";

const MedicalHistory = async () => {
  let medicalHistory = defaultMedicalHistoryData;
  const data = await getMedicalHistory();
  if (data) medicalHistory = data;

  return <MedicalHistoryForm medicalHistory={medicalHistory} />;
};

export default MedicalHistory;
