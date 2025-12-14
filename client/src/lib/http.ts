import envConfig from "@/config";
import {LoginResType} from "@/schemaValidations/auth.schema";
import {normalizePath} from "@/lib/utils";
import {redirect} from "next/navigation";

type CustomOptions = Omit<RequestInit, 'body'> & {
    baseUrl? : string | undefined
    body?: unknown
}

const AUTH_ERROR_STATUS = 401

export class HttpError<T = unknown> extends Error {
    status: number
    payload: T | undefined
    constructor({status, payload}: {status: number; payload: T | undefined}) {
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
    get value() {
        return this.token
    }
    set value(token: string) {
        if (typeof window === 'undefined') {
            throw new Error('Can not set on the server side');
        }
        this.token = token
    }
}

export const clientSessionToken = new SessionToken();

const request = async <Response> (
    method: 'POST' | 'PUT' | 'GET' | 'DELETE',
    url: string,
    options?: CustomOptions | undefined) => {
    const body = options?.body ? JSON.stringify(options.body) : undefined
    const baseHeaders = {
        'Content-Type': 'application/json',
        'Authorization': clientSessionToken.value ? `Bearer ${clientSessionToken.value}` : ''
    }
    const baseUrl = options?.baseUrl === undefined ? envConfig.NEXT_PUBLIC_API_ENDPOINT : options?.baseUrl
    const res = await fetch(`${baseUrl}${url}`, {
        ...options,
        headers:{
            ...baseHeaders,
            ...options?.headers
        },
        body,
        method
    })
    const payload: Response = await res.json()
    const data = {
        status: res.status,
        payload
    }
    if (!res.ok) {
        if (res.status === AUTH_ERROR_STATUS){
            if (typeof window !== 'undefined'){
                await fetch(`/api/auth/logout`, {
                    method: 'POST',
                    body: JSON.stringify({force: true}),
                    headers: {
                        ...baseHeaders,
                    }
                })
                clientSessionToken.value = ''
                location.href = '/login'
            }
            else{
                const sessionToken = (options?.headers as any)?.Authorization.split('Bearer ')[1]
                redirect(`/logout?sessionToken=${sessionToken}`)
            }
        }
        else throw new HttpError(data)
    }
    // đảm bảo chỉ chạy trên client side (brơwser)
    if (typeof window !== 'undefined') {
        if(['auth/login', 'auth/register'].some(item => item === normalizePath(url))) {
            clientSessionToken.value = (payload as LoginResType).data.token
        }else if (normalizePath(url) === 'auth/logout') {
            clientSessionToken.value = ''
        }

    }
    return data
}

const http = {
    get: <Response>(url: string, options?: Omit<CustomOptions, 'body'> | undefined) => {
        return request<Response>('GET', url, options)
    },
    post: <Response, RequestBody = unknown>(url: string, body: RequestBody, options?: Omit<CustomOptions, 'body'> | undefined) => {
        return request<Response>('POST', url, {...options, body})
    },
    // put: <Response, RequestBody = unknown>(url: string, body: RequestBody,  options?: Omit<CustomOptions, 'body'> | undefined) => {
    //     return request<Response>('PUT', url, {...options, body})
    // },
    // delete: <Response, RequestBody = unknown>(url: string, body: RequestBody, options?: Omit<CustomOptions, 'body'> | undefined) => {
    //     return request<Response>('DELETE', url, {...options, body})
    // }
}

export default http
