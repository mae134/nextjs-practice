export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ keyword?: string }>
}) {
  const { keyword } = await searchParams

  return (
    <main className="p-8">
      <h1>検索ページ</h1>
      <p>keyword: {keyword ?? "未指定"}</p>
    </main>
  )
}