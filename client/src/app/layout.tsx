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
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
    title: "Beaver Grill — A Taste of Home, A World of Flavor",
    description: "Best Asian cuisine restaurant in town. Great food, friendly service, and a cozy feel - dine in or grab it to go.",
    openGraph: {
        title: 'Beaver Grill — A Taste of Home, A World of Flavor',
        description: 'Best Asian cuisine restaurant in town. Great food, friendly service, and a cozy feel - dine in or grab it to go.',
        url: 'https://beavergrillnb.com',
        siteName: 'Beaver Grill Asian Restaurant',
        images: [
            {
                url: '/beaver-grill-asian-restaurant.jpg', // 1200x630px recommended
                width: 1427,
                height: 630,
                alt: 'Beaver Grill — A Taste of Home, A World of Flavor',
            }
        ],
        locale: 'en_CA',
        type: 'website',
    }
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
