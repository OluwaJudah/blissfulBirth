import { CalendarDays, TrendingUp } from "lucide-react";

export const steps = [1, 2, 3, 4];
export const steps2 = [1, 2];
export const services = [
  { name: "Antenatal Care", img: "/services_1.png" },
  { name: "Birthing Unit", img: "/services_2.png" },
];
export const features = [
  { name: "Track Pregnancy", Icon: TrendingUp },
  { name: "Manage Appointments", Icon: CalendarDays },
];
export const schedulesNos = [
  8, 13, 18, 21, 24, 28, 30, 32, 34, 36, 37, 38, 39, 40, 41, 42,
];

export const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

export const profileInfos = [
  {
    name: "Mother's Info",
    url: "/profile/details?type=mother-info",
    image: "/pregnant_4.png",
    bgColor: "turquoise",
  },
  {
    name: "Birth Companion",
    url: "/profile/details?type=birth-companion",
    image: "/birth_companion.png",
    bgColor: "pinklet",
  },
  {
    name: "Baby's Info",
    url: "/profile/details?type=baby-info",
    image: "/baby_2.png",
    bgColor: "turquoise",
  },
  {
    name: "Medical History",
    url: "#",
    image: "/medical_history.png",
    bgColor: "pinklet",
  },
];

export const formTitles = {
  "mother-info": {
    name: "Mother's Info",
    image: "/pregnant_4.png",
  },
  "birth-companion": {
    name: "Birth Companion",
    image: "/birth_companion.png",
  },
  "baby-info": {
    name: "Baby's Info",
    image: "/baby_2.png",
  },
  "medical-history": {
    name: "Medical History",
    image: "/medical_history.png",
  },
};

export const paymentHistory = [
  {
    name: "Consultation Fee",
    date: "20 Jan 2025",
    amount: "280",
  },
  {
    name: "Birthing Unit Fee",
    date: "20 Jan 2025",
    amount: "7,280",
  },
  {
    name: "Birthing Unit Fee",
    date: "20 Jan 2025",
    amount: "1,280",
  },
  {
    name: "Birthing Unit Fee",
    date: "20 Jan 2025",
    amount: "2,280",
  },
  {
    name: "Birthing Unit Fee",
    date: "20 Jan 2025",
    amount: "1,200",
  },
  {
    name: "Birthing Unit Fee",
    date: "20 Jan 2025",
    amount: "2,780",
  },
];

export const babyInputDetails = [
  { label: "Full Name", placeholder: "E.g John" },
  { label: "Surname", placeholder: "E.g Doe" },
];

export const motherInputDetails = [
  { label: "Full Name", placeholder: "E.g John" },
  { label: "Surname", placeholder: "E.g Doe" },
  { label: "Maiden Name", placeholder: "E.g Doe" },
  { label: "ID / Passport", placeholder: "E.g 93023234000 / D2341SDFASDF" },
  { label: "Date of Birth", type: "date" },
  { label: "Country of Origin", placeholder: "E.g South Africa" },
  { label: "Day Job / Occupation", placeholder: "E.g Nurse" },
  {
    label: "Contact Number",
    placeholder: "E.g 0677123123123",
    isPhoneNumber: true,
  },
  { label: "Email Address", placeholder: "E.g john@doe.com", type: "email" },
];
