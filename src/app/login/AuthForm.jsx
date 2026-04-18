"use client";

import React, { useState } from 'react';
import { Heart, Building2, Eye, EyeOff } from 'lucide-react';

export default function AuthForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [activeTab, setActiveTab] = useState('signup');
    const [role, setRole] = useState('donor');

    return (
        <div className="flex flex-col flex-1">
            {/* Tab Navigation - Reduced Margin */}
            <div className="flex space-x-8 mb-6 border-b border-[#e2e3e1] flex-shrink-0">
                <button
                    type="button"
                    onClick={() => setActiveTab('signup')}
                    className={`pb-3 text-sm font-medium transition-all ${activeTab === 'signup' ? 'border-b-2 border-[#005440] text-[#005440]' : 'text-[#3f4944]'}`}
                >
                    Sign up
                </button>
                <button
                    type="button"
                    onClick={() => setActiveTab('login')}
                    className={`pb-3 text-sm font-medium transition-all ${activeTab === 'login' ? 'border-b-2 border-[#005440] text-[#005440]' : 'text-[#3f4944]'}`}
                >
                    Log in
                </button>
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
                    <input
                        className="w-full px-4 py-2.5 bg-[#f4f4f2] rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#005440]"
                        placeholder="Email Address"
                        type="email"
                    />
                    <div className="relative">
                        <input
                            className="w-full px-4 py-2.5 bg-[#f4f4f2] rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#005440]"
                            placeholder="Password"
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

                {/* Role Selector - Matches Figma Descriptions */}
                {activeTab === 'signup' && (
                    <div className="space-y-3 pt-2">
                        <p className="text-[11px] font-bold text-[#6f7a74] uppercase tracking-wider ml-1">Select your path</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {/* Donor Card */}
                            <div
                                onClick={() => setRole('donor')}
                                className={`p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 ${role === 'donor' ? 'border-[#005440] bg-[#005440]/5' : 'border-transparent bg-[#f4f4f2]'}`}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <Heart size={14} className="text-[#005440]" />
                                    <span className="text-xs font-bold">I want to donate</span>
                                </div>
                                <p className="text-[10px] text-[#3f4944] leading-tight">Find verified NGOs and track your impact instantly.</p>
                            </div>

                            {/* NGO Card */}
                            <div
                                onClick={() => setRole('ngo')}
                                className={`p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 ${role === 'ngo' ? 'border-[#a8380f] bg-[#a8380f]/5' : 'border-transparent bg-[#f4f4f2]'}`}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <Building2 size={14} className="text-[#a8380f]" />
                                    <span className="text-xs font-bold">I represent an NGO</span>
                                </div>
                                <p className="text-[10px] text-[#3f4944] leading-tight">List your mission and connect with philanthropists.</p>
                            </div>
                        </div>
                    </div>
                )}

                <button className="w-full bg-[#005440] text-white font-medium py-3 rounded-full hover:opacity-90 transition-all mt-4" type="submit">
                    {activeTab === 'signup' ? 'Complete Registration' : 'Login'}
                </button>
            </form>
        </div>
    );
}