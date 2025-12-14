import {LoginBodyType, LoginResType, RegisterBodyType, RegisterResType} from "@/schemaValidations/auth.schema";
import http from "@/lib/http";
import {MessageResType} from "@/schemaValidations/common.schema";

const authApiRequests = {
    login: (body: LoginBodyType) => http.post<LoginResType>('/auth/login', body),
    register: (body: RegisterBodyType) =>
        http.post<RegisterResType>('/auth/register', body),
    auth: (body: {sessionToken: string}) =>
        http.post('/api/auth', body, {baseUrl: ''}),
    logoutFromServerToAPI: (sessionToken: string) =>
        http.post<MessageResType>('/auth/logout', {}, {
            headers: {
                Authorization: `Bearer ${sessionToken}`
            }
        }),
    logoutFromClientToServer: (force?: boolean | undefined) =>
        http.post<MessageResType>('/api/auth/logout', {
            force
        }, {baseUrl: ''}),
}

export default authApiRequests