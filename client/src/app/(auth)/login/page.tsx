import LoginForm from "@/app/(auth)/login/login-form";


export default function LoginPage() {
    return (
        <div className="flex justify-center flex-col max-w-[400px] mx-auto">
            <h1 className="text-xl font-semibold text-center">Login</h1>
            <LoginForm />
        </div>
    )
}