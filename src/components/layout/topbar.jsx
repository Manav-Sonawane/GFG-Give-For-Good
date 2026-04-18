import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

export default function Topbar() {
    return (
        <div className="w-full px-6 py-4 bg-[#FAFAF8]">
            <nav className="mx-auto max-w-7xl px-8 py-4 flex items-center justify-between">

                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-[#0F8E58] p-1.5 rounded-lg transition-transform group-hover:scale-105">
                        <Leaf className="h-5 w-5 text-white fill-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-[#1D4D3F]">
                        DonateConnect
                    </span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-10">
                    <Link
                        href="/how-it-works"
                        className="text-sm font-semibold text-[#0F8E58] relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-[#0F8E58]"
                    >
                        How it Works
                    </Link>
                    <Link
                        href="/ngos"
                        className="text-sm font-medium text-gray-600 hover:text-[#0F8E58] transition-colors"
                    >
                        NGOs
                    </Link>
                    <Link
                        href="/impact"
                        className="text-sm font-medium text-gray-600 hover:text-[#0F8E58] transition-colors"
                    >
                        Impact
                    </Link>
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