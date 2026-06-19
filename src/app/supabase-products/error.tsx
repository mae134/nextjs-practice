"use client"

type ErrorProps = {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="p-8">
      <h1 className="text-xl font-bold text-red-500">
        エラーが発生しました
      </h1>

      <p>{error.message}</p>

      <button
        onClick={reset}
        className="mt-4 border px-4 py-2"
      >
        再読み込み
      </button>
    </main>
  )
}