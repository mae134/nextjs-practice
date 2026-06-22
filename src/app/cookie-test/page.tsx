import { cookies } from "next/headers"

export default async function CookieTestPage() {
  const cookieStore = await cookies()

  const allCookies = cookieStore.getAll()

  console.log(allCookies)

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Cookie Test</h1>

      <pre className="mt-4 whitespace-pre-wrap">
        {JSON.stringify(allCookies, null, 2)}
      </pre>
    </main>
  )
}