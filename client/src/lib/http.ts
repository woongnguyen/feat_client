import envConfig from "@/config";
import { LoginResType, RefreshTokenResType } from "@/schemaValidations/auth.schema";
import { normalizePath } from "@/lib/utils";
import { redirect } from "next/navigation";

type CustomOptions = Omit<RequestInit, 'body'> & {
  baseUrl?: string | undefined
  body?: unknown
}

const AUTH_ERROR_STATUS = 401

export class HttpError<T = unknown> extends Error {
  status: number
  payload: T | undefined
  constructor({ status, payload }: { status: number; payload: T | undefined }) {
    super('Http Error')
    this.status = status
    this.payload = payload
  }
}

type EntityErrorPayload = {
  message: string
  errors: {
    field: string
    message: string
  }[]
}

export class EntityError extends HttpError {
  status: 422
  payload: EntityErrorPayload
  constructor({
    status,
    payload
  }: {
    status: 422
    payload: EntityErrorPayload
  }) {
    super({ status, payload })
    this.status = status
    this.payload = payload
  }
}

class SessionToken {
  private token = ''
  private refreshToken = ''

  get value() {
    return this.token
  }

  get refreshTokenValue() {
    return this.refreshToken
  }

  set value(token: string) {
    if (typeof window === 'undefined') {
      throw new Error('Can not set on the server side');
    }
    this.token = token
  }

  set refreshTokenValue(token: string) {
    if (typeof window === 'undefined') {
      throw new Error('Can not set on the server side');
    }
    this.refreshToken = token
  }
}

export const clientSessionToken = new SessionToken();

/**
 * Refresh token để tránh multiple refresh calls
 */
let isRefreshing = false

/**
 * Gọi API refresh token
 */
const refreshAccessToken = async (): Promise<string> => {
  const refreshToken = clientSessionToken.refreshTokenValue
  if (!refreshToken) {
    throw new Error('No refresh token available')
  }

  const response = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/refresh-token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ refreshToken })
  })

  if (!response.ok) {
    throw new Error('Refresh token failed')
  }

  const data: RefreshTokenResType = await response.json()

  // Update tokens in memory
  clientSessionToken.value = data.data.accessToken
  clientSessionToken.refreshTokenValue = data.data.refreshToken

  return data.data.accessToken
}

const request = async <Response>(
  method: 'POST' | 'PUT' | 'GET' | 'DELETE',
  url: string,
  options?: CustomOptions | undefined
) => {
  const body = options?.body ? JSON.stringify(options.body) : undefined
  const baseHeaders = {
    'Content-Type': 'application/json',
    'Authorization': clientSessionToken.value ? `Bearer ${clientSessionToken.value}` : ''
  }
  const baseUrl = options?.baseUrl === undefined ? envConfig.NEXT_PUBLIC_API_ENDPOINT : options?.baseUrl

  let res = await fetch(`${baseUrl}${url}`, {
    ...options,
    headers: {
      ...baseHeaders,
      ...options?.headers
    },
    body,
    method
  })

  // Handle 401 - Try refresh token
  if (res.status === AUTH_ERROR_STATUS) {
    if (typeof window !== 'undefined') {
      // Nếu đang refreshing, chờ đến khi refresh xong
      if (isRefreshing) {
        // Đợi 100ms và thử lại với token mới
        await new Promise(resolve => setTimeout(resolve, 100))
        // Retry request với token mới (sau khi refresh xong)
        const baseHeaders = {
          'Content-Type': 'application/json',
          'Authorization': clientSessionToken.value ? `Bearer ${clientSessionToken.value}` : ''
        }
        res = await fetch(`${baseUrl}${url}`, {
          ...options,
          headers: {
            ...baseHeaders,
            ...options?.headers
          },
          body,
          method
        })
      } else {
        try {
          isRefreshing = true

          // Refresh token
          const newAccessToken = await refreshAccessToken()

          // Retry request với token mới
          const baseHeaders = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${newAccessToken}`
          }

          res = await fetch(`${baseUrl}${url}`, {
            ...options,
            headers: {
              ...baseHeaders,
              ...options?.headers
            },
            body,
            method
          })
        } catch (refreshError) {
          // Refresh token failed - Logout user
          await fetch(`/api/auth/logout`, {
            method: 'POST',
            body: JSON.stringify({ force: true }),
            headers: {
              ...baseHeaders
            }
          })
          clientSessionToken.value = ''
          clientSessionToken.refreshTokenValue = ''
          location.href = '/login'
          throw refreshError
        } finally {
          isRefreshing = false
        }
      }
    } else {
      // Server-side handling
      const accessToken = (options?.headers as any)?.Authorization.split('Bearer ')[1]
      redirect(`/logout?sessionToken=${accessToken}`)
    }
  }

  const payload: Response = await res.json()
  const data = {
    status: res.status,
    payload
  }

  if (!res.ok) {
    if (res.status !== AUTH_ERROR_STATUS) {
      throw new HttpError(data)
    }
  }

  // Đảm bảo chỉ chạy trên client side (browser)
  if (typeof window !== 'undefined') {
    // Login / Register - Lưu tokens
    if (['auth/login', 'auth/register'].some((item) => item === normalizePath(url))) {
      clientSessionToken.value = (payload as LoginResType).data.accessToken
      clientSessionToken.refreshTokenValue = (payload as LoginResType).data.refreshToken
    } else if (normalizePath(url) === 'auth/logout') {
      // Logout - Xóa tokens
      clientSessionToken.value = ''
      clientSessionToken.refreshTokenValue = ''
    } else if (normalizePath(url) === 'api/auth') {
      // Sau khi set cookies, cũng lưu vào memory
      // Lưu tokens từ response body nếu có
      if (payload && typeof payload === 'object' && 'accessToken' in payload && 'refreshToken' in payload) {
        clientSessionToken.value = (payload as any).accessToken
        clientSessionToken.refreshTokenValue = (payload as any).refreshToken
      }
    }
  }

  return data
}

const http = {
  get: <Response>(url: string, options?: Omit<CustomOptions, 'body'> | undefined) => {
    return request<Response>('GET', url, options)
  },
  post: <Response, RequestBody = unknown>(url: string, body: RequestBody, options?: Omit<CustomOptions, 'body'> | undefined) => {
    return request<Response>('POST', url, { ...options, body })
  }
}

export default http
