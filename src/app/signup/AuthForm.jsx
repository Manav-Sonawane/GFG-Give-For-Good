"use client";

import React, { useState } from 'react';
import { Heart, Building2, Eye, EyeOff, Upload } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AuthForm() {
    const [showPassword, setShowPassword] = useState(false);
    const pathname = usePathname();
    const activeTab = pathname?.includes('login') ? 'login' : 'signup';
    const [role, setRole] = useState('donor');
    const [fileName, setFileName] = useState("");

    return (
        <div className="flex flex-col flex-1">
            {/* Tab Navigation */}
            <div className="flex space-x-8 mb-6 border-b border-[#e2e3e1] flex-shrink-0">
                <Link
                    href="/signup"
                    className={`pb-3 text-sm font-medium transition-all ${activeTab === 'signup' ? 'border-b-2 border-[#005440] text-[#005440]' : 'text-[#3f4944] hover:text-[#005440]'}`}
                >
                    Sign up
                </Link>
                <Link
                    href="/login"
                    className={`pb-3 text-sm font-medium transition-all ${activeTab === 'login' ? 'border-b-2 border-[#005440] text-[#005440]' : 'text-[#3f4944] hover:text-[#005440]'}`}
                >
                    Log in
                </Link>
            </div>

            <div className="mb-6 flex-shrink-0">
                <h2 className="text-2xl font-medium tracking-tight text-[#1a1c1b] mb-1">
                    {activeTab === 'signup' ? 'Create an account' : 'Welcome back'}
                </h2>
                <p className="text-[#3f4944] text-xs">Join our curated ecosystem of donors and change-makers.</p>
            </div>

            <form className="space-y-4 flex-1" onSubmit={(e) => e.preventDefault()}>
                <button type="button" className="w-full flex items-center justify-center gap-3 py-2.5 px-4 border border-[#bec9c3] rounded-lg hover:bg-[#f4f4f2] transition-colors text-sm">
                    <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" alt="Google" className="w-4 h-4" />
                    <span className="font-medium">Continue with Google</span>
                </button>

                <div className="relative flex items-center justify-center py-2">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#bec9c3]/30"></div></div>
                    <span className="relative bg-white px-4 text-[10px] font-bold text-[#6f7a74] uppercase tracking-widest">or email</span>
                </div>

                <div className="space-y-3">
                    {activeTab === 'signup' && (
                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-[#6f7a74] uppercase tracking-wider ml-1">Full Name</label>
                                <input
                                    className="w-full px-4 py-2.5 bg-[#f4f4f2] rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#005440]"
                                    placeholder="Alex Rivers"
                                    type="text"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-[#6f7a74] uppercase tracking-wider ml-1">Email Address</label>
                                <input
                                    className="w-full px-4 py-2.5 bg-[#f4f4f2] rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#005440]"
                                    placeholder="alex@example.com"
                                    type="email"
                                />
                            </div>
                        </div>
                    )}
                    {activeTab === 'login' && (
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-[#6f7a74] uppercase tracking-wider ml-1">Email Address</label>
                            <input
                                className="w-full px-4 py-2.5 bg-[#f4f4f2] rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#005440]"
                                placeholder="alex@example.com"
                                type="email"
                            />
                        </div>
                    )}
                    <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-[#6f7a74] uppercase tracking-wider ml-1">Password</label>
                        <div className="relative">
                            <input
                                className="w-full px-4 py-2.5 bg-[#f4f4f2] rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#005440]"
                                placeholder="••••••••"
                                type={showPassword ? "text" : "password"}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6f7a74]"
                            >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                    </div>
                </div>

                {activeTab === 'signup' && (
                    <div className="space-y-3 pt-2">
                        <p className="text-[11px] font-bold text-[#6f7a74] uppercase tracking-wider ml-1">Select your path</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div
                                onClick={() => setRole('donor')}
                                className={`p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 ${role === 'donor' ? 'border-[#005440] bg-[#005440]/5' : 'border-[#bec9c3]/50 bg-[#f4f4f2]/50 hover:bg-[#f4f4f2]'}`}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <Heart size={14} className={role === 'donor' ? "text-[#005440]" : "text-[#6f7a74]"} />
                                    <span className="text-xs font-bold text-[#1a1c1b]">I want to donate</span>
                                </div>
                                <p className="text-[10px] text-[#3f4944] leading-tight">Find verified NGOs and track your impact instantly.</p>
                            </div>

                            <div
                                onClick={() => setRole('ngo')}
                                className={`p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 ${role === 'ngo' ? 'border-[#005440] bg-[#005440]/5' : 'border-[#bec9c3]/50 bg-[#f4f4f2]/50 hover:bg-[#f4f4f2]'}`}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <Building2 size={14} className={role === 'ngo' ? "text-[#005440]" : "text-[#auto] text-[#6f7a74]"} />
                                    <span className="text-xs font-bold text-[#1a1c1b]">I represent an NGO/Company</span>
                                </div>
                                <p className="text-[10px] text-[#3f4944] leading-tight">List your mission and connect with digital philanthropists.</p>
                            </div>
                        </div>

                        {/* NGO Document Upload Section */}
                        <div className="space-y-2 mt-4">
                            <label className="text-[11px] font-bold text-[#6f7a74] uppercase tracking-wider ml-1">
                                NGO/Company Registration Document
                            </label>
                            <div className="relative group">
                                <input
                                    type="file"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                    onChange={(e) => setFileName(e.target.files[0]?.name)}
                                    accept=".pdf,.doc,.docx"
                                />
                                <div className="border-2 border-dashed border-[#bec9c3] rounded-xl p-6 flex flex-col items-center justify-center bg-[#f4f4f2]/50 group-hover:bg-[#f4f4f2] transition-colors">
                                    <Upload size={20} className="text-[#6f7a74] mb-2" />
                                    <p className="text-[11px] text-[#3f4944] text-center">
                                        {fileName ? (
                                            <span className="font-medium text-[#005440]">{fileName}</span>
                                        ) : (
                                            <>Drag and drop PDF or <span className="underline font-semibold">browse files</span></>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <button className="w-full bg-[#005440] text-white font-medium py-3 rounded-full hover:opacity-90 transition-all mt-4" type="submit">
                    {activeTab === 'signup' ? 'Complete Registration' : 'Login'}
                </button>

                <p className="text-[10px] text-center text-[#6f7a74] mt-4">
                    By joining, you agree to our <span className="underline cursor-pointer text-[#3f4944]">Terms of Service</span> and <span className="underline cursor-pointer text-[#3f4944]">Privacy Policy</span>.
                </p>
            </form>
        </div>
    );
}