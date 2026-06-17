
export async function deleteProduct(id: number) {
  const response = await fetch("/api/supabase-products",
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    }
  )

  if (!response.ok) {
    const error = await response.json()

    throw new Error(error.message)
  }

  return response.json()
}

export async function updateProduct(id: number, price: number) {
  const response = await fetch("/api/supabase-products",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, price }),
    }
  )

  if (!response.ok) {
    const error = await response.json()

    throw new Error(error.message)
  }

  return response.json()
}

export async function createProduct(name: string, price: number) {
  const response = await fetch("/api/supabase-products",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price }),
    }
  )

  if (!response.ok) {
    const error = await response.json()

    throw new Error(error.message)
  }

  return response.json()
}

export async function getProducts() {

  // TODO:urlを後々環境変数化する
  const response = await fetch("http://localhost:3000/api/supabase-products", {
    cache: "no-store"
  })

  if (!response.ok) {
    const error = await response.json()

    throw new Error(error.message)
  }

  return response.json()
}