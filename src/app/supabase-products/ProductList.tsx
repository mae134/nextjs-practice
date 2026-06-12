"use client"

import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

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
    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id)

    if (!error) {
      router.refresh()
    }

    console.log(error)
  }

  const handleUpdate = async (id: number) => {
    const { error } = await supabase
      .from("products")
      .update({
        price: 9999,
      })
      .eq("id", id)

    if (!error) {
      router.refresh()
    }

    console.log(error)
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