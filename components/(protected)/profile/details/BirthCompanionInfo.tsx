import { getBirthCompanionInfo } from "@/data/mother-info";
import { IBirthCompanion } from "@/definitions/mother-info";
import BirthCompanionInfoForm from "./BirthCompanionInfoForm";

const BirthCompanionInfo = async () => {
  const birthCompanionInfo = (await getBirthCompanionInfo()) as IBirthCompanion;

  return <BirthCompanionInfoForm birthCompanionInfo={birthCompanionInfo} />;
};

export default BirthCompanionInfo;
