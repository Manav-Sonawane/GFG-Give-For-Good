export function DashboardHeader({ title, subtitle, searchPlaceholder = "Search..." }) {
    return (
        <header className="fixed top-0 left-[220px] right-0 bg-background/80 backdrop-blur-md z-30 flex justify-between items-center px-12 py-8">
            <div>
                {title && <h1 className="text-3xl font-medium tracking-tight text-on-background">{title}</h1>}
                {subtitle && <p className="text-sm text-on-surface-variant/70 mt-1">{subtitle}</p>}
            </div>
            
            <div className="flex items-center gap-6">
                <div className="relative group">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 group-focus-within:text-primary transition-colors">
                        <span className="material-symbols-outlined text-lg" data-icon="search">search</span>
                    </span>
                    <input className="w-64 pl-10 pr-4 py-2 bg-surface-container border-none rounded-full text-sm focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all" placeholder={searchPlaceholder} type="text" />
                </div>
                <div className="flex items-center gap-4">
                    <button className="relative hover:opacity-70 transition-opacity text-on-surface-variant p-2 rounded-full hover:bg-surface-container">
                        <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
                        <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full"></span>
                    </button>
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-surface-container-high transition-transform hover:scale-105 cursor-pointer">
                         <img alt="Donor Avatar" data-alt="professional portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwCNvSYUt98BOL4LXfG2wh0F5br9u3tuFjqHttw3xnyUXxWEkhGtYQdSw_k1658YqeUvKoj2Sl5A31lqP7TABeLIqVHDDn4TEJdqCWKTugPdL-ZeHID5aK2VXPV8bc_RjpTGaOZNjCrBFX52KEzgmcyiiGxkweDNCji-lXusIWXqL0gRZDE3AaIpV4GNcorNZg86Le22Kw7UvNGhr66wTcEFmSUUYZBXkqiCJXQMmyxzKLgK9I7XwaJFOTdufUrmW7gkngreQqsNw" />
                    </div>
                </div>
            </div>
        </header>
    );
}
