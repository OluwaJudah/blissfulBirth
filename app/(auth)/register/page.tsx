import Register from "@/components/(auth)/register/Register";
type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = await searchParams;
  const id = query.id || "";

  return (
    <>
      <Register id={id} />
    </>
  );
}
