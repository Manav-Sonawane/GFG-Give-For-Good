export function Badges() {
    return (
        <section className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-medium text-primary">Your Badges</h3>
                <a className="text-xs font-bold text-primary underline underline-offset-4" href="#">View All</a>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <BadgeItem icon="workspace_premium" active={true} />
                <BadgeItem icon="local_fire_department" active={true} />
                <BadgeItem icon="diversity_1" active={true} />
                <BadgeItem icon="rocket_launch" active={false} />
                <BadgeItem icon="favorite" active={false} />
                <BadgeItem icon="public" active={false} />
            </div>
        </section>
    );
}

export function BadgeItem({ icon, active }) {
    return (
        <div className={`aspect-square bg-surface-container-low rounded-xl flex items-center justify-center group ${active ? 'hover:bg-primary transition-all' : 'opacity-40 grayscale'}`}>
            <span className={`material-symbols-outlined text-primary ${active ? 'group-hover:text-on-primary' : ''} text-3xl`} data-icon={icon} style={{ fontVariationSettings: active ? "'FILL' 1" : undefined }}>{icon}</span>
        </div>
    );
}
