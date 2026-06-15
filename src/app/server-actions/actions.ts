"use server"

import { supabase } from "@/lib/supabase"

export async function createProductAction(
  formData: FormData
) {
  const name = formData.get("name")
  const price = Number(formData.get("price"))

  const { error } = await supabase
    .from("products")
    .insert([
      {
        name,
        price,
      },
    ])

  if (error) {
    throw new Error(error.message)
  }

  console.log("insert success")
}