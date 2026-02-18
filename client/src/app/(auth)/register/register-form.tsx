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
import {RegisterBody, RegisterBodyType} from "@/schemaValidations/auth.schema";
import auth from "@/apiRequests/auth";
import {toast} from "sonner";
import authApiRequests from "@/apiRequests/auth";
import {useRouter} from "next/navigation";

export default function RegisterForm() {
    const route= useRouter()
    const form = useForm<RegisterBodyType>({
        resolver: zodResolver(RegisterBody),
        defaultValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: ""
        },
    })
    async function onSubmit(values: RegisterBodyType) {
        const result = await auth.register(values)
        toast(result?.payload?.message)
        await authApiRequests.auth({
            accessToken: result.payload.data.accessToken,
            refreshToken: result.payload.data.refreshToken
        })
        route.push('/me')
    }
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2" noValidate autoComplete="off">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm password</FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="!mt-8 w-full" type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}
