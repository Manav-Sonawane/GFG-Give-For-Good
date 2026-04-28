"use client";
import React from 'react';
import { SideNavBar } from '@/components/dashboard/SideNavBar';

export default function DonorDashboard() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex font-sans">
      <SideNavBar />
      
      <main className="ml-[220px] flex-1 min-h-screen flex flex-col">
        {/* TopAppBar Anchor */}
        <header className="flex justify-between items-center px-12 py-8 w-full sticky top-0 bg-[#f9f9f7]/80 backdrop-blur-md z-30">
          <div className="relative w-96">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input className="w-full bg-surface-container border-none rounded-full py-2.5 pl-12 pr-4 text-sm focus:ring-1 focus:ring-primary/20" placeholder="Search NGO or campaign..." type="text" />
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative hover:opacity-70 transition-opacity">
              <span className="material-symbols-outlined text-slate-600">notifications</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full"></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium text-on-surface">Arjun K.</p>
                <p className="text-xs text-slate-500">Silver Donor</p>
              </div>
              <img alt="Donor Avatar" className="w-10 h-10 rounded-full object-cover" data-alt="Close-up portrait of a friendly professional man in a casual shirt against a neutral architectural background, soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF00aadNmNsTGZOE1_epUCGpTNPVYRB_1cXiUOCuo-Mj2tOUT-xOLxH5uWsXQ7HYYWm268HkXMxoB7KEGFRqdwhZzMFII0TmncnM_vd-cs1EuXkbKJzRfXVEmZoNN7YMUPlRcuVxaGu2VKSRZdJee56V2kBzJiCtR6PBWvCyczKUFn32e6mGeEwM01gwYpuNcwpK5YzCXVZDyyzxTjz_wGAiVApR9r2lzaIX42YDhxGgfuQBhj5q8XnQ3VjsEME1l8ot0BvTN53rk" />
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="px-12 pb-20 max-w-7xl mx-auto flex-1 w-full">
          {/* Hero Greeting & Badge */}
          <section className="mb-12">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-[3.5rem] font-medium tracking-tight leading-tight text-primary">Welcome back, Arjun</h2>
                <div className="mt-4 flex items-center gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container text-xs font-semibold tracking-wider text-slate-600">
                    SILVER DONOR · 340 PTS
                  </span>
                  <span className="text-slate-400 text-sm italic">You're 60 pts away from Gold status.</span>
                </div>
              </div>
              <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-medium transition-all hover:scale-[1.02] active:scale-95">
                Start a Donation
              </button>
            </div>
          </section>

          {/* Metrics Bento Grid */}
          <section className="grid grid-cols-4 gap-6 mb-16">
            <div className="bg-surface-container-low p-8 rounded-2xl flex flex-col justify-between h-40 group hover:bg-surface-container transition-all">
              <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
              <div>
                <p className="text-3xl font-medium">12</p>
                <p className="text-slate-500 text-sm">Active donations</p>
              </div>
            </div>
            
            <div className="bg-surface-container-low p-8 rounded-2xl flex flex-col justify-between h-40 group hover:bg-surface-container transition-all">
              <span className="material-symbols-outlined text-amber-600 text-2xl">handshake</span>
              <div>
                <p className="text-3xl font-medium">04</p>
                <p className="text-slate-500 text-sm">Matched items</p>
              </div>
            </div>
            
            <div className="bg-surface-container-low p-8 rounded-2xl flex flex-col justify-between h-40 group hover:bg-surface-container transition-all">
              <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>
              <div>
                <p className="text-3xl font-medium">18</p>
                <p className="text-slate-500 text-sm">Completed contributions</p>
              </div>
            </div>
            
            <div className="bg-primary text-on-primary p-8 rounded-2xl flex flex-col justify-between h-40 transition-all">
              <span className="material-symbols-outlined text-primary-fixed text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>token</span>
              <div>
                <p className="text-3xl font-medium">340</p>
                <p className="text-primary-fixed text-sm">Impact points earned</p>
              </div>
            </div>
          </section>

          {/* Main Layout Split */}
          <div className="grid grid-cols-12 gap-12 items-start">
            {/* Pending Matches Section */}
            <section className="col-span-8">
              <div className="flex justify-between items-baseline mb-8">
                <h3 className="text-2xl font-medium tracking-tight">Pending matches</h3>
                <a className="text-primary text-sm font-medium hover:underline" href="#">View all</a>
              </div>
              
              <div className="space-y-4">
                {/* Match Card 1 */}
                <div className="bg-surface-container-lowest p-6 rounded-xl flex items-center justify-between group transition-all">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-surface-container">
                      <img alt="Clothes Donation" className="w-full h-full object-cover opacity-90" data-alt="Neatly folded warm winter clothes including wool sweaters and a scarf in soft neutral tones on a clean surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWGtPSuwIoUITGOARCTZijMb38Nh9JcDYT7tKOBSSs_PS_n9gw8NEta-wboU6MgvoUKTm4aQ93B8C1faeDh0IsSwMQpl8ggRp9WbZIjqWJvI1BeEsY74ZwIYZDykWBoxttxlzkIyTZVRenpB7VAud000Saw1AMPy4SYbqjMuEULDTOdXjhU3cL7iJPf9zUpLpe6xplwtPUNKqJMiiIR4wDmB5jcBPwGKL9-AZ3_WQNxWa03ArCef15JCRYXYnYTWhjQYCTlZOVDJs" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Winter Jacket Pack</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-slate-500 text-sm">NGO: Helping Hands</p>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <p className="text-slate-500 text-sm">Seattle, WA</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Matched</span>
                    <button className="text-primary border border-primary/20 hover:bg-primary/5 px-5 py-2 rounded-lg text-sm font-medium transition-all">
                      View details
                    </button>
                  </div>
                </div>

                {/* Match Card 2 */}
                <div className="bg-surface-container-lowest p-6 rounded-xl flex items-center justify-between group transition-all">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-surface-container">
                      <img alt="Book Donation" className="w-full h-full object-cover opacity-90" data-alt="A small stack of classic books with aged paper and vintage covers, arranged artistically in soft sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV_niZIY7eYmEv7ffyHdBEKg05-qozpz0cqjW2R1PwguEcAbQs_KtGJmJPb1wIJGEPi0-EyhpBYqqmZN_XF5qzUSaJXhNGmX7CN-wkYyJOeON1Kd22fV3WK9RmvcIXiRMdnHIBicD_qpsAJReDM8RtvRSnYMFSDS0mNbMMCHKGgn_63aZlWg002cXIsJNGNAp1kw8Ty0JmbkfJZKPjPv5EATqk8L1PCIRVvWryzFxWxKBN8Isb3tYdCBX1I_bdl5pF5GbyjX_x5LU" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Science Textbooks (x5)</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-slate-500 text-sm">NGO: EduGrow</p>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <p className="text-slate-500 text-sm">Portland, OR</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Matched</span>
                    <button className="text-primary border border-primary/20 hover:bg-primary/5 px-5 py-2 rounded-lg text-sm font-medium transition-all">
                      View details
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Recent Activity Timeline */}
            <section className="col-span-4 bg-surface-container-low rounded-2xl p-8">
              <h3 className="text-xl font-medium tracking-tight mb-8">Recent activity</h3>
              <div className="relative space-y-10">
                {/* Timeline Line */}
                <div className="absolute left-3 top-2 bottom-2 w-px bg-outline-variant/30"></div>
                
                {/* Item 1 */}
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary-fixed flex items-center justify-center ring-4 ring-surface-container-low">
                    <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Donation Completed</p>
                    <p className="text-xs text-slate-500 mt-0.5">NGO confirmed receipt of Medical Kit</p>
                    <p className="text-[11px] text-slate-400 mt-2 uppercase tracking-widest">2 HOURS AGO</p>
                  </div>
                </div>
                
                {/* Item 2 */}
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-secondary-fixed flex items-center justify-center ring-4 ring-surface-container-low">
                    <span className="material-symbols-outlined text-[14px] text-secondary">handshake</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">New Match Found</p>
                    <p className="text-xs text-slate-500 mt-0.5">Helping Hands matched your Jacket Pack</p>
                    <p className="text-[11px] text-slate-400 mt-2 uppercase tracking-widest">YESTERDAY</p>
                  </div>
                </div>
                
                {/* Item 3 */}
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center ring-4 ring-surface-container-low">
                    <span className="material-symbols-outlined text-[14px] text-slate-600">stars</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Milestone Reached</p>
                    <p className="text-xs text-slate-500 mt-0.5">Earned 'Winter Hero' badge</p>
                    <p className="text-[11px] text-slate-400 mt-2 uppercase tracking-widest">3 DAYS AGO</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-10 text-primary text-sm font-medium py-3 border border-primary/10 rounded-xl hover:bg-primary/5 transition-all">
                View Full History
              </button>
            </section>
          </div>
        </div>
        
        {/* Footer Anchor */}
        <footer className="w-full mt-auto px-8 py-12 text-center bg-surface-container-low border-t border-transparent">
          <div className="flex flex-col items-center justify-center space-y-6">
            <p className="font-medium text-primary">Give for Good</p>
            <div className="flex gap-8">
              <a className="text-[13px] opacity-60 hover:opacity-100 hover:text-primary transition-all" href="#">Privacy Policy</a>
              <a className="text-[13px] opacity-60 hover:opacity-100 hover:text-primary transition-all" href="#">Terms of Service</a>
              <a className="text-[13px] opacity-60 hover:opacity-100 hover:text-primary transition-all" href="#">NGO Partners</a>
              <a className="text-[13px] opacity-60 hover:opacity-100 hover:text-primary transition-all" href="#">Contact</a>
            </div>
            <p className="text-[11px] text-slate-400 font-['Inter'] leading-relaxed">
              © 2024 Editorial Altruism. All missions reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
