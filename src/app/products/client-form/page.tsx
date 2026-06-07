"use client"

import { useState } from "react"

export default function ClientFormPage() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async () => {
    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price: Number(price),
      }),
    })

    const data = await response.json()

    setName("")
    setPrice("")
    setMessage(data.message)

    console.log(data)
  }

  return (
    <main className="p-8">
      <button
        onClick={handleSubmit}
        className="border px-4 py-2"
      >
        テスト
      </button>

      <h1 className="text-3xl font-bold">Client Component Form</h1>

      <div className="mt-4 space-y-4">
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

        <p>商品名: {name}</p>
        <p>価格: {price}</p>
      </div>
      {message && (
        <p className="text-green-600">{message}</p>
      )}
    </main>
  )
}