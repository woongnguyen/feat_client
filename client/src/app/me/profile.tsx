'use client'

import {useEffect} from "react";
import accountApiRequests from "@/apiRequests/account";

export default function Profile() {
    useEffect(() => {
        const fetchRequest = async () => {
            const result = await accountApiRequests.meClient()
            console.log(result)
        }
        fetchRequest().catch(err => {
            console.error('Error fetching profile:', err)
        })
    }, [])
    return (
        <div>
            <h2>Profile Component</h2>
            <p>This is the profile component fetching user data.</p>
        </div>
    )
}