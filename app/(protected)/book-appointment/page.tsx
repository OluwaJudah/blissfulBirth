import Body from "@/components/(protected)/book-appointment/Body";
import Calendar from "@/components/(protected)/book-appointment/Calendar";
import Header from "@/components/(protected)/book-appointment/Header";

export default function HomePage() {
  return (
    <div className="flex h-screen items-center">
      <main className="md:rounded-3xl md:shadow-2xl bg-white h-full md:h-[700px] border md:border-gray-400/2 w-[400px] md:w-[350px] mx-auto overflow-scroll">
        <Header />
        <Calendar />
        <Body />
      </main>
    </div>
  );
}
