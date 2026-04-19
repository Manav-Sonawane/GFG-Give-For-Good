"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Topbar() {
    const pathname = usePathname() || "/";

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "How it Works", href: "/how-it-works" },
        { name: "NGOs", href: "/ngos" },
        { name: "Impact", href: "/impact" },
        { name: "Matches", href: "/matches" },
        { name: "Leaderboard", href: "/leaderboard" },
    ];

    return (
        <div className="w-full px-6 py-4 bg-[#FAFAF8]">
            <nav className="mx-auto max-w-7xl px-8 py-4 flex items-center justify-between">

                {/* Logo Section */}
                <Link href="/" className="px-6 flex items-center transition-transform hover:scale-105">
                    <img src="/logo.png" alt="GFG Logo" className="h-30 w-auto object-contain" />
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={
                                    isActive
                                        ? "text-sm font-semibold text-[#0F8E58] relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-[#0F8E58]"
                                        : "text-sm font-medium text-gray-600 hover:text-[#0F8E58] transition-colors"
                                }
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-8">
                    <Link
                        href="/login"
                        className="text-sm font-semibold text-[#0F8E58] hover:underline decoration-2 underline-offset-4"
                    >
                        Login
                    </Link>
                    <Button
                        className="rounded-full px-7 py-5 bg-[#0F8E58] hover:bg-[#0D7A4B] text-white font-bold text-sm shadow-md transition-all hover:shadow-lg active:scale-95"
                    >
                        Donate Now
                    </Button>
                </div>

            </nav>
        </div>
    );
}