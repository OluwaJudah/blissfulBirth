import Header from "@/components/(protected)/Header";
import Body from "@/components/(protected)/home/Body";

export default function HomePage() {
  const title = "Hi Yanela";
  const imgUrl = "/user_1.svg";

  return (
    <div className="flex h-screen items-center">
      <main className="pb-[40px] md:rounded-3xl md:shadow-2xl bg-turquoise-50 h-full md:h-[700px] border md:border-gray-400/2 w-[400px] md:w-[350px] mx-auto overflow-x-hidden">
        <Header title={title} imgUrl={imgUrl} />
        <Body />
      </main>
    </div>
  );
}
