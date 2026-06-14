import { createProduct } from "@/data/mockProducts"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

async function createProductAction(formData: FormData) {
  "use server"

  const name = String(formData.get("name"))
  const price = Number(formData.get("price"))

  await createProduct({
    name,
    price,
  })

  // /productsのキャッシュを捨てて次に表示するとき再取得
  revalidatePath("/products")

  // 商品一覧ページにリダイレクト
  redirect("/products")
}

export default function NewProductPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">商品作成</h1>

      <form action={createProductAction} className="mt-4 space-y-4">
        <div>
          <label>
            商品名
            <input
              name="name"
              className="ml-2 border px-2 py-1"
            />
          </label>
        </div>

        <div>
          <label>
            価格
            <input
              name="price"
              type="number"
              className="ml-2 border px-2 py-1"
            />
          </label>
        </div>

        <button className="border px-4 py-2" type="submit">
          作成
        </button>
      </form>
    </main>
  )
}