"use client";
import {
  IBabyInfo,
  IBirthCompanion,
  ICreateMotherInfo,
  IMotherInfo,
} from "@/definitions/mother-info";
import { createContext, useState } from "react";

const motherInfoData = {
  fullName: "",
  surname: "",
  maidenName: "",
  idPassportNo: "",
  dateOfBirth: "",
  contactNumber: "",
  email: "",
  status: "",
  countryOfOrigin: "",
  occupation: "",
  isExisting: false,
};

const babyInfoData = {
  fullName: "",
  surname: "",
};

const medicalHistoryData = {
  details: "",
  medication: "",
  operations: "",
  allergies: "",
  conditions: "",
  familyHistory: "",
  tbSymptomsScreen: "",
  motherInfo: "",
  babyInfo: "",
  birthCompanion: "",
};

export const MotherInfoFormContext = createContext<any>({
  motherInfo: motherInfoData,
  setMotherInfo: () => null,
  birthCompanion: motherInfoData,
  setBirthCompanion: () => null,
  babyInfo: babyInfoData,
  setBabyInfo: () => null,
  medicalHistory: medicalHistoryData,
  setMedicalHistory: () => null,
  isExisting: false,
  setIsExisting: () => null,
});

export function MotherInfoFormContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [motherInfo, setMotherInfo] = useState<any>({
    ...motherInfoData,
    dateOfBirth: new Date(),
    lastMenstrualDate: new Date(),
  });
  const [birthCompanion, setBirthCompanion] = useState<IBirthCompanion>({
    ...motherInfoData,
    dateOfBirth: new Date(),
  });
  const [babyInfo, setBabyInfo] = useState<IBabyInfo>(babyInfoData);
  const [medicalHistory, setMedicalHistory] =
    useState<ICreateMotherInfo>(medicalHistoryData);
  const [isExisting, setIsExisting] = useState(false);

  // adding this code 👇🏽
  return (
    <MotherInfoFormContext.Provider
      value={{
        motherInfo,
        setMotherInfo,
        birthCompanion,
        setBirthCompanion,
        babyInfo,
        setBabyInfo,
        medicalHistory,
        setMedicalHistory,
        isExisting,
        setIsExisting,
      }}
    >
      {children}
    </MotherInfoFormContext.Provider>
  );
}
