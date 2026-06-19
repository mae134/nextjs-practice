import { getProducts } from "@/lib/products"
import { ProductList } from "./ProductList"
import { notFound } from "next/navigation"

export const dynamic = "force-dynamic"

export default async function SupabaseProductsPage() {

  const data = await getProducts()

  if (!data) {
    notFound()
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Supabase Products</h1>
      <ProductList products={data ?? []} />
    </main>
  )
}