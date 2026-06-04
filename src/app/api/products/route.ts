import { createProduct, products} from "@/data/products";

export async function GET() {
  return Response.json(products)
}

export async function POST(request: Request) {
  const body = await request.json();

  const product = await createProduct({
    name: body.name,
    price: body.price,
  })

  return Response.json({
    message: "商品を作成しました",
    product: product,
  },
    {
      status: 201
    }
  )
}