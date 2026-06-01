"use client"

import { useRouter } from "next/navigation"

export default function Home() {

  const router = useRouter()

  const handleClick = () => {
    router.push("/about")
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Next.js練習開始！
      </h1>

      <p className="mt-4">
        Reactとの違いを学ぶ
      </p>

      <button
        onClick={handleClick}
        className="mt-4 border px-4 py-2"
      >
        Aboutへ移動
      </button>

    </main>
  )
}