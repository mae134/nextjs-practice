import type { Product, ProductInput } from "@/types/product"

export const products = [
  { id: "1", name: "りんご", price: 120 },
  { id: "2", name: "みかん", price: 100 },
  { id: "3", name: "バナナ", price: 150 },
]

export async function getProduct(id: string) {
  return products.find((product) => product.id === id)
}

export async function updateProduct(id: string, updatedProduct: Product) {
  const product = await getProduct(id)

  if(!product) {
    return null
  }

  product.name = updatedProduct.name
  product.price = updatedProduct.price

  return product
}

export async function deleteProduct(id: string) {
  const index = products.findIndex((p) => p.id === id)

  if (index === -1) {
    return null
  }

  const deletedProduct = products[index]

  products.splice(index, 1)

  return deletedProduct
} 

export async function createProduct(input: ProductInput) {
  const product: Product = {
    id: String(products.length + 1),
    name: input.name,
    price: input.price,
  }

  products.push(product)

  console.log("products", products)

  return product
}