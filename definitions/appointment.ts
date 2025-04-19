export type IAppointment = {
  type: string;
  time: string;
  date: string;
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
  motherUrine: number;
  motherPalpation: number;
  motherBloodPressure: number;
  motherFh: number;
  motherNote: string;
};
