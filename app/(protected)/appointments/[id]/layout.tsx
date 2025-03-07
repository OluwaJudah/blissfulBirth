import Header from "@/components/(protected)/appointments/[id]/Header";
import Tabs from "@/components/(protected)/appointments/[id]/Tabs";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen items-center">
      <main className="pb-8 md:rounded-3xl md:shadow-2xl bg-white h-full md:h-[700px] border md:border-gray-400/2 w-[400px] md:w-[350px] mx-auto overflow-scroll">
        <Header />
        <Tabs />
        <div className="flex flex-col gap-[35px] mt-8 px-3">
          <div className="bg-turquoise-100 rounded-3xl h-full pb-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
