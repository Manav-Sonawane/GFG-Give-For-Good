"use client";
import React from 'react';
import Link from 'next/link';
import { SideNavBar } from '@/components/dashboard/SideNavBar';

export default function PostARequirement() {
  return (
    <div className="bg-background text-on-surface font-body min-h-screen flex flex-col">
      <SideNavBar />
      
      <main className="ml-[220px] flex-1 flex flex-col min-h-screen">
        <header className="flex justify-between items-center px-12 py-6 w-full sticky top-0 bg-[#f9f9f7]/80 backdrop-blur-md z-30">
          <div className="flex items-center bg-surface-container px-4 py-2 rounded-full w-96">
            <span className="material-symbols-outlined text-slate-400 text-lg mr-2">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder-slate-400 outline-none" placeholder="Search NGO needs..." type="text" />
          </div>
          <div className="flex items-center gap-6 text-[#005440]">
            <button className="relative hover:opacity-70 transition-opacity">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full"></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs font-medium text-slate-500">Welcome back</p>
                <p className="text-sm font-semibold">The Digital Curator</p>
              </div>
              <img className="w-10 h-10 rounded-full object-cover" data-alt="portrait of a professional smiling woman in a creative office setting with soft natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGuZQdLeLhY8-fbE3AO2jiqGm2P8uiHHe90yMTkPwzbxzzHdNLHYStWB35YTXPL5RctPJGHJdouy8-LUKpmdJ8z5gv8xqbuAACRzBT7eIUVCRIpjhxyLVADWwcyUsQp1O9pBxaPdwvjxuA3kJITqX7_QENXmdHcaSyo2AygwQ8KiRzrBYiaKbgOpNChD2ElWFaB4p2sVbBD_xRP--cFujKPJIPbs_G-gHXRi62Dycp6mqVnVhV0OReQd2JQV1kJ3dzp4yxUwCX6Q4" />
            </div>
          </div>
        </header>

        <section className="max-w-4xl mx-auto px-12 py-12 flex-1 w-full">
          {/* Stepper Progress */}
          <div className="flex items-center justify-between mb-16 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-surface-container-high -z-10"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">1</div>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-primary">Details</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center text-xs font-bold">2</div>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-400">Context</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center text-xs font-bold">3</div>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-400">Review</span>
            </div>
          </div>

          {/* Form Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-medium tracking-tight text-primary mb-4">What does your organisation need?</h1>
            <p className="text-on-surface-variant max-w-xl leading-relaxed">Clearly define your requirements to help our curators match you with the right philanthropic partners.</p>
          </div>

          {/* Main Form Section */}
          <div className="grid grid-cols-12 gap-8">
            {/* Left Column: Form Inputs */}
            <div className="col-span-12 lg:col-span-8 space-y-10">
              <div className="space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Category</label>
                    <select className="w-full bg-surface-container-lowest border-none rounded-lg focus:ring-1 focus:ring-primary/20 text-sm py-3 px-4 outline-none">
                      <option>Medical Supplies</option>
                      <option>Educational Material</option>
                      <option>Emergency Food Relief</option>
                      <option>Sustainable Energy</option>
                      <option>Community Infrastructure</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Item Name</label>
                    <input className="w-full bg-surface-container-lowest border-none rounded-lg focus:ring-1 focus:ring-primary/20 text-sm py-3 px-4 placeholder-slate-300 outline-none" placeholder="e.g. Solar Water Pumps" type="text" />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Quantity needed</label>
                    <input className="w-full bg-surface-container-lowest border-none rounded-lg focus:ring-1 focus:ring-primary/20 text-sm py-3 px-4 outline-none" placeholder="0" type="number" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Preferred City</label>
                    <input className="w-full bg-surface-container-lowest border-none rounded-lg focus:ring-1 focus:ring-primary/20 text-sm py-3 px-4 outline-none" placeholder="Location" type="text" />
                  </div>
                </div>

                {/* Urgency Selectors */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Urgency Level</label>
                  <div className="flex gap-4">
                    <button className="flex-1 py-3 px-4 rounded-full text-sm font-medium border border-outline-variant text-slate-500 hover:bg-surface-container-low transition-colors">Low</button>
                    <button className="flex-1 py-3 px-4 rounded-full text-sm font-medium border border-outline-variant text-slate-500 hover:bg-surface-container-low transition-colors">Medium</button>
                    <button className="flex-1 py-3 px-4 rounded-full text-sm font-medium bg-secondary text-white shadow-lg shadow-secondary/20 border-none">High</button>
                  </div>
                </div>

                {/* Notes & Target Date */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Notes</label>
                  <textarea className="w-full bg-surface-container-lowest border-none rounded-lg focus:ring-1 focus:ring-primary/20 text-sm py-3 px-4 placeholder-slate-300 outline-none" placeholder="Describe how this item will impact your mission..." rows="4"></textarea>
                </div>
                <div className="space-y-2 w-1/2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Target Date</label>
                  <div className="relative">
                    <input className="w-full bg-surface-container-lowest border-none rounded-lg focus:ring-1 focus:ring-primary/20 text-sm py-3 px-4 outline-none" type="date" />
                  </div>
                </div>
              </div>

              {/* Navigation Actions */}
              <div className="flex items-center justify-between pt-6">
                <Link href="/ngo-dashboard" className="text-sm font-semibold text-slate-400 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">arrow_back</span>
                  Cancel Draft
                </Link>
                <Link href="/ngo-dashboard" className="bg-primary text-white px-10 py-4 rounded-full text-sm font-semibold hover:scale-95 transition-transform active:opacity-80">
                  Continue to Review
                </Link>
              </div>
            </div>

            {/* Right Column: Context/Preview (Asymmetric/Editorial feel) */}
            <div className="col-span-12 lg:col-span-4 mt-8 lg:mt-0">
              <div className="sticky top-32 space-y-8">
                {/* Preview Card */}
                <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10 shadow-sm">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Requirement Preview</h3>
                  <div className="space-y-6">
                    <div className="w-full aspect-video bg-surface-container rounded-lg overflow-hidden">
                      <img className="w-full h-full object-cover grayscale-[20%] contrast-[110%]" data-alt="medical professional holding life-saving medicine in a brightly lit modern hospital environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrrI8LFdRwac_jeR1Kcp-15ddaNI5QvWMsqeZ6sGCRytOutNrmNtHIlNVGNKTH7TAh3SzDyhaE_6dUbMuLaR1WyKs_5SR633Ja7Fl1Bm0P2UM7Y9g4IAkOjK3gxb7Hg3M9D4DZHg6xCAd1mndVeu08fzbUAlzxd-o9pma-0UVqWi39jGEDqwlkH0B9ppdAraOfa2Z0Ds4Cl8RIOpMWd6wjrksZBKACVXWnoshTIWtOmqqioP_9SxR3uYNADi8co3vLy1QQmF0cQhI" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-tighter">High Urgency</span>
                      </div>
                      <h4 className="text-xl font-medium text-primary">Solar Water Pumps</h4>
                      <p className="text-xs text-slate-500 mt-1">Sustainable Energy • 5 Units</p>
                    </div>
                    <div className="pt-4 border-t border-surface-container">
                      <p className="text-[13px] leading-relaxed text-slate-600 italic">"This will provide clean water to over 200 families in the semi-arid northern region..."</p>
                    </div>
                  </div>
                </div>

                {/* Editorial Quote */}
                <div className="pl-6 border-l-2 border-primary-fixed">
                  <p className="text-sm text-on-surface-variant font-medium leading-relaxed">
                    "Clarity in your needs is the first step toward significant impact. Our donors look for specific stories where their contribution makes a tangible difference."
                  </p>
                  <p className="text-xs text-primary mt-3 font-semibold">— Donation Curator Team</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Shell */}
        <footer className="bg-[#f4f4f2] dark:bg-slate-900 flex flex-col items-center justify-center space-y-8 w-full px-8 py-20 mt-auto text-center border-t border-outline-variant/10">
          <div className="font-medium text-[#005440] text-lg">Give for Good</div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="text-[13px] font-['Inter'] opacity-60 hover:opacity-100 transition-all" href="#">Privacy Policy</a>
            <a className="text-[13px] font-['Inter'] opacity-60 hover:opacity-100 transition-all" href="#">Terms of Service</a>
            <a className="text-[13px] font-['Inter'] opacity-60 hover:opacity-100 transition-all" href="#">NGO Partners</a>
            <a className="text-[13px] font-['Inter'] opacity-60 hover:opacity-100 transition-all" href="#">Contact</a>
          </div>
          <p className="text-[13px] font-['Inter'] leading-relaxed opacity-60">© 2024 Editorial Altruism. All missions reserved.</p>
        </footer>
      </main>
    </div>
  );
}
