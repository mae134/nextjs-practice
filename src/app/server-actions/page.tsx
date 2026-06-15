import { createProductAction } from "./actions"

export default function Page() {
  return (
    <main className="p-8">
      <form action={createProductAction}>
        <input
          name="name"
          placeholder="商品名"
        />

        <input
          name="price"
          placeholder="価格"
        />

        <button>
          追加
        </button>
      </form>
    </main>
  )
}