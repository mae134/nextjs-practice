"use client"

import { useRouter } from "next/navigation"
import { deleteProduct, updateProduct } from "@/lib/products"

type Product = {
  id: number
  name: string
  price: number
}

export function ProductList({
  products,
}: {
  products: Product[]
}) {

  const router = useRouter()

  const handleDelete = async (id: number) => {
    try {
      await deleteProduct(id)

      router.refresh()
    } catch (error) {
      console.error(error)
    }
  }

  const handleUpdate = async (id: number) => {

    try {
      await updateProduct(id, 9999)

      router.refresh()
    }
    catch (error) { 
      console.error(error)
    }
  }

  return (
    <ul className="mt-4 space-y-2">
      {products.map((product) => (
        <li
          key={product.id}
          className="border p-2"
        >
          {product.name} - {product.price}円

          <button
            onClick={() => handleDelete(product.id)}
            className="ml-4 border px-2 py-1"
          >
            削除
          </button>
          <button
            onClick={() => handleUpdate(product.id)}
            className="ml-4 border px-2 py-1"
          >
            価格更新
          </button>
        </li>
      ))}
    </ul>
  )
}