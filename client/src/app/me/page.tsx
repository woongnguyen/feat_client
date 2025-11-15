import {cookies} from "next/headers";
import Profile from "@/app/me/profile";
import accountApiRequests from "@/apiRequests/account";

export default async function MeProfile(){
    const cookieStore = cookies()
    const sessionToken = cookieStore.get('sessionToken')
    const result = await accountApiRequests.me(sessionToken?.value ?? '')
    return (
        <div className="overflow-auto m-auto max-w-[980px] ">
            <h1>Profile</h1>
            <div>Welcome {result.payload.data.name}</div>
            <Profile />
        </div>
    )
}