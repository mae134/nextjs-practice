export const products = [
  { id: "1", name: "りんご", price: 120 },
  { id: "2", name: "みかん", price: 100 },
  { id: "3", name: "バナナ", price: 150 },
]

export async function getProduct(id: string) {
  return products.find((product) => product.id === id)
}