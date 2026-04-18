export function CategoryChampions() {
    return (
        <section className="space-y-6">
            <h3 className="text-xl font-medium text-primary">Category Champions</h3>
            <div className="space-y-4">
                <ChampionCard icon="eco" category="Environment" name="Leo Grant" points="45" />
                <ChampionCard icon="school" category="Education" name="Maria Chen" points="32" />
            </div>
        </section>
    );
}

export function ChampionCard({ icon, category, name, points }) {
    return (
        <div className="bg-surface-container p-6 rounded-2xl">
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-primary-fixed rounded-lg">
                    <span className="material-symbols-outlined text-primary" data-icon={icon}>{icon}</span>
                </div>
                <span className="text-xs font-bold text-secondary tracking-widest uppercase">{category}</span>
            </div>
            <p className="text-sm font-medium text-on-surface">Champion: {name}</p>
            <p className="text-xs text-on-surface-variant mt-1">{points} Impact Points this week</p>
        </div>
    );
}
