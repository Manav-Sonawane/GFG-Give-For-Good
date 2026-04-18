export function CTACard() {
    return (
        <div className="bg-secondary-container p-8 rounded-2xl relative overflow-hidden">
            <div className="relative z-10">
                <h4 className="text-on-secondary-container text-2xl font-bold tracking-tight mb-4 leading-tight">Climb higher. Impact more.</h4>
                <p className="text-on-secondary-container text-sm opacity-90 mb-6">Connect with a recurring donation today and earn double impact points for the next 30 days.</p>
                <button className="bg-on-secondary-container text-white py-3 px-6 rounded-lg font-bold text-sm transition-all active:scale-95">Set Recurring Donation</button>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10">
                <span className="material-symbols-outlined text-[120px]" data-icon="trending_up">trending_up</span>
            </div>
        </div>
    );
}
