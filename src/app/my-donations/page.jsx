import React from 'react';
import { SideNavBar } from '@/components/dashboard/SideNavBar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardFooter } from '@/components/dashboard/DashboardFooter';
import { DonationItem } from '@/components/dashboard/DonationItem';

export default function MyDonationsPage() {
    return (
        <div className="bg-background text-on-surface min-h-screen font-sans">
            <SideNavBar />
            
            <main className="ml-[220px] min-h-screen flex flex-col">
                <DashboardHeader 
                    title="My Donations" 
                    subtitle="Track and manage your contributions to global causes." 
                    searchPlaceholder="Search items..." 
                />

                <section className="px-12 pb-20 pt-32 flex-1">
                    {/* Filter Bar */}
                    <div className="flex items-center justify-between mb-8 border-b border-surface-container-high/40 pb-4">
                        <div className="flex gap-8 overflow-x-auto no-scrollbar">
                            <button className="pb-4 border-b-2 border-primary text-primary font-medium text-sm transition-all whitespace-nowrap">All</button>
                            <button className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-primary font-medium text-sm transition-all whitespace-nowrap">Pending</button>
                            <button className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-primary font-medium text-sm transition-all whitespace-nowrap">Matched</button>
                            <button className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-primary font-medium text-sm transition-all whitespace-nowrap">Completed</button>
                            <button className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-primary font-medium text-sm transition-all whitespace-nowrap">Declined</button>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                            <span>Showing 3 items</span>
                        </div>
                    </div>

                    {/* Table List Layout */}
                    <div className="space-y-4">
                        <DonationItem 
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuB6LEThPsr_YG7lDZQSIFBrh6Qoks-_a99TRsh0qoT9lRPDyhvmHaSG0OPChdlHuvHhZjaz1Iy-PkiP37j8wIdgvbJPzO5ufRUhDcDRr6pfqphtrVpNwYuEK8JMWjMlftHA7J3OjiuiIWo4vgyEE9973XDsKnLKouBQf4NqPZFrfT5Uk__i5LsulDnd__vLPdoYY6OM0bsjbDwzPG7El7iu5iq810IE_MLfx_mM2zCG-Pw-0CafyDdcUvrHaTjLVPG4oMFdRnEw4NI"
                            title="School Stationery Kit"
                            id="#DC-2041"
                            category="Education"
                            quantity="15 Units"
                            location="San Francisco, CA"
                            date="Oct 24, 2024"
                            status="Completed"
                            expanded={true}
                        />
                        
                        <DonationItem 
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDdgBuZ6uOco8U3ZBkLjw6IMN0CSnXvUlugAaOrDOSAFqw6Yl2yM7q8HxKTJmNgZu9sxTm4wqP4hMxZ8f_5hVuCrag18AGpV5AWYT2s_jcrI3ZVFFRZH1pGCtF2h0grq9kM8uiDr9ErrSbCarpr59XwAXKBOhJBLlzQO_idDvw06M2uZYj37AXVZbMY5Khi59NzqAz2fXWuANY_QgRwUSRmIGqEO2E8i9wviLqT7fqH5Fk2bZcaHfs0nRKW35LO1AaUrj4QTZ61odM"
                            title="Fresh Produce Crate"
                            id="#DC-2055"
                            category="Food Aid"
                            quantity="5 Boxes"
                            location="Oakland, CA"
                            date="Oct 26, 2024"
                            status="In Transit"
                            statusColor="text-purple-600 bg-purple-50"
                        />
                        
                        <DonationItem 
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuBIG-5f7EH5EBL5J_wiavrqfIr1DFG_5osDBIXyKQlkOSQkHbg_XaF7hGGpgRuEUIraPA5NRqbEf-FhscNYTuEdFPfJdNfP7MLQPF9REoEmqHrf_uJ3rHX2ZWH-Wkatqq6RSTw6WU8WiCUEle-0NvMgxfuxD3zbvaovgPxxHG838xVLIkq4DTwZvDlLg4nWLyJP74pzOmKqi6zBnTcGOnQw5LnYoKuO7iLSah86AvmPSePo5p3xW2DOcU51uOLciTWMbuOiFRXa1J0"
                            title="Winter Clothing Pack"
                            id="#DC-2068"
                            category="Relief"
                            quantity="12 Pcs"
                            location="San Jose, CA"
                            date="Oct 27, 2024"
                            status="Matched"
                            statusColor="text-amber-600 bg-amber-50"
                        />
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between mt-12 px-2">
                        <span className="text-xs text-slate-500">Showing page 1 of 4</span>
                        <div className="flex gap-2">
                            <button className="w-10 h-10 rounded-full border border-surface-container-high flex items-center justify-center text-slate-400 hover:bg-surface-container transition-colors">
                                <span className="material-symbols-outlined text-sm" data-icon="chevron_left">chevron_left</span>
                            </button>
                            <button className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold">1</button>
                            <button className="w-10 h-10 rounded-full border border-surface-container-high flex items-center justify-center text-slate-500 hover:bg-surface-container transition-colors text-xs font-bold">2</button>
                            <button className="w-10 h-10 rounded-full border border-surface-container-high flex items-center justify-center text-slate-500 hover:bg-surface-container transition-colors text-xs font-bold">3</button>
                            <button className="w-10 h-10 rounded-full border border-surface-container-high flex items-center justify-center text-slate-400 hover:bg-surface-container transition-colors">
                                <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </section>

                <div className="mt-auto">
                    <DashboardFooter />
                </div>
            </main>
        </div>
    );
}
