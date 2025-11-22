'use client';

import React from 'react';
import {Button} from "@/components/ui/button";
import authApiRequests from "@/apiRequests/auth";
import {useRouter} from "next/navigation";
import {handleErrorApi} from "@/lib/utils";

const BtnLogout = () => {
    const router = useRouter();
    const handleLogout = async () => {
        try {
            // Gọi API logout từ client đến server
            await authApiRequests.logoutFromClientToServer();
            router.push("/");
        } catch (error) {
            handleErrorApi({error})
        }
    };
    return (
        <Button size="sm" onClick={handleLogout}>
            Logout
        </Button>
    );
};

export default BtnLogout