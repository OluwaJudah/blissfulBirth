export type IAppointment = {
  type: string;
  time: string;
  date: Date;
  status: string;
  note: string;
  pregnancyWeeks: number;
};

export type IBabyReport = {
  _id?: string;
  babyWeight: number;
  babyHeight: number;
  babyHeartRate: number;
  babyPosition: string;
  babyNote: string;
};

export type IMotherReport = {
  _id?: string;
  motherWeight: number;
  motherBloodPressure: string;
  motherPulse: number;
  motherLeucosite: string;
  motherGlucose: string;
  motherProtein: string;
  motherPalpation: number;
  motherFh: number;
  motherNote: string;
};
