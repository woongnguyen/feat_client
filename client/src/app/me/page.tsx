"use client"

import { useEffect, useState } from "react"
import Profile from "@/app/me/profile"
import accountApiRequests from "@/apiRequests/account"

export default function MeProfile() {
  const [data, setData] = useState<{ name: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        // Sử dụng meClient() - tự động lấy token từ clientSessionToken
        const result = await accountApiRequests.meClient()
        setData(result.payload.data)
      } catch (err: any) {
        // Refresh token sẽ tự động handle trong http.ts
        setError(err.message || "Lỗi khi tải thông tin")
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <div className="overflow-auto m-auto max-w-[980px]">Loading...</div>
  }

  if (error) {
    return <div className="overflow-auto m-auto max-w-[980px]">Error: {error}</div>
  }

  if (!data) {
    return null
  }

  return (
    <div className="overflow-auto m-auto max-w-[980px]">
      <h1>Profile</h1>
      <div>Welcome {data.name}</div>
      <Profile />
    </div>
  )
}
