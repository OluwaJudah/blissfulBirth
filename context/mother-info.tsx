"use client";
import {
  IBabyInfo,
  IBirthCompanion,
  ICreateMotherInfo,
} from "@/definitions/mother-info";
import { createContext, useState, useEffect } from "react";

const STORAGE_KEY = "motherInfoForm";

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

  // ✅ Load from localStorage (no expiry)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.motherInfo) setMotherInfo(parsed.motherInfo);
        if (parsed.birthCompanion) setBirthCompanion(parsed.birthCompanion);
        if (parsed.babyInfo) setBabyInfo(parsed.babyInfo);
        if (parsed.medicalHistory) setMedicalHistory(parsed.medicalHistory);
        if (typeof parsed.isExisting === "boolean")
          setIsExisting(parsed.isExisting);
      }
    } catch (err) {
      console.error("Error loading motherInfo data", err);
    }
  }, []);

  // ✅ Save to localStorage (no expiry)
  useEffect(() => {
    const payload = {
      motherInfo,
      birthCompanion,
      babyInfo,
      medicalHistory,
      isExisting,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [motherInfo, birthCompanion, babyInfo, medicalHistory, isExisting]);

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
