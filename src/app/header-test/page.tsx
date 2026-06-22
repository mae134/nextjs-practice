import { headers } from "next/headers"

export default async function HeaderTestPage() {
  const headerList = await headers()

  const userAgent = headerList.get("user-agent")
  const host = headerList.get("host")
  const acceptLanguage = headerList.get("accept-language")

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Header Test</h1>

      <div className="mt-4 space-y-2">
        <p>User-Agent: {userAgent}</p>
        <p>Host: {host}</p>
        <p>Accept-Language: {acceptLanguage}</p>
      </div>
    </main>
  )
}