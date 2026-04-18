import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ArrowRight,
  MapPin,
  MoveRight,
  PostAdd, // Note: You can use 'Box' if PostAdd isn't in your lucide set
  BarChart3,
  Handshake,
  Heart
} from "lucide-react";
import Topbar from '@/components/layout/topbar';
import Footer from "@/components/layout/footer";

export default function LandingContent() {
  return (
    <>
      <Topbar />
      <main className="pt-5 bg-[#f9f9f7]">
        {/* --- HERO SECTION --- */}
        <section className="max-w-7xl mx-auto px-8 py-10 lg:py-20">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
              <h1 className="text-6xl md:text-7xl font-medium tracking-tighter text-slate-900 leading-[1.05] mb-8">
                Connect what you <span className="italic text-[#005440]">have</span> with those who <span className="italic text-[#005440]">need</span> it.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-12">
                A curated digital ecosystem matching surplus resources with high-impact NGOs. Real-time logistical harmony for the modern philanthropist.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#005440] hover:bg-[#003d2e] text-white px-8 py-7 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all">
                  Donate something
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-2 border-[#005440] text-[#005440] px-8 py-7 rounded-full font-semibold text-lg hover:bg-slate-100 transition-all">
                  Register as NGO
                </Button>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 relative mt-12 lg:mt-0">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-200 relative shadow-2xl">
                <img
                  alt="Digital Curator"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80"
                />
                <div className="absolute inset-0 bg-[#005440]/10"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl border border-slate-100 shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#a0f3d4] rounded-full flex items-center justify-center text-[#005440]">
                    <Heart className="h-6 w-6 fill-current" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Match of the day</p>
                    <p className="text-xs text-slate-500">Laptops for Learning matched with 12 devices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- LIVE IMPACT TICKER --- */}
        <section className="bg-gradient-to-r from-[#005440] to-[#0f6e56] py-10 w-full overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee-infinite">
            <div className="flex items-center gap-24 px-8 text-white/90 font-medium tracking-tight uppercase text-sm">
              <ImpactLabel text="2,340 donations matched" />
              <ImpactLabel text="180 NGOs served" />
              <ImpactLabel text="14 cities reached" />
              {/* Duplicate for loop */}
              <ImpactLabel text="2,340 donations matched" />
              <ImpactLabel text="180 NGOs served" />
              <ImpactLabel text="14 cities reached" />
            </div>
          </div>
        </section>

        {/* --- HOW IT WORKS --- */}
        <section className="bg-[#f4f4f2] py-32">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-20 max-w-2xl">
              <h2 className="text-4xl font-medium tracking-tight mb-6">How the curation works</h2>
              <p className="text-slate-600 leading-relaxed">
                We strip away the noise and focus on direct, impactful logistics. Our platform ensures that every donated item finds its most relevant home.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <ProcessCard
                icon={<ArrowRight className="rotate-[-45deg]" />}
                title="Donor posts item"
                desc="Upload a photo and brief description of the surplus items you're ready to gift."
              />
              <ProcessCard
                icon={<BarChart3 />}
                title="We find the match"
                desc="Our curator engine instantly identifies verified NGOs whose current needs align with your donation."
              />
              <ProcessCard
                icon={<Handshake />}
                title="NGO receives it"
                desc="Finalize coordination through our secure messenger and complete the handover impactfully."
              />
            </div>
          </div>
        </section>

        {/* --- FEATURED NGOS --- */}
        <section className="py-32 bg-[#f9f9f7]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-4xl font-medium tracking-tight text-slate-900">Active mission requests</h2>
              <a className="text-[#005440] font-medium flex items-center gap-2 hover:translate-x-1 transition-all" href="#">
                View all NGOs <MoveRight className="h-5 w-5" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <NGOCard
                title="Bridge The Gap"
                location="Seattle, WA"
                need="15 Laptops for STEM students"
                status="Urgent"
                img="https://images.unsplash.com/photo-1542810634-7bc2c7ad03c0?w=100&h=100&fit=crop"
              />
              <NGOCard
                title="Urban Roots"
                location="Austin, TX"
                need="Bulk gardening equipment"
                status="Active"
                img="https://images.unsplash.com/photo-1589923188900-85dae523342b?w=100&h=100&fit=crop"
              />
              <NGOCard
                title="Heal Network"
                location="Chicago, IL"
                need="Sterilized medical supplies"
                status="Active"
                img="https://images.unsplash.com/photo-1505751172107-573940d0fca0?w=100&h=100&fit=crop"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

{/* --- HELPER COMPONENTS --- */ }

function ImpactLabel({ text }) {
  return (
    <span className="flex items-center gap-3">
      <span className="w-2.5 h-2.5 rounded-full bg-[#fd7549]"></span>
      {text}
    </span>
  );
}

function ProcessCard({ icon, title, desc }) {
  return (
    <div className="group">
      <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 group-hover:bg-[#a0f3d4] text-[#005440] transition-colors duration-500 shadow-sm border border-slate-100">
        {React.cloneElement(icon, { className: "h-8 w-8" })}
      </div>
      <h3 className="text-xl font-medium mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function NGOCard({ title, location, need, status, img }) {
  const isUrgent = status.toLowerCase() === 'urgent';
  return (
    <Card className="bg-white rounded-2xl p-8 hover:bg-[#eeeeec] border-none shadow-sm transition-all duration-300">
      <CardHeader className="flex flex-row justify-between items-start p-0 mb-12 space-y-0">
        <div className="w-14 h-14 rounded-full bg-slate-100 overflow-hidden">
          <img src={img} alt="Logo" className="w-full h-full object-cover" />
        </div>
        <Badge className={`${isUrgent ? 'bg-orange-100 text-[#a8380f]' : 'bg-[#a0f3d4] text-[#005440]'} border-none uppercase text-[10px] font-bold tracking-widest px-3 py-1 rounded-full`}>
          {status}
        </Badge>
      </CardHeader>
      <CardContent className="p-0">
        <h3 className="text-2xl font-medium mb-1 text-slate-900">{title}</h3>
        <p className="text-slate-400 text-sm mb-6 flex items-center gap-1">
          <MapPin className="h-3 w-3" /> {location}
        </p>
        <div className="p-4 bg-slate-50 rounded-xl mb-8">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 text-xs">Current Need</p>
          <p className="text-slate-900 font-medium text-sm">{need}</p>
        </div>
        <Button variant="outline" className="w-full py-6 border-[#005440] text-[#005440] rounded-full text-sm font-medium hover:bg-[#005440] hover:text-white transition-all">
          Donate Now
        </Button>
      </CardContent>
    </Card>
  );
}