"use client"

import { useState } from "react"
import { createProduct } from "@/lib/products"

export default function InsertProductPage() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleInsert = async () => {
    if (!name || !price) {
      return
    }

    try {
      const data = await createProduct(name, Number(price))

      console.log(data)

      setName("")
      setPrice("")
      setErrorMessage("")
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message)
      }
    }
  }

  return (
    <main className="p-8">
      <div className="space-y-4">
        <div>
          <label>
            商品名
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="ml-2 border px-2 py-1"
            />
          </label>
        </div>

        <div>
          <label>
            価格
            <input
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              className="ml-2 border px-2 py-1"
            />
          </label>
        </div>

        <button
          onClick={handleInsert}
          className="border px-4 py-2"
        >
          商品追加
        </button>
        
        {
          errorMessage && (
            <p className="text-red-500">
              {errorMessage}
            </p>
          )
        }
      </div>
    </main>
  )
}