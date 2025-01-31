import Header from "@/components/Header";
import Link from "next/link";

export default function Page({ children }: { children: React.ReactNode }) {
  const schedulesNos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <Header />
      <div className="h-full items-center p-2 md:p-6">
        <main>
          <div className="font-semibold mb-2 text-xl text-black focus:outline-none focus:opacity-80 dark:text-white mb-2">
            Appointments
          </div>

          <h3 className="text-base font-medium">Weeks</h3>
          <div className="overflow-x-auto py-4">
            <div className="flex items-center gap-2  w-[550px]">
              {schedulesNos.map((num) => (
                <Link
                  href={`/schedules/${num}`}
                  key={num}
                  className="flex shadow-md hover:shadow-xl transition delay-150 duration-300 ease-in-out justify-center items-center size-12 border border-black-800 rounded-full"
                >
                  {num}
                </Link>
              ))}
            </div>
          </div>
          {children}
        </main>
      </div>
    </>
  );
}
