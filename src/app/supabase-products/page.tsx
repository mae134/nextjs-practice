import { supabase } from "@/lib/supabase"

export default async function SupabaseProductsPage() {

  // 一覧取得
  const { data, error } = await supabase
    .from("products")
    .select("*")

  if (error) {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold">取得失敗</h1>
        <p className="mt-4">{error.message}</p>
      </main>
    )
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Supabase Products</h1>

      <ul className="mt-4 space-y-2">
        {data?.map((product) => (
          <li
            key={product.id}
            className="border p-2"
          >
            {product.name} - {product.price}円
          </li>
        ))}
      </ul>
    </main>
  )
}