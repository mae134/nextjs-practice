import { getProducts } from "@/lib/products"
import { ProductList } from "./ProductList"
import { notFound } from "next/navigation"
import type { Metadata } from "next";

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "商品一覧",
  description: "Supabaseの商品一覧ページ",
};

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