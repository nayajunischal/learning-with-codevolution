"use client"
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    { name: 'Register', href: '/register' },
    { name: 'Login', href: '/login' },
    { name: 'Forgot Password', href: '/forgot-password' }
]
export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [input, setInput] = useState("");
    const pathName = usePathname();
    return (
        <div>
            <input type="text" value={input} className="text-black text-xl p-4" onChange={(e) => setInput(e.target.value)} />
            {navLinks.map((link) => {
                const isActive = pathName.startsWith(link.href);

                return (
                    <Link className={clsx('m-2 ', {
                        'text-blue-500 font-bold': isActive,
                        'text-red-400': !isActive
                    })} href={link.href} key={link.name}>{link.name}</Link>
                )
            })}
            {children}
        </div>
    );
}
