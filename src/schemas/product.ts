import { z } from "zod"

export const productSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "商品名は必須です"),

  price: z
    .number()
    .min(1, "価格は1円以上にしてください"),
})

export type ProductInput = z.infer<typeof productSchema>