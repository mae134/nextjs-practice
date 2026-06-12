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
    const response = await fetch("/api/supabase-products", 
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id}),
      }
    )

    if(!response.ok){
      const error = await response.json()
      console.log(error.message)
      return
    }

    router.refresh()
  }

  const handleUpdate = async (id: number) => {
    const response = await fetch("/api/supabase-products",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id, price: 9999}),
      }
    )

    if(!response.ok){
      const error = await response.json()
      console.log(error.message)
      return
    }

    router.refresh()
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