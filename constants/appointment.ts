export const FIRST_APPOINTMENT = "first_appointment";
export const APPOINTMENT = "appointment";
export const CONFIRMED_APPOINTMENT = "confirmed";
export const COMPLETED_APPOINTMENT = "completed";
export const firstAppointmentTimeSlots = ["9:00 AM", "11:00 AM", "02:00 PM"];
export const firstAppointmentTrimester = ["3rd", "2nd", "1st"];
export const appointmentWeeks = [
  8, 13, 18, 21, 24, 28, 30, 32, 34, 36, 37, 38, 39, 40,
];
export const trimesters = ["1st", "2nd", "3rd"];
export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const pregnancySymptoms = [
  {
    week: 1,
    mother:
      "This is the first day of your last period — you’re not pregnant yet, but your body is preparing for ovulation.",
    baby: "No baby yet — just the beginning of your menstrual cycle.",
  },
  {
    week: 2,
    mother:
      "Ovulation may occur this week. Your body releases an egg, ready for fertilization.",
    baby: "Still no baby, but conception may happen if sperm meets egg.",
  },
  {
    week: 3,
    mother: "Fertilization may occur now. You may not feel anything yet.",
    baby: "The fertilized egg is now a zygote and begins dividing.",
  },
  {
    week: 4,
    mother: "You might experience implantation spotting and mild cramps.",
    baby: "The embryo implants into the uterus. hCG hormone production begins.",
  },
  {
    week: 5,
    mother: "You may miss your period and get a positive pregnancy test.",
    baby: "The embryo is growing rapidly and the neural tube is forming.",
  },
  {
    week: 6,
    mother: "Nausea and fatigue may start. Your body is adjusting to hormones.",
    baby: "The heart is beating and facial features begin to form.",
  },
  {
    week: 7,
    mother:
      "Breasts may feel tender. Food aversions and mood swings are common.",
    baby: "Arms and legs begin forming. Brain growing rapidly.",
  },
  {
    week: 8,
    mother: "You may have frequent urination and morning sickness.",
    baby: "Fingers and toes are developing. Baby is constantly moving (though you won’t feel it yet).",
  },
  {
    week: 9,
    mother: "Your uterus is growing. You might feel bloated or constipated.",
    baby: "Baby’s heartbeat can be detected via ultrasound. Eyes and ears forming.",
  },
  {
    week: 10,
    mother: "Symptoms may intensify — nausea, mood swings, and fatigue.",
    baby: "All vital organs are formed. Baby is now officially a fetus.",
  },
  {
    week: 11,
    mother: "You might notice changes in hair and nails. Bloating may persist.",
    baby: "Fingers and toes are no longer webbed. External genitals begin forming.",
  },
  {
    week: 12,
    mother:
      "Your uterus is rising above your pelvis. Morning sickness may ease.",
    baby: "Reflexes are developing. Baby may start to make movements.",
  },
  {
    week: 13,
    mother: "Welcome to the second trimester! You may feel more energized.",
    baby: "Vocal cords and teeth start to develop. Baby's head is more proportionate.",
  },
  {
    week: 14,
    mother:
      "Your skin may glow. Some women develop a linea nigra (dark line on belly).",
    baby: "Facial expressions develop. Baby can squint and frown.",
  },
  {
    week: 15,
    mother: "You might notice a baby bump starting. Weight gain begins.",
    baby: "Bones hardening. Baby might respond to light and sound soon.",
  },
  {
    week: 16,
    mother: "You may feel fluttering movements (quickening) soon.",
    baby: "Muscles strengthening. Baby’s eyes can move slightly.",
  },
  {
    week: 17,
    mother: "Increased appetite and energy may return.",
    baby: "Fat stores begin forming. Skeleton is changing from cartilage to bone.",
  },
  {
    week: 18,
    mother: "You may feel baby kicks! Backaches may start.",
    baby: "Ears are in final position. Baby can hear sounds now.",
  },
  {
    week: 19,
    mother: "Stretch marks may appear. Skin may feel itchy.",
    baby: "Vernix caseosa forms — a protective coating on baby’s skin.",
  },
  {
    week: 20,
    mother: "Halfway there! Anatomy scan is usually done now.",
    baby: "Baby is swallowing, and digestive system is developing.",
  },
  {
    week: 21,
    mother: "You may feel strong kicks. Leg cramps or swelling can begin.",
    baby: "Baby is gaining weight. Movements become more coordinated.",
  },
  {
    week: 22,
    mother: "Stretch marks and skin changes continue.",
    baby: "Lips, eyelids, and eyebrows are formed. Taste buds are developing.",
  },
  {
    week: 23,
    mother: "You may notice Braxton Hicks contractions.",
    baby: "Lungs are developing. Baby can hear and may respond to your voice.",
  },
  {
    week: 24,
    mother: "You may experience lower back pain and bloating.",
    baby: "Baby reaches viability outside the womb with intensive care.",
  },
  {
    week: 25,
    mother: "Shortness of breath and frequent urination increase.",
    baby: "Baby’s skin is wrinkled, but fat is starting to build.",
  },
  {
    week: 26,
    mother: "You might notice more vivid dreams and insomnia.",
    baby: "Eyes begin to open. Lungs continue to develop.",
  },
  {
    week: 27,
    mother: "End of second trimester. Fatigue may return.",
    baby: "Brain tissue is developing rapidly. Hearing is fully functional.",
  },
  {
    week: 28,
    mother: "Welcome to the third trimester! You might feel more tired.",
    baby: "Eyes can open and close. Dream (REM) sleep begins.",
  },
  {
    week: 29,
    mother: "You may experience heartburn and shortness of breath.",
    baby: "Muscles and lungs are maturing. Baby is growing steadily.",
  },
  {
    week: 30,
    mother: "Your belly is expanding. Balance may feel off.",
    baby: "Bone marrow is producing red blood cells. Brain growth continues.",
  },
  {
    week: 31,
    mother: "Sleep may become uncomfortable. Frequent urination continues.",
    baby: "Baby can turn head side to side. A layer of fat is developing.",
  },
  {
    week: 32,
    mother: "You may feel clumsy and experience Braxton Hicks contractions.",
    baby: "Baby’s toenails and fingernails are fully formed.",
  },
  {
    week: 33,
    mother: "You may notice colostrum leakage from breasts.",
    baby: "Skull remains soft and flexible. Immune system developing.",
  },
  {
    week: 34,
    mother: "Pelvic pressure and leg cramps may increase.",
    baby: "Baby’s skin is smoother. Lungs almost fully mature.",
  },
  {
    week: 35,
    mother: "Your body is preparing for labor. Baby may drop lower.",
    baby: "Kidneys are fully developed. Liver is processing waste.",
  },
  {
    week: 36,
    mother: "You may have difficulty sleeping and feel heavier.",
    baby: "Baby is gaining weight rapidly and practicing breathing.",
  },
  {
    week: 37,
    mother: "You’re considered early term. Nesting instinct may kick in.",
    baby: "Baby’s organs are ready. Head may be engaged in pelvis.",
  },
  {
    week: 38,
    mother: "Labor signs may start. Keep hospital bag ready.",
    baby: "Lanugo (fine hair) is shedding. Baby’s brain still developing.",
  },
  {
    week: 39,
    mother: "You’re full term. Contractions may increase.",
    baby: "Baby’s lungs are mature. Fat continues to build for temperature regulation.",
  },
  {
    week: 40,
    mother:
      "You’ve reached your due date! Be ready for signs of labor any time.",
    baby: "Baby is fully developed and ready for birth. About the size of a watermelon.",
  },
];
