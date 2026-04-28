"use client";
import React from 'react';
import Link from 'next/link';

export default function NGODashboard() {
  return (
    <div className="bg-surface text-on-surface min-h-screen font-sans">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-screen w-64 border-r border-outline-variant/20 bg-surface flex flex-col p-4 space-y-2 z-50">
        <Link href="/ngo-dashboard" className="px-4 py-6 block">
          <span className="text-xl font-bold text-primary tracking-tight">Give for Good</span>
        </Link>
        
        <div className="flex items-center space-x-3 px-4 py-4 mb-4 bg-surface-container-low rounded-xl">
          <img 
            alt="User profile photo" 
            className="w-10 h-10 rounded-full object-cover" 
            data-alt="corporate logo of a global relief organization featuring a stylized globe in soft emerald green tones" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUaxLopNlZ9N3enp4xd7svfDgigimV96ZJzgXpy1ucaGVRGlCBAZTOqEcUuw9ZE1yCnlYN2HwjOdxguSUn4tWEf4PikbThoTZENUVl0iIZ-pK_K6B-TF8vuATwK3gAld3B2GqnK9-K7RsHOAYrRDG71hKhQbgPBRyKrMENuTZ9Y0fYtPznExFxeOUzPb4H7XdLMIu_ZnjYIMVEe8ZOUPcnlmgy7buT3j8Kq9TtIzlONfSXjOyQJCPFLAnMygVxLZhVQ91k9PVHvxw" 
          />
          <div className="overflow-hidden">
            <p className="text-xs font-semibold text-outline uppercase tracking-wider">Welcome back</p>
            <p className="text-sm font-bold text-on-surface truncate">Global Relief Network</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          <a className="flex items-center space-x-3 px-4 py-3 bg-primary-fixed text-on-primary-fixed-variant rounded-lg font-medium transition-transform hover:scale-[1.02]" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span className="text-sm">Dashboard</span>
          </a>
          <a className="flex items-center space-x-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low rounded-lg font-medium transition-transform hover:scale-[1.02]" href="#">
            <span className="material-symbols-outlined" data-icon="volunteer_activism">volunteer_activism</span>
            <span className="text-sm">My Donations</span>
          </a>
          <a className="flex items-center space-x-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low rounded-lg font-medium transition-transform hover:scale-[1.02]" href="#">
            <span className="material-symbols-outlined" data-icon="leaderboard">leaderboard</span>
            <span className="text-sm">Leaderboard</span>
          </a>
          <a className="flex items-center space-x-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low rounded-lg font-medium transition-transform hover:scale-[1.02]" href="#">
            <span className="material-symbols-outlined" data-icon="handshake">handshake</span>
            <span className="text-sm">Matches</span>
          </a>
          <a className="flex items-center space-x-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low rounded-lg font-medium transition-transform hover:scale-[1.02]" href="#">
            <span className="material-symbols-outlined" data-icon="mail">mail</span>
            <span className="text-sm">Messages</span>
          </a>
          <a className="flex items-center space-x-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low rounded-lg font-medium transition-transform hover:scale-[1.02]" href="#">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            <span className="text-sm">Notifications</span>
          </a>
          <a className="flex items-center space-x-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low rounded-lg font-medium transition-transform hover:scale-[1.02]" href="#">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            <span className="text-sm">Settings</span>
          </a>
        </nav>

        <Link href="/post-a-requirement" className="w-full mt-auto py-3 px-4 bg-tertiary text-on-tertiary rounded-full font-semibold flex items-center justify-center space-x-2 transition-opacity active:opacity-80">
          <span className="material-symbols-outlined" data-icon="add">add</span>
          <span className="text-sm">Post a Requirement</span>
        </Link>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 min-h-screen flex flex-col">
        {/* Top Navigation (Small Variant) */}
        <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-md flex justify-between items-center w-full px-8 py-3">
          <div className="flex items-center bg-surface-container-lowest border border-outline-variant/20 rounded-full px-4 py-1.5 w-96">
            <span className="material-symbols-outlined text-outline text-lg" data-icon="search">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-outline/60 outline-none" placeholder="Search requirements..." type="text" />
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors relative">
              <span className="material-symbols-outlined text-on-surface-variant" data-icon="notifications">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-tertiary rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold text-xs">
              GR
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-10 flex-1 w-full">
          {/* Hero Header Section */}
          <section className="relative p-10 rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary to-primary-container text-on-primary">
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <h1 className="text-4xl md:text-5xl font-medium tracking-tight">Global Relief Network</h1>
                <div className="flex items-center space-x-1 bg-on-primary/10 backdrop-blur px-3 py-1 rounded-full border border-on-primary/20">
                  <span className="material-symbols-outlined text-sm" data-icon="verified" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Verified NGO</span>
                </div>
              </div>
              <p className="text-on-primary-container text-lg leading-relaxed opacity-90">
                Operational across 12 countries. You have <span className="font-bold text-white">4 urgent match alerts</span> requiring immediate action today.
              </p>
            </div>
            {/* Abstract decorative element */}
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-secondary opacity-10 blur-[100px] rounded-full"></div>
          </section>

          {/* Metrics Grid */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/20 hover:bg-surface-container-low transition-colors duration-300">
              <p className="text-xs font-bold text-outline uppercase tracking-widest mb-1">Open Requirements</p>
              <h3 className="text-3xl font-semibold text-primary">24</h3>
              <div className="mt-4 flex items-center text-xs text-secondary font-medium">
                <span className="material-symbols-outlined text-sm mr-1" data-icon="trending_up">trending_up</span>
                +12% from last week
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/20 hover:bg-surface-container-low transition-colors duration-300">
              <p className="text-xs font-bold text-outline uppercase tracking-widest mb-1">Matched</p>
              <h3 className="text-3xl font-semibold text-secondary">158</h3>
              <div className="mt-4 flex items-center text-xs text-primary font-medium">
                <span className="material-symbols-outlined text-sm mr-1" data-icon="check_circle">check_circle</span>
                85% match efficiency
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/20 hover:bg-surface-container-low transition-colors duration-300">
              <p className="text-xs font-bold text-outline uppercase tracking-widest mb-1">Received (MT)</p>
              <h3 className="text-3xl font-semibold text-primary">1.2k</h3>
              <div className="mt-4 flex items-center text-xs text-outline font-medium">
                <span className="material-symbols-outlined text-sm mr-1" data-icon="inventory_2">inventory_2</span>
                Essential supplies
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/20 hover:bg-surface-container-low transition-colors duration-300">
              <p className="text-xs font-bold text-outline uppercase tracking-widest mb-1">Donors Helped</p>
              <h3 className="text-3xl font-semibold text-tertiary">4.8k</h3>
              <div className="mt-4 flex items-center text-xs text-tertiary font-medium">
                <span className="material-symbols-outlined text-sm mr-1" data-icon="favorite">favorite</span>
                Community impact
              </div>
            </div>
          </section>

          {/* Matches and Fulfillment Layout (Asymmetric) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Match Alerts Section (Bento Grid Style) */}
            <section className="lg:col-span-8 space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">Match Alerts</h2>
                  <p className="text-on-surface-variant text-sm">Priority connections based on your active requirements.</p>
                </div>
                <button className="text-secondary text-sm font-semibold hover:underline">View All Alerts</button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Alert Card 1 */}
                <div className="bg-surface-container-low rounded-2xl p-6 relative overflow-hidden group">
                  <div className="absolute top-4 right-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center">
                    <span className="material-symbols-outlined text-xs mr-1" data-icon="bolt" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                    Critical
                  </div>
                  <div className="mb-4">
                    <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Urgency Score: 98/100</span>
                    <h4 className="text-lg font-semibold mt-1">Medical Supplies: Insulin Batch</h4>
                    <p className="text-sm text-on-surface-variant mt-2 line-clamp-2">Donor "PharmaCare Global" has matched your requirement for 500 units of medical insulin.</p>
                  </div>
                  <div className="flex items-center space-x-3 mb-6">
                    <img alt="Medical supplies icon" className="w-8 h-8 rounded-full object-cover" data-alt="close-up of medical supplies and medicine bottles in a clean clinical environment with bright white lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZZmK3rWSPBcDH_3OknjKAKW7s8AoQv-R87d_MzLrGtEizoDhvQUYTdRi1pUHXdFNWtQPdlq_zIkQTT1MMTfnRI1bOYkHc3cXvaK4gNP9yVYRgOda6OmC2Of4WUbJ6aLrsrugsp3X_i1DEXr51Tlgu_7S_YgHPHDejJyeRgz0PIVuHygdZsVNEqi-yCNUE4u412RDsoPRUw-h72lThPOc0KMl4OQsHxL1omfxEeroki4f1t9qhP7TyUYbYoeB7yMGepWbTmEFZvmA" />
                    <span className="text-xs text-outline">Expires in 14h</span>
                  </div>
                  <div className="flex space-x-3">
                    <button className="flex-1 py-2.5 bg-primary text-on-primary rounded-full text-xs font-bold transition-transform active:scale-95">Accept Match</button>
                    <button className="px-5 py-2.5 bg-surface-container-lowest border border-outline-variant/20 text-on-surface-variant rounded-full text-xs font-bold hover:bg-error/5 hover:text-error transition-colors">Decline</button>
                  </div>
                </div>

                {/* Alert Card 2 */}
                <div className="bg-surface-container-low rounded-2xl p-6 relative overflow-hidden group">
                  <div className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center">
                    <span className="material-symbols-outlined text-xs mr-1" data-icon="verified" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    Reliable Donor
                  </div>
                  <div className="mb-4">
                    <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Urgency Score: 72/100</span>
                    <h4 className="text-lg font-semibold mt-1">Grains and Legumes (5 Tons)</h4>
                    <p className="text-sm text-on-surface-variant mt-2 line-clamp-2">Matching with "Regional Food Collective". Logistics support included in this offer.</p>
                  </div>
                  <div className="flex items-center space-x-3 mb-6">
                    <img alt="Food supplies icon" className="w-8 h-8 rounded-full object-cover" data-alt="warm sunlit photo of organic grains in jute sacks on a rustic wooden floor with earthy tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyCf3mYRO2yTiIsdMcNsHvTRGWLiQ0NiASvWClP71ZXa8PuZ-emsYfoU9HOEH1eGqZ4OwoHf2KUgMLw0kPJVKUQ6IJp3HbYfSmBH0amX96lSFFXqJjjcvBVp8HbW95DkpZrnpKzqHRm8h4xZttLW6Q2XgXELQiBoRNsNDopJXv0JKo98UvLBJy46TK1ZWyHCoti45tymTStp6oB3U_G2ElQ3iVGcNBUkm2xGNvUibsEzK6dKi3nMcaKF2WU_zcCPIYaOazimdI-ac" />
                    <span className="text-xs text-outline">Expires in 2d</span>
                  </div>
                  <div className="flex space-x-3">
                    <button className="flex-1 py-2.5 bg-primary text-on-primary rounded-full text-xs font-bold transition-transform active:scale-95">Accept Match</button>
                    <button className="px-5 py-2.5 bg-surface-container-lowest border border-outline-variant/20 text-on-surface-variant rounded-full text-xs font-bold transition-colors">Decline</button>
                  </div>
                </div>
              </div>

              {/* Fulfillment History Header */}
              <div className="pt-8 flex items-center space-x-4">
                <h2 className="text-2xl font-semibold tracking-tight">Recent Fulfillment</h2>
                <div className="h-px flex-1 bg-outline-variant/20"></div>
              </div>

              {/* Fulfillment List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-5 bg-surface-container-lowest rounded-xl border border-outline-variant/20 group hover:bg-surface-container-low transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">2,000 Blankets & Winter Wear</p>
                      <p className="text-xs text-outline">Delivered to Syrian Border Hub • June 12, 2024</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-primary">Completed</p>
                    <p className="text-xs text-outline">Ref #99210</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-5 bg-surface-container-lowest rounded-xl border border-outline-variant/20 group hover:bg-surface-container-low transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined" data-icon="water_drop">water_drop</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">Mobile Water Purification Units (10x)</p>
                      <p className="text-xs text-outline">Transit to Mumbai Coastal District • June 10, 2024</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-secondary">In Transit</p>
                    <p className="text-xs text-outline">Ref #98552</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-5 bg-surface-container-lowest rounded-xl border border-outline-variant/20 group hover:bg-surface-container-low transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined" data-icon="school">school</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold">Primary Education Kits (500 sets)</p>
                      <p className="text-xs text-outline">Allocated to Southeast Asia region • June 08, 2024</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-primary">Completed</p>
                    <p className="text-xs text-outline">Ref #98001</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Activity Sidebar */}
            <section className="lg:col-span-4 space-y-8">
              <div className="p-8 rounded-2xl bg-on-surface text-surface">
                <h3 className="text-lg font-semibold mb-6">Impact Map</h3>
                <div className="aspect-square bg-white/10 rounded-xl mb-6 relative overflow-hidden">
                  {/* Map Placeholder Style */}
                  <img alt="Global impact map" className="w-full h-full object-cover opacity-40" data-alt="minimalist dark world map with pin markers highlighting active humanitarian aid zones in emerald green" data-location="Global" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlxZVPkdlWLz9hl6tCCKRDPAW68WEU9he3Qv-WeXVVv8M9gxinxHLjQkxxpmJcCuZJcv6W9l0M5AxLwl_jPgluCJWJbNHLDHNLi6p9NLtu3iYiRZEbtmFCYswLOfSgoIBe-vJGo6pUzwvNhk4xoMHLQY98Zke9cXatSxMSGKnMcDA8ildmOChi6jZeQFHM9pXFGtd7jslvKCBYMGdEes8i2Rtlocs1lW0_JtR_sC3IrTalgrC0s9ZJw394Gcj3EkhDvlpoC3pC7GM" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-tertiary rounded-full animate-ping"></div>
                    <div className="w-2 h-2 bg-tertiary rounded-full absolute"></div>
                  </div>
                </div>
                <p className="text-xs text-surface-dim uppercase font-bold tracking-widest mb-2">Next Milestone</p>
                <p className="text-sm mb-4">Reach 5,000 families helped in Q2</p>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-4/5 h-full bg-primary-fixed-dim"></div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-high">
                <h3 className="text-sm font-bold text-outline uppercase tracking-widest mb-6">Active Requirements</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">High-Protein Biscuits</span>
                    <span className="text-xs font-bold text-on-surface-variant">65% met</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Solar Lanterns</span>
                    <span className="text-xs font-bold text-tertiary">Urgent</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Hygiene Kits</span>
                    <span className="text-xs font-bold text-on-surface-variant">12% met</span>
                  </div>
                  <button className="w-full py-2.5 mt-2 bg-surface-container-lowest border border-outline-variant/20 rounded-full text-xs font-bold hover:bg-surface-container-highest transition-colors">
                    Edit Requirements
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-auto w-full py-12 px-8 bg-primary text-on-primary">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <span className="text-2xl font-bold text-on-primary">Give for Good</span>
              <p className="text-on-primary-container text-sm leading-relaxed max-w-xs opacity-80">
                Bridging the gap between global resources and local needs through precision-matching technology.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest opacity-60">Platform</p>
                <a className="block text-sm hover:text-tertiary-fixed transition-colors" href="#">How it works</a>
                <a className="block text-sm hover:text-tertiary-fixed transition-colors" href="#">NGOs</a>
                <a className="block text-sm hover:text-tertiary-fixed transition-colors" href="#">Impact</a>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest opacity-60">Legal</p>
                <a className="block text-sm hover:text-tertiary-fixed transition-colors" href="#">Privacy Policy</a>
                <a className="block text-sm hover:text-tertiary-fixed transition-colors" href="#">Terms of Service</a>
                <a className="block text-sm hover:text-tertiary-fixed transition-colors" href="#">Careers</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest opacity-60">Join the Collective</p>
              <div className="flex">
                <input className="bg-primary-container border-none rounded-l-full px-4 text-sm focus:ring-0 w-full placeholder:text-on-primary-container/40 outline-none" placeholder="Email address" type="email" />
                <button className="bg-tertiary text-on-tertiary px-6 rounded-r-full font-bold text-xs">Join</button>
              </div>
              <p className="text-[10px] opacity-50">© 2024 Give for Good. Curating human impact.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
