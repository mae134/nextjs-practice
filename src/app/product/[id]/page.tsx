import Link from "next/link"
import { Metadata } from "next"
export const dynamic = "force-dynamic"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {

  const { id } = await params

  const response = await fetch(
    `http://localhost:3000/api/products/${id}`
  )

  if (!response.ok) {
    return {
      title: "商品が見つかりません",
      description: "商品が存在しません",
    }
  }

  const product = await response.json()

  return {
    title: product.name,
    description: `${product.name}の商品詳細ページ`,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const response = await fetch(
    `http://localhost:3000/api/products/${id}`
  )

  if (!response.ok) {
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold">商品が見つかりません</h1>
        <p className="mt-4">ID: {id}</p>
      </main>
    )
  }

  const product = await response.json()

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