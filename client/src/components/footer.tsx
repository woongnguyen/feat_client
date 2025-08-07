'use client'

import Link from "next/link";
import { useActiveRoute } from "@/hooks/useActiveRoute";

export default function Footer() {
    const isActive = useActiveRoute()
    return (
        <div className="footer bg-neutral-900 text-white">
            <div className="--wrap container mx-auto relative pt-8 pb-14">
                <ul className="block text-center">
                    <li className={`inline-block px-4 ${isActive('/', true) ? 'text-[#7A674E]' : ''}`}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={`inline-block px-4 ${isActive('/menu', true) ? 'text-[#7A674E]' : ''}`}>
                        <Link href="/menu">Menu</Link>
                    </li>
                    <li className={`inline-block px-4 ${isActive('/order', true) ? 'text-[#7A674E]' : ''}`}>
                        <Link href="/order">Online Order</Link>
                    </li>
                    <li className={`inline-block px-4 ${isActive('/contact', true) ? 'text-[#7A674E]' : ''}`}>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
                <div className="w-full text-center mt-2">
                    <p>#2 - 623 Carlton Trail, North Battleford, SK, Canada, S9A 3K2</p>
                    <p>Phone: (306) 441 - 9040</p>
                    <p className="text-[#7A674E] mt-2">Facebook: <Link href="https://www.facebook.com/profile.php?id=61577973737222" target="_blank">Beaver&#39;s Grill Restaurant</Link></p>
                </div>
            </div>
        </div>
    )
}