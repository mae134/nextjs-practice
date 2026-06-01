

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <main className="p-8">
      <h1>商品詳細</h1>
      <p>ID: {id}</p>
    </main>
  )
}