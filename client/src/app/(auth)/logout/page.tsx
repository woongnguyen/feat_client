'use client'
import React, {useEffect} from 'react';
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {clientSessionToken} from "@/lib/http";
import authApiRequests from "@/apiRequests/auth";

const Logout = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const sessionToken = searchParams.get('sessionToken');
    useEffect(() =>{
        if (sessionToken === clientSessionToken.value){
            authApiRequests.logoutFromClientToServer(true).then(() =>{
                router.push(`/login?redirectFrom=${pathname}`);
            })
        }
    }, [sessionToken, router, pathname]);
    return (
        <div>
            Logout Page
        </div>
    );
};

export default Logout;