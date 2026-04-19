export function ProfileHeader() {
    return (
        <section className="mb-12">
            <div className="bg-surface-container-lowest rounded-xl p-8 flex items-center justify-between shadow-sm">
                <div className="flex items-center space-x-8">
                    <div className="w-24 h-24 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container text-3xl font-bold">
                        JD
                    </div>
                    <div>
                        <div className="flex items-center space-x-3 mb-1">
                            <h2 className="text-3xl font-medium tracking-tight text-on-surface">Julian Deakin</h2>
                            <span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant text-[10px] uppercase font-bold tracking-widest rounded-full">Pro Donor</span>
                        </div>
                        <div className="flex space-x-4 text-sm text-on-surface-variant">
                            <span className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-xs">location_on</span>San Francisco, CA
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-xs">calendar_today</span>Joined March 2023
                            </span>
                        </div>
                    </div>
                </div>
                <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-all active:scale-95">
                    Edit Profile
                </button>
            </div>
        </section>
    );
}
