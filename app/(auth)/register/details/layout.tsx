import { MotherInfoFormContextProvider } from "@/context/mother-info";
export default async function HomePage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen items-center">
      <main className="md:rounded-3xl md:shadow-2xl bg-white h-full md:h-[700px] border md:border-gray-400/2 w-[400px] md:w-[350px] mx-auto overflow-scroll">
        <MotherInfoFormContextProvider>
          {children}
        </MotherInfoFormContextProvider>
      </main>
    </div>
  );
}
