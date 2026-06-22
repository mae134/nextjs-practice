"use client"

import { useOptimistic, useState, startTransition } from "react"

export default function OptimisticTestPage() {
  const [likes, setLikes] = useState(0)

  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (currentLikes) => currentLikes + 1
  )

  const handleLike = async () => {

    // 楽観的UI更新を開始（React 19ではstartTransitionまたはAction内で実行する）
    startTransition(() => {
      addOptimisticLike(undefined)
    })

    // API通信の代わりに1秒待機
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // 実際の状態を更新
    // （失敗した場合は楽観的stateが破棄され、元の表示に戻る）
    setLikes((prev) => prev + 1)
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Optimistic Test</h1>

      <p className="mt-4">いいね: {optimisticLikes}</p>

      <button
        onClick={handleLike}
        className="mt-4 border px-4 py-2"
      >
        いいね
      </button>
    </main>
  )
}