import { getProduct, updateProduct, deleteProduct } from "@/data/mockProducts";
import type { Product } from "@/types/product"

export async function GET(
  request: Request,
  { params }: {
    params: Promise<{ id: string }>
  }
) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    return Response.json(
      {
        message: "商品が見つかりません",
      },
      {
        status: 404,
      }
    );
  }

  return Response.json(product);
}

export async function PUT(
  request: Request,
  { params }: {
    params: Promise<{ id: string }>
  }
) {
  const { id } = await params

  const body = await request.json()

  const updatedProduct: Product = {
    id: id,
    name: body.name,
    price: body.price,
  }

  const product = await updateProduct(id, updatedProduct)

  if (!product) {
    return Response.json(
      {
        message: "商品が見つかりません",
      },
      {
        status: 404,
      }
    )
  }

  return Response.json({
    message: "商品を更新しました",
    id,
    product: product,
  })
}

export async function DELETE(
  request: Request,
  { params }: {
    params: Promise<{ id: string }>
  }
) {
  const { id } = await params

  const deletedProduct = await deleteProduct(id)

  if (!deletedProduct) {
    return Response.json(
      {
        message: "商品が見つかりません",
      },
      {
        status: 404,
      }
    );
  }

  return Response.json({
    message: "商品を削除しました",
    id,
  })
}