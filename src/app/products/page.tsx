import Link from "next/link";
import type { Product } from "@/types/product"
export const dynamic = "force-dynamic"


export default async function ProductsPage() {

  const response = await fetch(
    "http://localhost:3000/api/products"
  )

  const products: Product[] = await response.json()

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">商品一覧</h1>

      <ul className="mt-4 space-y-2">
        {products.map((product) => (
          <li key={product.id}>
            <Link
              href={`/product/${product.id}`}
              className="underline"
            >
              {product.name} - {product.price}円
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}