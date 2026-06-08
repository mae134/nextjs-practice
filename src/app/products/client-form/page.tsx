"use client"

import { useState } from "react"

export default function ClientFormPage() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)

    // 実際には待機時間があるので、試しに3秒待つ
    await new Promise((resolve) =>
      setTimeout(resolve, 3000)
    )

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
    setLoading(false)

    console.log(data)
  }

  return (
    <main className="p-8">
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="border px-4 py-2"
      >
        {loading ? "作成中..." : "作成"}
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