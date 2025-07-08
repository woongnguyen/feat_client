import RegisterForm from "@/app/(auth)/register/register-form";

export default function RegisterPage() {
    return (
        <div className="flex justify-center flex-col max-w-[400px] mx-auto">
            <h1 className="text-xl font-semibold text-center">Register</h1>
            <RegisterForm/>
        </div>
    )
}
