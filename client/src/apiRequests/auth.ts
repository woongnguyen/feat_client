import {LoginBodyType, LoginResType, RegisterBodyType, RegisterResType} from "@/schemaValidations/auth.schema";
import http from "@/lib/http";
import {MessageResType} from "@/schemaValidations/common.schema";

const authApiRequests = {
  login: (body: LoginBodyType) => http.post<LoginResType>('/auth/login', body),
  register: (body: RegisterBodyType) =>
    http.post<RegisterResType>('/auth/register', body),
  auth: (body: { accessToken: string; refreshToken: string }) =>
    http.post('/api/auth', body, { baseUrl: '' }),
  logoutFromServerToAPI: (accessToken: string) =>
    http.post<MessageResType>('/auth/logout', {}, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }),
  logoutFromClientToServer: (force?: boolean | undefined) =>
    http.post<MessageResType>('/api/auth/logout', {
      force
    }, { baseUrl: '' }),
  // Lấy tokens từ cookies (server-side) để khôi phục vào memory (client-side)
  getTokensFromCookies: () =>
    fetch('/api/auth/token', { method: 'GET' }).then(res => {
            if (!res.ok) {
        throw new Error(`Failed to fetch tokens: ${res.status} ${res.statusText}`.trim())
      }
      return res.json() as Promise<{ accessToken: string; refreshToken: string }>
    }),
}

export default authApiRequests