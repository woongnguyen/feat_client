'use client'

import {useAppContext} from "@/app/app-provider";
import {useEffect} from "react";
import envConfig from "@/config";

export default function Profile() {
    const {sessionToken} = useAppContext()
    useEffect(() => {
        const fetchRequest = async () => {
            const result = await fetch(
                `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/account/me`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${sessionToken}`
                    }
                }
            ).then(async (res) => {
                const payload = await res.json()
                const data = {
                    status: res.status,
                    payload
                }
                if (!res.ok) {
                    throw data
                }
                return data
            })
            console.log('Profile fetch result:', result)
        }
        if (sessionToken) {
            fetchRequest().catch(err => {
                console.error('Error fetching profile:', err)
            })
        }
    }
    , [sessionToken])
    return (
        <div>
            <h2>Profile Component</h2>
            <p>This is the profile component fetching user data.</p>
        </div>
    )
}