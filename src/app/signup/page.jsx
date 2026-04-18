import AuthForm from './AuthForm';

export default function Page() {
    return (
        // h-screen and overflow-hidden prevent the body scrollbar
        <div className="bg-white h-screen w-screen overflow-hidden font-sans">
            <main className="w-full h-full grid grid-cols-1 lg:grid-cols-12 overflow-hidden">

                {/* Left Side: Auth Logic */}
                <div className="lg:col-span-5 flex flex-col h-full bg-white overflow-y-auto custom-scrollbar">
                    <div className="w-full max-w-[440px] mx-auto pt-8 lg:pt-16 px-6 xl:px-8 pb-12 flex flex-col">
                        <div className="mb-10">
                            <h1 className="text-xl font-medium tracking-wide text-[#005440]">DonateConnect</h1>
                        </div>

                        <AuthForm />
                    </div>
                </div>

                {/* Right Side: Editorial Panel */}
                <div className="lg:col-span-7 hidden lg:block relative bg-[#005440] h-full overflow-hidden">
                    <img
                        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC29q6WFiQs9eTsX6-Y-rKD_cujDXV8DquEHD-Z0FxtBiyEBBmG0q1gwb_uZm3cXOUEbQT_a3k_ccxSpb_zwMB-Livk79NCLF4m0vujoDuzBOCOUOh_DEduxLA6kdqxaF__nDgwK5QdoTw3dpP6vD3JmCj002BQyGAh_S20fudRnfYEvfoLHhTDzfNV20Mh0RXggvPDY8rfjmKqzIyn3x2yplNnTHEUdXs9yBscI1S1e71YJ1tuto746ktspqnQSkD-KTahIDjLteo"
                        alt="Unity background"
                    />
                    {/* Live Impact Floating Card */}
                    <div className="absolute right-0 top-[55%] -translate-y-1/2 bg-[#d7dbd9] text-[#1a1c1b] p-6 rounded-l-xl shadow-2xl w-56 z-10">
                        <p className="text-[9px] font-bold text-[#005440] uppercase tracking-widest mb-3">Live Impact</p>
                        <p className="text-[17px] font-medium tracking-tight mb-1">$12,400 Raised</p>
                        <p className="text-[9px] text-[#3f4944] mb-3">Sustainable Water Initiative</p>
                        <div className="w-full bg-[#bec9c3] h-1 rounded-full overflow-hidden">
                            <div className="bg-[#005440] w-[75%] h-full rounded-full"></div>
                        </div>
                    </div>

                    <div className="relative h-full flex flex-col justify-between p-12 text-white">
                        <div className="space-y-8 mt-4">
                            <div className="w-10 h-1 bg-[#a0f3d4]"></div>
                            <h3 className="text-[52px] leading-[1.05] font-medium tracking-tight">Curation <br />for Good.</h3>
                        </div>
                        <div className="space-y-10">
                            <p className="text-base font-light leading-[1.6] opacity-90 italic max-w-[280px]">
                                "Philanthropy is not just about giving; it is about the intentional connection between human stories and collective action."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-2">
                                    <div className="w-[30px] h-[30px] rounded-full border border-[#005440] bg-gray-300 overflow-hidden relative z-20">
                                        <img src="https://i.pravatar.cc/100?img=33" alt="avatar" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="w-[30px] h-[30px] rounded-full border border-[#005440] bg-gray-300 overflow-hidden relative z-10">
                                        <img src="https://i.pravatar.cc/100?img=47" alt="avatar" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="w-[30px] h-[30px] rounded-full border border-[#005440] bg-[#008f6b] text-white flex items-center justify-center text-[9px] font-bold relative z-0">
                                        +2k
                                    </div>
                                </div>
                                <span className="text-[10px] font-medium tracking-wide">Trusted by 2,000+ Active Donors</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="fixed bottom-6 w-full text-center pointer-events-none">
                <p className="text-[10px] text-[#86918d] pl-10">
                    © 2026 Editorial Altruism. All missions reserved.
                </p>
            </div>
        </div>
    );
}