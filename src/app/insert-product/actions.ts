"use server"

import { supabase } from "@/lib/supabase"
import { productSchema } from "@/schemas/product"
import { revalidatePath } from "next/cache"

export async function createProductAction(formData: FormData) {
  const body = {
    name: formData.get("name"),
    price: Number(formData.get("price")),
  }

  const result = productSchema.safeParse(body)

  if (!result.success) {
    console.log(result.error.issues[0]?.message)
    return
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
    console.log(error.message)
    return
  }

  revalidatePath("/supabase-products")
}