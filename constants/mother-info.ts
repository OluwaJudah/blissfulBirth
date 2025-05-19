export const formTitles = {
  "mother-info": {
    name: "Mother's Info",
    image: "/pregnant_4.png",
    skipUrl: "/register/details/birth-companion",
  },
  "birth-companion": {
    name: "Birth Companion",
    image: "/birth_companion.png",
    skipUrl: "/register/details/baby-info",
  },
  "baby-info": {
    name: "Baby's Info",
    image: "/baby_2.png",
    skipUrl: "/register/details/medical-history",
  },
  "medical-history": {
    name: "Medical History",
    image: "/medical_history.png",
    skipUrl: "/book-appointment?type=book",
  },
  "payment-history": {
    name: "Payment History",
    image: "/payment_history.png",
    skipUrl: "#",
  },
  "blood-result": {
    name: "Blood Result",
    image: "/blood-sample.png",
    skipUrl: "#",
  },
};

const today = new Date();
const sixteenYearsAgo = new Date( // 16 years before
  today.getFullYear() - 16,
  today.getMonth(),
  today.getDate()
);

const fortyWeeksLater = new Date();
fortyWeeksLater.setDate(today.getDate() - 40 * 7); // 40 weeks = 280 days
const formatDate = (date: Date) => date.toISOString().split("T")[0];

export const motherInputFormData = [
  {
    name: "fullName",
    label: "Full Name",
    placeholder: "E.g John",
    bgColour: "bg-turquoise-100",
    isRequired: true,
  },
  {
    name: "surname",
    label: "Surname",
    placeholder: "E.g Doe",
    bgColour: "bg-turquoise-100",
    isRequired: true,
  },
  {
    name: "maidenName",
    label: "Maiden Name",
    placeholder: "E.g Doe",
    bgColour: "bg-turquoise-100",
  },
  {
    name: "idPassportNo",
    label: "ID / Passport",
    placeholder: "E.g 93023234000 / D2341SDFASDF",
    bgColour: "bg-turquoise-100",
    isRequired: true,
  },
  {
    name: "dateOfBirth",
    label: "Date of Birth",
    type: "date",
    bgColour: "bg-turquoise-100",
    max: formatDate(sixteenYearsAgo),
    isRequired: true,
  },
  {
    name: "lastMenstrualDate",
    label: "Last Menstrual Date",
    type: "date",
    bgColour: "bg-turquoise-100",
    min: formatDate(fortyWeeksLater),
    max: formatDate(today),
    isRequired: true,
  },
  {
    name: "contactNumber",
    label: "Contact Number",
    placeholder: "E.g 0677123123123",
    bgColour: "bg-turquoise-100",
    isPhoneNumber: true,
    isRequired: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "E.g john@doe.com",
    bgColour: "bg-turquoise-100",
  },
  {
    name: "countryOfOrigin",
    label: "Country of Origin",
    placeholder: "E.g South Africa",
    bgColour: "bg-turquoise-100",
    isRequired: true,
  },
  {
    name: "occupation",
    label: "Day Job / Occupation",
    placeholder: "E.g Nurse",
    bgColour: "bg-turquoise-100",
  },
];

export const babyInfoFormData = [
  {
    name: "fullName",
    label: "Full Name",
    placeholder: "E.g John",
    bgColour: "bg-turquoise-100",
    isRequired: true,
  },
  {
    name: "surname",
    label: "Surname",
    placeholder: "E.g Doe",
    bgColour: "bg-turquoise-100",
    isRequired: true,
  },
];

export const medicalHistoryFormData = [
  {
    name: "details",
    label: "Details",
    placeholder: "Enter details of Family history",
    bgColour: "bg-turquoise-100",
  },
  {
    name: "medication",
    label: "Medication",
    placeholder: "Enter Medications",
    bgColour: "bg-turquoise-100",
  },
  {
    name: "operations",
    label: "Operations",
    placeholder: "Enter Operations description",
    bgColour: "bg-turquoise-100",
  },
  {
    name: "allergies",
    label: "Allergies",
    placeholder: "Enter Allergies",
    bgColour: "bg-turquoise-100",
  },
];

export const birthCompanionFormData = [
  {
    name: "fullName",
    label: "Full Name",
    placeholder: "E.g John",
    bgColour: "bg-turquoise-100",
    isRequired: true,
  },
  {
    name: "surname",
    label: "Surname",
    placeholder: "E.g Doe",
    bgColour: "bg-turquoise-100",
    isRequired: true,
  },
  {
    name: "maidenName",
    label: "Maiden Name",
    placeholder: "E.g Doe",
    bgColour: "bg-turquoise-100",
  },
  {
    name: "idPassportNo",
    label: "ID / Passport",
    placeholder: "E.g 93023234000 / D2341SDFASDF",
    bgColour: "bg-turquoise-100",
    isRequired: true,
  },
  {
    name: "dateOfBirth",
    label: "Date of Birth",
    type: "date",
    bgColour: "bg-turquoise-100",
    max: formatDate(sixteenYearsAgo),
    isRequired: true,
  },
  {
    name: "contactNumber",
    label: "Contact Number",
    placeholder: "E.g 0677123123123",
    bgColour: "bg-turquoise-100",
    isPhoneNumber: true,
    isRequired: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "E.g john@doe.com",
    bgColour: "bg-turquoise-100",
  },
  {
    name: "countryOfOrigin",
    label: "Country of Origin",
    placeholder: "E.g South Africa",
    bgColour: "bg-turquoise-100",
    isRequired: true,
  },
  {
    name: "occupation",
    label: "Day Job / Occupation",
    placeholder: "E.g Nurse",
    bgColour: "bg-turquoise-100",
  },
];

export const defaultMedicalHistoryData = {
  details: "",
  medication: "",
  operations: "",
  allergies: "",
  conditions: "",
  familyHistory: "",
  tbSymptomsScreen: "",
};

export const defaultBloodResultData = {
  date: "",
  bloodGroup: "",
  glucose: 0,
  hb: 0,
  hiv: "",
  hepatitis: "",
  notes: "",
  rpr: "",
  rubella: "",
};
