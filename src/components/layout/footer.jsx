import Link from "next/link";

export function Footer() {
    return <FooterContent />;
}

export default function FooterContent() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#FAFAF8] py-16 border-t border-gray-100">
            <div className="container mx-auto px-6 flex flex-col items-center">

                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 mb-10 transition-transform hover:scale-105">
                    <img src="/logo.png" alt="GFG Logo" className="h-24 w-auto object-contain" />
                </Link>

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