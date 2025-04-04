import Body from "@/components/(protected)/first-appointment/Body";
import Header from "@/components/(protected)/first-appointment/Header";

export default async function HomePage() {
  return (
    <div className="flex items-center">
      <main className="h-[730px] md:h-full md:rounded-3xl md:mt-8 md:shadow-xl bg-white border md:border-gray-400/2 w-[400px] md:w-[350px] mx-auto overflow-hidden">
        <Header />
        <Body />
      </main>
    </div>
  );
}
