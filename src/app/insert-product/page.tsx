"use client"

import { useState } from "react"

export default function InsertProductPage() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const handleInsert = async () => {
    if (!name || !price) {
      return
    }

    const response = await fetch("/api/supabase-products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price: Number(price),
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.log(error.message)
      return
    }

    const data = await response.json()
    console.log(data)

    setName("")
    setPrice("")
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
      </div>
    </main>
  )
}