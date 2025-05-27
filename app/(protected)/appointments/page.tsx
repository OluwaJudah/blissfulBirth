import Body from "@/components/(protected)/appointments/Body";
import Header from "@/components/(protected)/Header";

export default function HomePage() {
  const title = "Appointments";
  const imgUrl = "/calendar.svg";

  return (
    <div className="flex h-screen items-center">
      <main className="pb-[40px] md:rounded-3xl md:shadow-2xl bg-turquoise-50 h-full md:h-[700px] border md:border-gray-400/2 w-[400px] md:w-[350px] mx-auto overflow-hidden md:overflow-y-scroll">
        <Header title={title} imgUrl={imgUrl} />
        <Body />
      </main>
    </div>
  );
}
