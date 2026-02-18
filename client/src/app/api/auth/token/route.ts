import { cookies } from "next/headers";

export async function GET() {
  const cookiesStore = cookies()
  const accessToken = cookiesStore.get('accessToken')?.value
  const refreshToken = cookiesStore.get('refreshToken')?.value

  if (!accessToken || !refreshToken) {
    return Response.json(
      { message: "Không tìm thấy tokens" },
      { status: 401 }
    )
  }

  return Response.json({
    accessToken,
    refreshToken
  }, { status: 200 })
}

