import Link from "next/link";
import { Menu } from 'lucide-react';
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet"

export default function Header() {

    return (
        <div className="header bg-neutral-900 text-white">
            <div className="--wrap container mx-auto relative">
                <div className="--pc-menu w-full hidden md:hidden lg:block">
                    <ul className="block text-center">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/menu">Menu</Link>
                        </li>
                        <li>
                            <Link href="/order">Online Order</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="--sp-menu w-full md:show lg:hidden text-center max-sm:p-2">
                    <a href="/" className="inline-block mt-2.5">
                        <Image src="/logo.png" alt="Logo" width={56} height={56} />
                    </a>
                    <Sheet>
                        <SheetTrigger className="inline-block float-right mt-[22px]"><Menu/></SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader>
                                <SheetTitle></SheetTitle>
                                <SheetDescription>
                                </SheetDescription>
                            </SheetHeader>
                            <div className="text-xl text-yellow-600 font-playfair">
                                <ul className="block text-left">
                                    <li className="border-b-[2px] border-white py-3">
                                        <SheetClose asChild>
                                            <Link href="/">Home</Link>
                                        </SheetClose>
                                    </li>
                                    <li className="border-b-[2px] border-white py-3">
                                        <SheetClose asChild>
                                            <Link href="/menu">Menu</Link>
                                        </SheetClose>
                                    </li>
                                    <li className="border-b-[2px] border-white py-3">
                                        <SheetClose asChild>
                                            <Link href="/order">Online Order</Link>
                                        </SheetClose>
                                    </li>
                                    <li className="py-3">
                                        <SheetClose asChild>
                                            <Link href="/contact">Contact</Link>
                                        </SheetClose>
                                    </li>
                                </ul>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="--register absolute top-0 right-10 hidden">
                    <ul>
                        <li>
                            <Link href="/login">Login</Link>
                        </li>
                        <li>
                            <Link href="/register">Register</Link>
                        </li>

                    </ul>
                    {/*<ModeToggle />*/}
                </div>
            </div>
            <div className="heading">
                <div className="--wrap container mx-auto relative">
                    <p>Beaver Grill Express</p>
                </div>
            </div>
        </div>
    )
}