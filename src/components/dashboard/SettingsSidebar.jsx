export function DangerZone() {
    return (
        <div className="bg-surface-container-lowest rounded-xl p-10">
            <h3 className="text-xl font-medium mb-4 text-secondary">Danger Zone</h3>
            <p className="text-xs text-on-surface-variant mb-8 leading-relaxed">
                Once you delete your account, there is no going back. Please be certain. All donation history and match data will be permanently removed.
            </p>
            <button className="w-full bg-secondary/10 text-secondary py-3 rounded-lg text-sm font-semibold hover:bg-secondary hover:text-white transition-all">
                Delete Account
            </button>
        </div>
    );
}

export function SupportCard() {
    return (
        <div className="p-10 bg-primary-container rounded-xl text-on-primary-container relative overflow-hidden group">
            <div className="relative z-10">
                <h3 className="text-lg font-bold mb-2">Support the Network</h3>
                <p className="text-xs opacity-80 mb-6 leading-relaxed">
                    Help us keep the platform running by making a small operational donation.
                </p>
                <button className="bg-white text-primary px-6 py-2 rounded-full text-sm font-bold active:scale-95 transition-transform">
                    Support Now
                </button>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-20 group-hover:scale-110 transition-transform duration-700">
                <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    volunteer_activism
                </span>
            </div>
        </div>
    );
}
