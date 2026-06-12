import { supabase } from "@/lib/supabase"

export async function GET() {
  const { data, error } = await supabase
    .from("products")
    .select("*")

  if (error) {
    return Response.json({ message: error.message }, { status: 500 })
  }

  return Response.json(data)
}

export async function POST(request: Request) {
  const body = await request.json()

  const { data, error } =
    await supabase
      .from("products")
      .insert([
        { name: body.name, price: body.price },
      ])
      .select()

  if (error) {
    return Response.json({ message: error.message }, { status: 500 })
  }

  return Response.json(data)
}