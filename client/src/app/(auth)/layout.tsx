import './auth-style.css'

export default function AuthLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="m-auto max-w-[980px] px-4 py-12">
            {children}
        </div>
    )
}