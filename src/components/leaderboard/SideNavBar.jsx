import Link from 'next/link';

export function SideNavBar() {
    return (
        <aside className="h-screen w-[220px] fixed left-0 top-0 z-40 bg-surface-container-low flex flex-col pt-4 pb-10 px-0">
            <Link href="/" className="px-6 flex items-center mb-8 transition-transform hover:scale-105">
                <img src="/logo.png" alt="GFG Logo" className="h-30 w-auto object-contain" />
            </Link>
            <div className="mb-10 px-6">
                <p className="font-['Inter'] font-normal text-sm leading-6 text-slate-400">Welcome back</p>
                <p className="font-['Inter'] font-medium text-sm text-primary">The Digital Curator</p>
            </div>
            <nav className="flex-1 flex flex-col">
                <a className="text-slate-600 pl-5 py-3 font-['Inter'] font-normal text-sm hover:bg-surface-container transition-all duration-300 flex items-center gap-3" href="#">
                    <span className="material-symbols-outlined text-lg" data-icon="dashboard">dashboard</span> Dashboard
                </a>
                <a className="text-slate-600 pl-5 py-3 font-['Inter'] font-normal text-sm hover:bg-surface-container transition-all duration-300 flex items-center gap-3" href="#">
                    <span className="material-symbols-outlined text-lg" data-icon="volunteer_activism">volunteer_activism</span> My Donations
                </a>
                <Link className="text-primary border-l-4 border-primary pl-4 py-3 font-['Inter'] font-medium text-sm bg-transparent flex items-center gap-3" href="/leaderboard">
                    <span className="material-symbols-outlined text-lg" data-icon="leaderboard" style={{ fontVariationSettings: "'FILL' 1" }}>leaderboard</span> Leaderboard
                </Link>
                <a className="text-slate-600 pl-5 py-3 font-['Inter'] font-normal text-sm hover:bg-surface-container transition-all duration-300 flex items-center gap-3" href="#">
                    <span className="material-symbols-outlined text-lg" data-icon="handshake">handshake</span> Matches
                </a>
                <a className="text-slate-600 pl-5 py-3 font-['Inter'] font-normal text-sm hover:bg-surface-container transition-all duration-300 flex items-center gap-3" href="#">
                    <span className="material-symbols-outlined text-lg" data-icon="chat_bubble">chat_bubble</span> Messages
                </a>
                <a className="text-slate-600 pl-5 py-3 font-['Inter'] font-normal text-sm hover:bg-surface-container transition-all duration-300 flex items-center gap-3" href="#">
                    <span className="material-symbols-outlined text-lg" data-icon="settings">settings</span> Settings
                </a>
            </nav>
            <div className="mt-auto px-6 space-y-4">
                <button className="w-full bg-primary text-on-primary py-2 px-4 rounded-lg font-medium text-sm transition-all active:opacity-80 scale-95">Start a Donation</button>
                <div className="pt-6 space-y-3">
                    <a className="text-slate-600 flex items-center gap-3 text-sm hover:text-primary transition-colors" href="#">
                        <span className="material-symbols-outlined text-lg" data-icon="help">help</span> Support
                    </a>
                    <a className="text-slate-600 flex items-center gap-3 text-sm hover:text-primary transition-colors" href="#">
                        <span className="material-symbols-outlined text-lg" data-icon="logout">logout</span> Logout
                    </a>
                </div>
            </div>
        </aside>
    );
}
