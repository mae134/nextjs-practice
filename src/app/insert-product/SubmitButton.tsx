"use client"

import { useFormStatus } from "react-dom"

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="border px-4 py-2 ml-2"
    >
      {pending ? "送信中..." : "商品追加"}
    </button>
  )
}