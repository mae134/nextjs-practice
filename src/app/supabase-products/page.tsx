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

      <pre className="mt-4">
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  )
}