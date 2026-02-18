'use client'
import React, { useMemo } from 'react';
import {clientSessionToken} from "@/lib/http";

export default function AppProvider({
    children,
    initialSessionToken = '',
    initialRefreshToken = ''
}: {
    children: React.ReactNode
    initialSessionToken?: string
    initialRefreshToken?: string
}) {
    // Sử dụng useMemo để set tokens ĐỒNG BỘ trong quá trình render
    // Điều này đảm bảo tokens được set TRƯỚC khi children render
    useMemo(() => {
        if (typeof window !== 'undefined') {
            if (initialSessionToken) {
                clientSessionToken.value = initialSessionToken
            }
            if (initialRefreshToken) {
                clientSessionToken.refreshTokenValue = initialRefreshToken
            }
        }
    }, [initialSessionToken, initialRefreshToken])

    return <>{children}</>
}