"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      })

    console.log(error)

    const {
      data: { user },
    } = await supabase.auth.getUser()

    console.log(user)
  }

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()

    console.log(error)
  }

  return (<div>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
      Login
    </button>
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
      Logout
    </button>
  </div>)
}