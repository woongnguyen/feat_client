import {cookies} from "next/headers";
import authApiRequests from "@/apiRequests/auth";
import {HttpError} from "@/lib/http";


export async function POST(request: Request){
    const res = await request.json()
    const force = res.force as boolean | undefined;
    if (force) {
        return Response.json({
            message: 'Logout successfully',
        }, {
            status: 200,
            headers : {
                "Set-Cookie": `sessionToken=; Path=/; HttpOnly; Max-Age=0`
            }
        })
    }
    const cookiesStore = cookies()
    const sessionToken = cookiesStore.get('sessionToken')
    if (!sessionToken){
        return Response.json(
            {message: "không nhận được session token"},
            {
                status: 400,
            }
        )
    }
    try {
        const result = await authApiRequests.logoutFromServerToAPI(sessionToken.value)
        return Response.json(result.payload, {
            status: 200,
            headers : {
                "Set-Cookie": `sessionToken=; Path=/; HttpOnly; Max-Age=0`
            }
        })
    }
    catch (error){
        if (error instanceof HttpError){
            return Response.json(error.payload,
                {
                    status: error.status,
                }
            )
        }
        else{
            return Response.json(
                {message: "đăng xuất thất bại"},
                {
                    status: 500,
                }
            )
        }
    }
}