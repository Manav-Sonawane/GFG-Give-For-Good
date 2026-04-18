import React from 'react';
import { SideNavBar } from '@/components/dashboard/SideNavBar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { Podium } from '@/components/dashboard/Podium';
import { RankingTable } from '@/components/dashboard/RankingTable';
import { CategoryChampions } from '@/components/dashboard/CategoryChampions';
import { Badges } from '@/components/dashboard/Badges';
import { CTACard } from '@/components/dashboard/CTACard';
import { DashboardFooter } from '@/components/dashboard/DashboardFooter';

export default function LeaderboardPage() {
    return (
        <div className="bg-background text-on-surface min-h-screen font-sans">
            <SideNavBar />
            <DashboardHeader />

            <main className="ml-[220px] pt-24 min-h-screen">
                <div className="max-w-7xl mx-auto px-12 py-8">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-5xl font-medium tracking-tighter text-primary mb-4">Impact Leaderboard</h2>
                            <p className="text-body-lg text-on-surface-variant leading-relaxed opacity-80">
                                Celebrating the community of curators driving global change. Every point represents a life touched, a mission fueled, and a future secured.
                            </p>
                        </div>
                        <div className="inline-flex bg-surface-container p-1 rounded-lg">
                            <button className="px-6 py-2 bg-surface-container-lowest text-primary font-medium text-sm rounded-md transition-all">Monthly</button>
                            <button className="px-6 py-2 text-on-surface-variant hover:text-primary font-medium text-sm transition-all">All time</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-12">
                        {/* Central Column */}
                        <div className="col-span-12 lg:col-span-8 space-y-12">
                            <Podium />
                            <RankingTable />
                        </div>

                        {/* Sidebar column */}
                        <div className="col-span-12 lg:col-span-4 space-y-12">
                            <CategoryChampions />
                            <Badges />
                            <CTACard />
                        </div>
                    </div>
                </div>

                <DashboardFooter />
            </main>
        </div>
    );
}
