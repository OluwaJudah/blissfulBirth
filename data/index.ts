import {
  CalendarDays,
  Home,
  LogIn,
  SquareArrowUp,
  TrendingUp,
} from "lucide-react";

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
  },
  {
    name: "Birth Companion",
    url: "/profile/details?type=birth-companion",
    image: "/birth_companion.png",
  },
  {
    name: "Baby's Info",
    url: "/profile/details?type=baby-info",
    image: "/baby_2.png",
  },
  {
    name: "Medical History",
    url: "/profile/details?type=medical-history",
    image: "/medical_history.png",
  },
];

export const formTitles = {
  "mother-info": {
    name: "Mother's Info",
    image: "/pregnant_4.png",
    skipUrl: "/register/details?type=birth-companion",
  },
  "birth-companion": {
    name: "Birth Companion",
    image: "/birth_companion.png",
    skipUrl: "/register/details?type=baby-info",
  },
  "baby-info": {
    name: "Baby's Info",
    image: "/baby_2.png",
    skipUrl: "/register/details?type=medical-history",
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

export const medicalHistoryInputDetails = [
  { label: "Details", placeholder: "Enter details of Family history" },
  { label: "Medication", placeholder: "Enter Medications" },
  { label: "Operations", placeholder: "Enter Operations description" },
  { label: "Allergies", placeholder: "Enter Allergies" },
];

export const userNavList = [
  { name: "Home", url: "/home", Icon: Home, bgColor: "pinklet" },
  {
    name: "Appointments",
    url: "/appointments",
    Icon: SquareArrowUp,
    bgColor: "turquoise",
  },
  {
    name: "Profile",
    url: "/profile",
    Icon: SquareArrowUp,
    bgColor: "pinklet",
  },
  { name: "Sign Out", url: "#", Icon: LogIn, bgColor: "pinklet" },
];

export const registerFormData = [
  {
    name: "username",
    label: "Username",
    placeholder: "E.g johnDoe, johndoe@gmail.com, 061 234 5678, etc...",
    iconUrl: "/femaleUser.svg",
    bgColour: "bg-turquoise-50",
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Password",
    iconUrl: "/passwordKey.svg",
    bgColour: "bg-turquoise-50",
  },
  {
    label: "Confirm Password",
    type: "password",
    name: "confirmPassword",
    placeholder: "Confirm Password",
    iconUrl: "/passwordKey.svg",
    bgColour: "bg-turquoise-50",
  },
];
