"use client";
import {
  BabyInfo,
  BirthCompanion,
  MedicalHistory,
  MotherInfo,
} from "@/definitions/mother-info";
import { createContext, useState } from "react";

export const MotherInfoFormContext = createContext<any>({
  propertyForm: null,
  updatePropertyForm: () => null,
});

const motherInfoData = {
  fullName: "",
  surname: "",
  maidenName: "",
  idPassportNo: "",
  dateOfBirth: "",
  contactNumber: "",
  email: "",
  countryOfOrigin: "",
  occupation: "",
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
};

export function MotherInfoFormContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [motherInfo, setMotherInfo] = useState<MotherInfo>({
    ...motherInfoData,
    lastMenstrualDate: "",
  });
  const [birthCompanion, setBirthCompanion] =
    useState<BirthCompanion>(motherInfoData);
  const [babyInfo, setBabyInfo] = useState<BabyInfo>(babyInfoData);
  const [medicalHistory, setMedicalHistory] =
    useState<MedicalHistory>(medicalHistoryData);

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
      }}
    >
      {children}
    </MotherInfoFormContext.Provider>
  );
}
