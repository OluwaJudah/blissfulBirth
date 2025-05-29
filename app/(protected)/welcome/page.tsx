import Welcome from "@/components/(auth)/register/Welcome";
type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const isExisting = query.isExisting || "";

  return (
    <>
      <Welcome isExisting={isExisting} />
    </>
  );
}
