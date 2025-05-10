import Body from "@/components/(protected)/new-intake/Body";
import Header from "@/components/(protected)/new-intake/Header";
import { getMotherInfoData } from "@/data/mother-info";
import { calculatePregnancyWeeks } from "@/utils";

export default async function HomePage() {
  const date = await getMotherInfoData("lastMenstrualDate createdAt");
  let pregnancyWeeks = 0;
  if (date) {
    const { lastMenstrualDate, createdAt } = date;
    if (lastMenstrualDate && createdAt) {
      pregnancyWeeks = calculatePregnancyWeeks(lastMenstrualDate, createdAt);
    }
  }

  return (
    <div className="flex h-screen items-center">
      <main className="md:rounded-3xl md:shadow-2xl bg-white h-full md:h-[750px] border md:border-gray-400/2 w-[400px] md:w-[350px] mx-auto overflow-y-hidden md:overflow-y-scroll">
        <Header />
        <Body pregnancyWeeks={pregnancyWeeks} />
      </main>
    </div>
  );
}
