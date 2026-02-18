import { decodeJWT } from "@/lib/utils";

type PayloadJWT = {
  iat: number,
  exp: number,
  tokenType: string,
  userId: number
}

export async function POST(request: Request) {
  const res = await request.json()
  const accessToken = res.accessToken as string
  const refreshToken = res.refreshToken as string

  if (!accessToken || !refreshToken) {
    return Response.json(
      { message: "Không nhận được tokens" },
      {
        status: 400,
      }
    )
  }

  const accessPayload = decodeJWT<PayloadJWT>(accessToken)
  const refreshPayload = decodeJWT<PayloadJWT>(refreshToken)

  const accessExpiredDate = new Date(accessPayload.exp * 1000).toISOString()
  const refreshExpiredDate = new Date(refreshPayload.exp * 1000).toISOString()

    const response = Response.json(res, {
    status: 200,
  })

  response.headers.append(
    "Set-Cookie",
    `accessToken=${accessToken}; Path=/; HttpOnly; Expires=${accessExpiredDate}; SameSite=Lax; Secure`
  )
  response.headers.append(
    "Set-Cookie",
    `refreshToken=${refreshToken}; Path=/; HttpOnly; Expires=${refreshExpiredDate}; SameSite=Lax; Secure`
  )

  return response
}
