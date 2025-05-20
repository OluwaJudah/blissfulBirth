import { getMotherInfo } from "@/data/mother-info";
import MotherInfoUpdateForm from "./MotherInfoForm";
import { IMotherInfo } from "@/definitions/mother-info";

const MotherInfo = async () => {
  const motherInfo = (await getMotherInfo()) as IMotherInfo;
  return <MotherInfoUpdateForm motherInfo={motherInfo} />;
};

export default MotherInfo;
