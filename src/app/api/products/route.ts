export async function POST(request: Request) {
  const body = await request.json();

  return Response.json({
    message: "商品を受け取りました",
    product: body,
  });
}