import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, ShieldCheck, Zap, ExternalLink, HandHelping } from 'lucide-react';
import Topbar from '@/components/layout/topbar';
import Footer from '@/components/layout/footer';

export default function NotFoundAndEmpty() {
    return (
        <>
            <Topbar />
            <main className="min-h-screen flex flex-col items-center justify-center space-y-32 py-20 px-8 bg-background">

                {/* 404 Error State Section */}
                <section className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-16 md:gap-24">
                    <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
                        <div className="relative w-full aspect-square bg-surface-container rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,84,64,0.04)]">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5Q6lY98Q9INc4kx4bEXY9p5XOLifpZlV0igUXxHbsMjoQVJyQRX2qs_E0W-uLvpRuNl-4S5f5r3xfEM_icIpi9uw73l_owmuLmADgdkuHVYJFOfFMHvE8NwPXryBVEXZZ85mSbkkU_h6Cc1nindukFyiSV7qxyP-mLtnzugtvZxLWeyrhkCwQrH6poySC6ayT6ao66gqO6mCxa6tD_t3gyEKYqKEUH4QPS6UW9gBuda4ciHi87ZBfAoGpM-xQT6cg-Ck4NPHwgWY" // Replace with your actual asset path
                                alt="Lost in thought"
                                fill
                                className="object-cover grayscale opacity-80 mix-blend-multiply"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col space-y-8 order-1 md:order-2">
                        <div className="space-y-4">
                            <span className="text-secondary font-medium tracking-widest text-xs uppercase">
                                Error 404
                            </span>
                            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-primary leading-tight">
                                Page not found
                            </h1>
                            <p className="text-lg text-on-surface-variant max-w-md leading-relaxed opacity-80">
                                The path you're looking for seems to have vanished. It might have been moved or the link is incorrect. Let's find your way back.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/"
                                className="bg-primary text-on-primary px-8 py-4 rounded-full font-medium hover:bg-primary-container transition-all flex items-center justify-center gap-2 group"
                            >
                                Back to home
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <div className="w-24 h-px bg-outline-variant/30" />

                {/* Updated Empty State Section - Redesigned to match the UI */}
                <section className="max-w-6xl w-full bg-[#f4f4f2]/80 border border-[#bec9c3]/50 rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center">

                    {/* Updated Icon & Tag */}
                    <div className="relative mb-12">
                        <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-[0_8px_32px_-12px_rgba(0,0,0,0.08)]">
                            <HandHelping className="w-20 h-20 text-[#bec9c3]" />
                        </div>
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#fd7549] text-white px-5 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase">
                            New Journey
                        </div>
                    </div>

                    <div className="max-w-2xl space-y-6">
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-[#005440]">
                            You haven't posted any donations yet
                        </h2>
                        <p className="text-lg text-[#3f4944] leading-relaxed opacity-80">
                            Your impact journey starts with a single gesture. Share resources, provide support, and see the tangible change you can bring to local NGOs.
                        </p>
                    </div>

                    {/* Updated Button and Link */}
                    <div className="mt-12 flex flex-col items-center space-y-6">
                        <button className="bg-[#005440] text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#005440]/90 transition-all shadow-lg active:scale-95">
                            Post your first donation
                        </button>
                        <Link
                            href="/ngos"
                            className="text-[#005440] font-medium hover:underline text-sm flex items-center gap-2 transition-all"
                        >
                            View matching NGO requests
                            <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    {/* Bento Grid - Retaining function, matching new containers */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-24">
                        <div className="bg-white p-8 rounded-2xl text-left flex flex-col gap-6 justify-between h-52 group hover:bg-[#005440] border border-[#bec9c3]/30 transition-all duration-300 shadow-sm">
                            <ShieldCheck className="w-6 h-6 text-[#005440] group-hover:text-white transition-colors" />
                            <p className="text-sm font-medium leading-snug text-[#1a1c1b] group-hover:text-white transition-colors">
                                Every donation is tracked and verified for maximum transparency.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl text-left flex flex-col gap-6 justify-between h-52 group hover:bg-[#005440] border border-[#bec9c3]/30 transition-all duration-300 shadow-sm">
                            <Zap className="w-6 h-6 text-[#005440] group-hover:text-white transition-colors" />
                            <p className="text-sm font-medium leading-snug text-[#1a1c1b] group-hover:text-white transition-colors">
                                Quick matches with local NGOs that need your specific items today.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl text-left flex flex-col gap-6 justify-between h-52 group hover:bg-[#005440] border border-[#bec9c3]/30 transition-all duration-300 shadow-sm">
                            <Heart className="w-6 h-6 text-[#005440] group-hover:text-white transition-colors" />
                            <p className="text-sm font-medium leading-snug text-[#1a1c1b] group-hover:text-white transition-colors">
                                Build direct relationships with the communities you support.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}