import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#FAFAF8] py-16 border-t border-gray-100">
            <div className="container mx-auto px-6 flex flex-col items-center">

                {/* Logo Section */}
                <div className="flex items-center gap-2 mb-10">
                    <Leaf className="h-5 w-5 text-[#0F8E58] fill-[#0F8E58]" />
                    <span className="text-2xl font-bold tracking-tight text-[#1D4D3F]">
                        DonateConnect
                    </span>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-12">
                    <Link
                        href="/privacy"
                        className="text-sm font-medium text-muted-foreground hover:text-[#0F8E58] transition-colors"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/terms"
                        className="text-sm font-medium text-muted-foreground hover:text-[#0F8E58] transition-colors"
                    >
                        Terms of Service
                    </Link>
                    <Link
                        href="/partners"
                        className="text-sm font-medium text-muted-foreground hover:text-[#0F8E58] transition-colors"
                    >
                        NGO Partners
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm font-medium text-muted-foreground hover:text-[#0F8E58] transition-colors"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Copyright Section */}
                <div className="text-center">
                    <p className="text-sm text-muted-foreground/60 tracking-wide">
                        © {currentYear} Editorial Altruism. All missions reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}