import type {Metadata} from "next"
import "./globals.css"
import {Roboto_Condensed, Playfair_Display, Sacramento} from "next/font/google"
import {ThemeProvider} from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const roboto_condensed = Roboto_Condensed({
    subsets: ["latin"],
    display: 'swap',
    variable: '--font-roboto',
})
const playfair = Playfair_Display({
    subsets: ["latin"],
    display: 'swap',
    variable: '--font-playfair-display',
})
const sacramento = Sacramento({
    subsets: ["latin"],
    display: 'swap',
    weight: "400",
    variable: '--font-sacramento',
})

export const metadata: Metadata = {
    title: "Beaver Grill Asian Restaurant",
    description: "Best asian Cuisine In Town!",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${roboto_condensed.className} ${playfair.variable} ${sacramento.variable} antialiased`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            <Header/>
            {children}
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}
