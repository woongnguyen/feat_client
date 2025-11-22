'use client'

import React, { useEffect, useState } from 'react';
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
import { ModeToggle } from './mode-toggle';
import BtnLogout from "@/components/btn-logout";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('data-href');
        if (targetId) {
            const target = document.getElementById(targetId);
            target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="header bg-[#221E1F] text-white relative min-h-[80px]">
            <div className="--pc-menu w-full hidden md:hidden lg:block">
                <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
                    <div className="nav-container">
                        <Link href="/" className="logo w-[87px] h-[48px] relative overflow-hidden">
                            <Image src="/logo.png" alt="BeaverGrillnb" fill className="object-cover"/>
                        </Link>
                        <ul className="nav-links">
                            <li><Link href="/">Home</Link></li>
                            <li><a href="#" data-href="about" onClick={smoothScroll}>About</a></li>
                            <li><Link href="/menu">Menu</Link></li>
                            <li><a href="#" data-href="gallery" onClick={smoothScroll}>Gallery</a></li>
                            <li><Link href="/order">Online Order</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                        <div className="flex justify-center items-center">
                            <ul className="block list-none mr-2">
                                <li className="inline-block mr-2">
                                    <Link href="/login">Login</Link>
                                </li>
                                <li className="inline-block">
                                    <Link href="/register">Register</Link>
                                </li>
                                <li className="inline-block">
                                    <BtnLogout />
                                </li>
                            </ul>
                            <ModeToggle/>
                        </div>
                    </div>
                </nav>
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
        </div>
    )
}