"use server"

import { supabase } from "@/lib/supabase"
import { productSchema } from "@/schemas/product"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

type ActionState = {
  success: boolean
  message: string
}

export async function createProductAction(prevState: ActionState, formData: FormData): Promise<ActionState> {
  const body = {
    name: formData.get("name"),
    price: Number(formData.get("price")),
  }

  const result = productSchema.safeParse(body)

  if (!result.success) {
    return {
      success: false,
      message: result.error.issues[0]?.message ?? "入力エラー",
    }
  }

  const { error } = await supabase
    .from("products")
    .insert([
      {
        name: result.data.name,
        price: result.data.price,
      },
    ])

  if (error) {
    return {
      success: false,
      message: error.message,
    }
  }

  revalidatePath("/supabase-products")

  redirect("/supabase-products")
}