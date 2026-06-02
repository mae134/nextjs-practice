import Link from "next/link"
import { getProduct } from "@/data/products"

const products = [
  { id: "1", name: "りんご", price: 120 },
  { id: "2", name: "みかん", price: 100 },
  { id: "3", name: "バナナ", price: 150 },
]

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const product = await getProduct(id)
  if (!product) {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold">商品が見つかりません</h1>
        <p className="mt-4">ID: {id}</p>
      </main>
    )
  }

  return (
    <main className="p-8">
      <Link href="/products" className="mt-4 inline-block underline">
        商品一覧へ戻る
      </Link>
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="mt-4">価格: {product.price}円</p>
      <p className="mt-2">ID: {product.id}</p>
    </main>
  )
}