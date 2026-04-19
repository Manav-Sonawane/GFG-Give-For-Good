"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function SideNavBar() {
    const pathname = usePathname();

    const navItems = [
        { name: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
        { name: 'My Donations', href: '/my-donations', icon: 'volunteer_activism' },
        { name: 'Leaderboard', href: '/leaderboard', icon: 'leaderboard' },
        { name: 'Matches', href: '/matches', icon: 'handshake' },
        { name: 'Messages', href: '#', icon: 'chat_bubble' },
        { name: 'Notifications', href: '/notifications', icon: 'notifications' },
        { name: 'Settings', href: '/settings', icon: 'settings' },
    ];

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
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link 
                            key={item.name}
                            href={item.href}
                            className={`py-3 font-['Inter'] flex items-center gap-3 transition-all duration-300 ${
                                isActive 
                                ? "text-primary border-l-4 border-primary pl-4 font-medium bg-transparent" 
                                : "text-slate-600 pl-5 font-normal text-sm hover:bg-surface-container hover:text-primary"
                            }`}
                        >
                            <span 
                                className="material-symbols-outlined text-lg" 
                                data-icon={item.icon} 
                                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                            >
                                {item.icon}
                            </span>
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
            <div className="mt-auto px-6 space-y-4">
                <button className="w-full bg-primary text-on-primary py-2 px-4 rounded-lg font-medium text-sm transition-all active:opacity-80 scale-95 hover:bg-primary-container">Start a Donation</button>
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
