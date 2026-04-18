export function DashboardHeader() {
    return (
        <header className="fixed top-0 ml-[220px] w-[calc(100%-220px)] bg-surface/80 backdrop-blur-md z-30 flex justify-between items-center px-12 py-6">
            <div className="flex items-center flex-1">
                <div className="relative w-full max-w-md">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" data-icon="search">search</span>
                    <input className="w-full pl-10 pr-4 py-2 bg-surface-container border-none rounded-full text-sm focus:ring-1 focus:ring-primary/20 transition-all" placeholder="Search NGO impact..." type="text" />
                </div>
            </div>
            <div className="flex items-center gap-6">
                <button className="relative hover:opacity-70 transition-opacity">
                    <span className="material-symbols-outlined text-primary" data-icon="notifications">notifications</span>
                    <span className="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full"></span>
                </button>
                <button className="hover:opacity-70 transition-opacity">
                    <span className="material-symbols-outlined text-primary text-3xl" data-icon="account_circle">account_circle</span>
                </button>
            </div>
        </header>
    );
}
