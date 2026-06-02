import Link from "next/link";

const products = [
  { id: "1", name: "りんご", price: 120 },
  { id: "2", name: "みかん", price: 100 },
  { id: "3", name: "バナナ", price: 150 },
];

export default function ProductsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">商品一覧</h1>

      <ul className="mt-4 space-y-2">
        {products.map((product) => (
          <li key={product.id}>
            <Link
              href={`/product/${product.id}`}
              className="underline"
            >
              {product.name} - {product.price}円
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}