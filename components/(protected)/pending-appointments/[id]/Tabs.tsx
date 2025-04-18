"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";

const Tabs = () => {
  const { id } = useParams<{ id: string }>();
  const pathname = usePathname();
  const baseUrl = `/pending-appointments/${id}`;
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const fromParams = from === "home" ? "?from=home" : "";

  const tabs = [
    {
      name: "My Baby",
      url: `${baseUrl}/my-baby${fromParams}`,
      pathname: `${baseUrl}/my-baby`,
      icon: "/baby_2.png",
    },
    {
      name: "My Body",
      url: `${baseUrl}/my-body${fromParams}`,
      pathname: `${baseUrl}/my-body`,
      icon: "/pregnant_4.png",
    },
  ];

  return (
    <div className="flex flex-col gap-[35px] px-3">
      <div className="flex justify-between space-x-5 w-full">
        {tabs.map((t) => (
          <Link
            key={t.name}
            href={t.url}
            className={`flex place-items-center basis-1/2 h-[80px] p-3 rounded-2xl ${
              pathname === t.pathname
                ? "bg-pinklet-200 shadow-2xl"
                : "bg-pinklet-100"
            }`}
          >
            <div className="flex items-center">
              <Image src={t.icon} height={100} width={45} alt="Baby 2" />
              <span>{t.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
