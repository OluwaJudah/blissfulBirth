import { getBabyInfo } from "@/data/mother-info";
import { IBabyInfo } from "@/definitions/mother-info";
import BabyInfoFormUpdateForm from "./BabyInfoForm";

const BabyInfo = async () => {
  const babyInfoForm = (await getBabyInfo()) as IBabyInfo;

  return <BabyInfoFormUpdateForm babyInfoForm={babyInfoForm} />;
};

export default BabyInfo;
