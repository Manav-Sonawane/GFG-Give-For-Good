import React from 'react';
import { SideNavBar } from '@/components/dashboard/SideNavBar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardFooter } from '@/components/dashboard/DashboardFooter';

export default function MatchesPage() {
    return (
        <div className="bg-background min-h-screen text-on-surface font-['Inter'] relative">
            <SideNavBar />
            <DashboardHeader searchPlaceholder="Search matches or donations..." />

            <main className="ml-[220px] pt-32 px-12 pb-12 min-h-[calc(100vh-88px)] bg-background">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
                    {/* Left Column: Match Details & Stepper (60%) */}
                    <div className="w-full xl:w-3/5 space-y-8">
                        <div className="flex flex-col gap-2 mb-6">
                            <nav className="flex items-center gap-2 text-xs font-medium text-outline mb-2">
                                <span>Matches</span>
                                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                <span className="text-on-surface">Donation #8241 — Green Earth NGO</span>
                            </nav>
                            <h2 className="text-[2.5rem] font-medium tracking-tight text-primary leading-tight">Handover Details</h2>
                        </div>

                        {/* Match Summary Card */}
                        <div className="bg-surface-container-lowest rounded-xl p-8 transition-all">
                            <div className="flex items-start justify-between mb-8">
                                <div className="flex items-center gap-6">
                                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-container">
                                        <img 
                                            alt="Fresh Produce" 
                                            className="w-full h-full object-cover" 
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqaFO1NxZmrcbpUhcUjsHpi2qq-5c3v-wPbfOSuTke46x9hT6JA8hpinIx4VAkoQKQLv0YB7zLWEzfXYoj9SzWw_CMl6fTeUj15syF-HzgcfcTvkzawLDg5XZMHnTSr9v4Krc5yiaae4Kv40SrHzg_tPwq0N3D22zsUlfXkZ8zZf3QYxhZ49klVGEMarCoJDBOdAPg8JJPTXhwWRbzijhGOGbO_edZpvpDtQgmumpsapKF8sZoDuO7G2r-HvPGkwKCkRunuoSXcaM"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-on-surface">50kg Fresh Produce</h3>
                                        <p className="text-outline text-sm mt-1">Matched with <span className="text-primary font-medium">Green Earth NGO</span></p>
                                        <div className="flex items-center gap-2 mt-3">
                                            <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold tracking-wider">FOOD WASTE RECOVERY</span>
                                            <span className="px-2.5 py-0.5 rounded-full bg-secondary-container/10 text-secondary text-[11px] font-bold tracking-wider underline">URGENT</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-surface-container">
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-[10px] uppercase font-bold tracking-[0.1em] text-outline">Pickup Location</label>
                                        <p className="text-sm font-medium mt-1">242 Curator St, Editorial District</p>
                                    </div>
                                    <div>
                                        <label className="text-[10px] uppercase font-bold tracking-[0.1em] text-outline">Estimated Delivery</label>
                                        <p className="text-sm font-medium mt-1">Today, 4:30 PM — 5:15 PM</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-[10px] uppercase font-bold tracking-[0.1em] text-outline">Donor Contact</label>
                                        <p className="text-sm font-medium mt-1">Arthur Digital (+1 555-0231)</p>
                                    </div>
                                    <div>
                                        <label className="text-[10px] uppercase font-bold tracking-[0.1em] text-outline">NGO Contact</label>
                                        <p className="text-sm font-medium mt-1">Sarah Bloom (+1 555-8842)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Status Stepper */}
                        <div className="bg-surface-container-low rounded-xl p-8">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-8">Mission Progress</h4>
                            <div className="relative space-y-10 pl-10 border-l-[1.5px] border-surface-container-highest ml-3">
                                {/* Step: Matched */}
                                <div className="relative">
                                    <span className="absolute -left-[49px] top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-8 ring-surface-container-low">
                                        <span className="material-symbols-outlined text-white text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                                    </span>
                                    <div>
                                        <p className="text-sm font-semibold text-primary">Matched</p>
                                        <p className="text-xs text-outline mt-1">Matched on Oct 12, 10:20 AM</p>
                                    </div>
                                </div>
                                {/* Step: Accepted */}
                                <div className="relative">
                                    <span className="absolute -left-[49px] top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-8 ring-surface-container-low text-white">
                                        <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                                    </span>
                                    <div>
                                        <p className="text-sm font-semibold text-primary">Accepted</p>
                                        <p className="text-xs text-outline mt-1">NGO accepted the match at 11:05 AM</p>
                                    </div>
                                </div>
                                {/* Step: In Transit */}
                                <div className="relative">
                                    <span className="absolute -left-[49px] top-0 w-8 h-8 rounded-full bg-primary-fixed text-primary flex items-center justify-center ring-8 ring-surface-container-low">
                                        <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                                    </span>
                                    <div>
                                        <p className="text-sm font-semibold text-on-surface">In Transit</p>
                                        <p className="text-xs text-outline mt-1">Courier is currently en route to the destination.</p>
                                    </div>
                                </div>
                                {/* Step: Completed */}
                                <div className="relative opacity-40">
                                    <span className="absolute -left-[49px] top-0 w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center ring-8 ring-surface-container-low text-outline">
                                        <span className="material-symbols-outlined text-base">verified</span>
                                    </span>
                                    <div>
                                        <p className="text-sm font-semibold text-on-surface">Completed</p>
                                        <p className="text-xs text-outline mt-1">Pending receipt verification.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-12 flex gap-4">
                                <button className="px-6 py-3 bg-primary text-on-primary rounded-lg text-sm font-medium hover:opacity-90 transition-all flex-1 active:scale-95">
                                    Confirm handover
                                </button>
                                <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-all flex-1 active:scale-95">
                                    Confirm receipt
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Chat Panel (40%) */}
                    <div className="w-full xl:w-2/5 flex flex-col h-[750px] bg-surface-container-lowest rounded-xl overflow-hidden self-start sticky top-32">
                        {/* Chat Header */}
                        <div className="px-6 py-4 bg-surface-container border-b border-surface-container-high flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold">GB</div>
                            <div className="flex-1">
                                <h4 className="text-sm font-semibold text-on-surface">Sarah Bloom</h4>
                                <p className="text-[11px] text-outline flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    Online
                                </p>
                            </div>
                            <button className="text-outline hover:text-on-surface transition-colors">
                                <span className="material-symbols-outlined">more_vert</span>
                            </button>
                        </div>
                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col">
                            {/* System Message */}
                            <div className="self-center bg-surface-container px-4 py-1.5 rounded-full text-[11px] font-medium text-outline">
                                Mission started on Oct 12, 10:20 AM
                            </div>
                            {/* Message Received */}
                            <div className="flex items-end gap-3 max-w-[85%]">
                                <div className="bg-surface-container-low text-on-surface p-4 rounded-2xl rounded-bl-none text-sm leading-relaxed">
                                    Hello Arthur! Thank you so much for this donation. We've been looking for fresh produce for our community kitchen.
                                </div>
                            </div>
                            {/* Message Sent */}
                            <div className="flex items-end gap-3 max-w-[85%] self-end">
                                <div className="bg-primary text-white p-4 rounded-2xl rounded-br-none text-sm leading-relaxed">
                                    You're very welcome, Sarah! Happy to help. The produce was harvested this morning so it's perfectly fresh.
                                </div>
                            </div>
                            {/* System Message (Status Change) */}
                            <div className="self-center bg-primary-fixed/30 text-primary px-4 py-2 rounded-lg text-[11px] font-semibold border border-primary/10 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[14px]">local_shipping</span>
                                Donation status updated to: In Transit
                            </div>
                            {/* Message Sent */}
                            <div className="flex items-end gap-3 max-w-[85%] self-end">
                                <div className="bg-primary text-white p-4 rounded-2xl rounded-br-none text-sm leading-relaxed">
                                    The driver just left. They should be with you in about 30 minutes. Let me know if you have trouble finding them!
                                </div>
                            </div>
                            {/* Message Received */}
                            <div className="flex items-end gap-3 max-w-[85%]">
                                <div className="bg-surface-container-low text-on-surface p-4 rounded-2xl rounded-bl-none text-sm leading-relaxed">
                                    Perfect, thank you. I'll have our volunteers ready at the loading dock.
                                </div>
                            </div>
                        </div>
                        {/* Input Area */}
                        <div className="p-4 bg-surface-container-low border-t border-surface-container">
                            <div className="flex items-center gap-3 bg-surface-container-lowest rounded-xl px-4 py-2 ring-1 ring-outline/10 focus-within:ring-primary/40 transition-all">
                                <button className="text-outline hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined">add</span>
                                </button>
                                <input className="flex-1 border-none outline-none focus:ring-0 text-sm bg-transparent placeholder:text-outline/50" placeholder="Type a message..." type="text" />
                                <button className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:opacity-90 transition-all active:scale-95">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="ml-[220px]">
                <DashboardFooter />
            </div>
        </div>
    );
}
