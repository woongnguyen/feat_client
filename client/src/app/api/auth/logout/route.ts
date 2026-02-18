import { cookies } from "next/headers";
import authApiRequests from "@/apiRequests/auth";
import { HttpError } from "@/lib/http";

export async function POST(request: Request) {
  const res = await request.json()
  const force = res.force as boolean | undefined;

  if (force) {
    return Response.json({
      message: 'Logout successfully',
    }, {
      status: 200,
      headers: {
        "Set-Cookie": [
          `accessToken=; Path=/; HttpOnly; Max-Age=0`,
          `refreshToken=; Path=/; HttpOnly; Max-Age=0`
        ].join(', ')
      }
    })
  }

  const cookiesStore = cookies()
  const accessToken = cookiesStore.get('accessToken')

  if (!accessToken) {
    return Response.json(
      { message: "Không nhận được access token" },
      {
        status: 400,
      }
    )
  }

  try {
    const result = await authApiRequests.logoutFromServerToAPI(accessToken.value)
    return Response.json(result.payload, {
      status: 200,
      headers: {
        "Set-Cookie": [
          `accessToken=; Path=/; HttpOnly; Max-Age=0`,
          `refreshToken=; Path=/; HttpOnly; Max-Age=0`
        ].join(', ')
      }
    })
  } catch (error) {
    if (error instanceof HttpError) {
      return Response.json(error.payload,
        {
          status: error.status,
        }
      )
    } else {
      return Response.json(
        { message: "Đăng xuất thất bại" },
        {
          status: 500,
        }
      )
    }
  }
}
