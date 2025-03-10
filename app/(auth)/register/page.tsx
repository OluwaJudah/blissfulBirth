import Register from "@/components/(auth)/register/Register";
import Welcome from "@/components/(auth)/register/Welcome";
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const { type } = query;

  return (
    <>
      {type === "welcome" && <Welcome />}
      {!type && <Register />}
    </>
  );
}
