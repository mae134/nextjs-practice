"use client"

import { useEffect, useState } from "react"

export default function UseEffectPage() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("countが変わりました", count)
  }, [count])

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        useEffect Test
      </h1>

      <p className="mt-4">count: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="border px-4 py-2"
      >
        +1
      </button>
    </main>
  )
}