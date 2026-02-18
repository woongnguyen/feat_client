"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import {LoginBody, LoginBodyType} from "@/schemaValidations/auth.schema";
import authApiRequests from "@/apiRequests/auth";
import {useRouter} from "next/navigation";

export default function LoginForm() {
    const route= useRouter()
    const form = useForm<LoginBodyType>({
        resolver: zodResolver(LoginBody),
        defaultValues: {
            email: "",
            password: ""
        },
    })
    async function onSubmit(values: LoginBodyType) {
        try{
            const result = await authApiRequests.login(values)
            toast(result?.payload?.message)
            await authApiRequests.auth({
                accessToken: result.payload.data.accessToken,
                refreshToken: result.payload.data.refreshToken
            })
            route.push('/me')
        }
        catch (error: unknown) {
            if (error && typeof error === 'object' && 'payload' in error && 'status' in error) {
                const errorObj = error as { payload: { errors?: {field: string, message: string}[], message?: string }, status: number }
                const errors = errorObj.payload.errors || []
                const status = errorObj.status
                if (status === 422) {
                    errors.forEach(error =>{
                        form.setError(error.field as 'email' | 'password', {
                            type: 'server',
                            message: error.message
                        })
                    })
                }
                else{
                    console.error(error)
                    toast("Error", {
                        description: errorObj.payload.message || "Đã xảy ra lỗi"
                    })
                }
            } else {
                console.error(error)
                toast("Đã xảy ra lỗi không xác định")
            }
        }
    }
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2" noValidate autoComplete="off">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="!mt-8 w-full" type="submit">Login</Button>
                </form>
            </Form>
        </div>
    )
}
