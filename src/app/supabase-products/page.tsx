import { ProductList } from "./ProductList"
export const dynamic = "force-dynamic"

export default async function SupabaseProductsPage() {

  // 一覧取得
  const response = await fetch("http://localhost:3000/api/supabase-products", {
    cache: "no-store"
  })

  if (!response.ok) {
    const error = await response.json()

    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold">取得失敗</h1>
        <p className="mt-4">{error.message}</p>
      </main>
    )
  }

  const data = await response.json()

  console.log(data)

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Supabase Products</h1>

      <ProductList products={data ?? []} />
    </main>
  )
}