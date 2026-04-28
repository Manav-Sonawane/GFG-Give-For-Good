"use client";
import React from 'react';
import Link from 'next/link';
import { SideNavBar } from '@/components/dashboard/SideNavBar';

export default function PostADonation() {
  return (
    <div className="bg-background text-on-surface font-body min-h-screen flex flex-col">
      <SideNavBar />

      <header className="sticky top-0 z-50 bg-[#f9f9f7]/80 backdrop-blur-md dark:bg-slate-950/80 ml-[220px] w-[calc(100%-220px)]">
        <div className="flex justify-between items-center px-12 py-6 w-full">
          <div className="flex items-center flex-1 max-w-md">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-surface-container border-none rounded-full text-sm focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Search causes..." type="text" />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-slate-500 hover:opacity-70 transition-opacity">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            </button>
            <button className="text-slate-500 hover:opacity-70 transition-opacity">
              <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
            </button>
          </div>
        </div>
      </header>

      <main className="ml-[220px] flex-1 flex flex-col items-center py-16 px-8">
        {/* Header Section (Asymmetrical Editorial Style) */}
        <div className="max-w-[640px] w-full mb-12">
          <h2 className="text-[3.5rem] font-medium leading-[1.1] tracking-tight text-on-surface mb-4">
            What would you like <br /><span className="text-primary italic">to donate?</span>
          </h2>
          <p className="text-on-surface-variant body-lg max-w-md">
            Your contribution makes a world of difference. Follow these simple steps to list your item for the community.
          </p>
        </div>

        {/* Stepped Form Card */}
        <div className="max-w-[640px] w-full bg-surface-container-lowest rounded-2xl p-10 flex flex-col gap-10 shadow-sm border border-outline-variant/10">
          {/* Step Indicator */}
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary text-xs font-bold">1</div>
              <span className="text-sm font-medium text-primary">Item details</span>
            </div>
            <div className="flex-1 h-[1px] bg-surface-container-high mx-4"></div>
            <div className="flex items-center gap-3 opacity-40">
              <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant text-xs font-bold">2</div>
              <span className="text-sm font-medium text-on-surface-variant">Location</span>
            </div>
            <div className="flex-1 h-[1px] bg-surface-container-high mx-4"></div>
            <div className="flex items-center gap-3 opacity-40">
              <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant text-xs font-bold">3</div>
              <span className="text-sm font-medium text-on-surface-variant">Review</span>
            </div>
          </nav>

          {/* Form Content (Simulated Step 1) */}
          <div className="space-y-8">
            {/* Row 1: Category & Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-outline">Category</label>
                <select className="w-full bg-surface-container border-none rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/20 appearance-none text-sm cursor-pointer outline-none">
                  <option>Select a category</option>
                  <option>Books & Education</option>
                  <option>Clothing & Textiles</option>
                  <option>Electronics</option>
                  <option>Non-perishable Food</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-outline">Item Name</label>
                <input className="w-full bg-surface-container border-none rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/20 text-sm outline-none" placeholder="e.g. Science Encyclopedia" type="text" />
              </div>
            </div>

            {/* Row 2: Quantity */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-outline">Quantity + Unit</label>
              <div className="flex gap-4">
                <input className="w-24 bg-surface-container border-none rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/20 text-sm text-center outline-none" placeholder="1" type="number" />
                <select className="flex-1 bg-surface-container border-none rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/20 appearance-none text-sm cursor-pointer outline-none">
                  <option>Pieces</option>
                  <option>Kilograms</option>
                  <option>Litres</option>
                  <option>Boxes</option>
                </select>
              </div>
            </div>

            {/* Row 3: Description */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-outline">Description</label>
              <textarea className="w-full bg-surface-container border-none rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/20 text-sm resize-none outline-none" placeholder="Briefly describe the condition and any important details..." rows="4"></textarea>
            </div>

            {/* Row 4: Photo Upload */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-outline">Item Photos</label>
              <div className="border-2 border-dashed border-outline-variant/30 rounded-xl p-8 flex flex-col items-center justify-center text-center bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-primary-fixed mb-4 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">add_a_photo</span>
                </div>
                <p className="text-sm font-medium text-on-surface">Click to upload or drag and drop</p>
                <p className="text-xs text-outline mt-1">PNG, JPG or PDF (max. 5MB)</p>
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="flex justify-between items-center pt-6 border-t border-surface-container">
            <Link href="/donor-dashboard" className="px-6 py-3 text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors">
              Save as Draft
            </Link>
            <Link href="/donor-dashboard" className="px-10 py-3 bg-primary text-on-primary rounded-lg text-sm font-medium hover:opacity-95 transform active:scale-95 transition-all">
              Next: Location
            </Link>
          </div>
        </div>

        {/* Step Preview (Inactive Mockup for Layout Reference) */}
        <div className="max-w-[640px] w-full mt-12 grid grid-cols-2 gap-4 opacity-40 grayscale">
          <div className="bg-surface-container p-6 rounded-xl space-y-4 border border-outline-variant/10">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined" data-icon="location_on">location_on</span>
              <span className="text-sm font-semibold">Location (Draft)</span>
            </div>
            <div className="h-2 bg-surface-container-high rounded w-3/4"></div>
            <div className="h-2 bg-surface-container-high rounded w-1/2"></div>
          </div>
          <div className="bg-surface-container p-6 rounded-xl space-y-4 border border-outline-variant/10">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined" data-icon="fact_check">fact_check</span>
              <span className="text-sm font-semibold">Review (Draft)</span>
            </div>
            <div className="h-2 bg-surface-container-high rounded w-3/4"></div>
            <div className="h-2 bg-surface-container-high rounded w-1/2"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="ml-[220px] bg-[#f4f4f2] dark:bg-slate-900 py-20 mt-auto flex flex-col items-center justify-center space-y-8 text-center border-t border-outline-variant/10">
        <div className="text-[#005440] font-medium text-xl font-headline tracking-tighter">Give for Good</div>
        <nav className="flex flex-wrap justify-center gap-8">
          <a className="text-[13px] leading-relaxed opacity-60 hover:opacity-100 hover:text-[#005440] transition-all" href="#">Privacy Policy</a>
          <a className="text-[13px] leading-relaxed opacity-60 hover:opacity-100 hover:text-[#005440] transition-all" href="#">Terms of Service</a>
          <a className="text-[13px] leading-relaxed opacity-60 hover:opacity-100 hover:text-[#005440] transition-all" href="#">NGO Partners</a>
          <a className="text-[13px] leading-relaxed opacity-60 hover:opacity-100 hover:text-[#005440] transition-all" href="#">Contact</a>
        </nav>
        <p className="text-[13px] leading-relaxed text-slate-500">© 2024 Editorial Altruism. All missions reserved.</p>
      </footer>
    </div>
  );
}
