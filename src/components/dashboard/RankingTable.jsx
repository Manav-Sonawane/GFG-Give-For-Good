export function RankingTable() {
    return (
        <div className="space-y-4">
            <div className="flex items-center px-8 text-label-md text-on-surface-variant font-medium opacity-60 uppercase tracking-widest mb-6">
                <div className="w-12 text-center">Rank</div>
                <div className="flex-1 ml-10">Donor</div>
                <div className="w-32">City</div>
                <div className="w-24 text-right">Points</div>
            </div>

            <div className="space-y-2">
                <div className="bg-primary-fixed/30 flex items-center px-8 py-5 rounded-2xl group transition-all">
                    <div className="w-12 text-center font-bold text-primary">14</div>
                    <div className="flex-1 flex items-center gap-4 ml-10">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-medium text-on-primary text-xs">TC</div>
                        <div>
                            <h5 className="font-semibold text-on-surface flex items-center gap-2">
                                The Digital Curator
                                <span className="material-symbols-outlined text-secondary text-sm" data-icon="verified" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                            </h5>
                            <div className="flex gap-1 mt-1">
                                <span className="w-2 h-2 bg-primary rounded-full"></span>
                                <span className="w-2 h-2 bg-primary-fixed rounded-full"></span>
                            </div>
                        </div>
                    </div>
                    <div className="w-32 text-on-surface-variant text-sm">London, UK</div>
                    <div className="w-24 text-right font-bold text-primary">4,205</div>
                </div>

                <RankingRow rank={4} initials="SR" name="Sarah Reed" city="Toronto, CA" points="9,410" />
                <RankingRow rank={5} initials="DM" name="David Miller" city="Paris, FR" points="8,820" />
                <RankingRow rank={6} initials="AL" name="Anna Liang" city="Singapore, SG" points="8,150" />
            </div>
        </div>
    );
}

export function RankingRow({ rank, initials, name, city, points }) {
    return (
        <div className="flex items-center px-8 py-5 rounded-2xl hover:bg-surface-container-high transition-all">
            <div className="w-12 text-center font-medium text-on-surface-variant">{rank}</div>
            <div className="flex-1 flex items-center gap-4 ml-10">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-medium text-slate-500 text-xs">{initials}</div>
                <h5 className="font-medium text-on-surface">{name}</h5>
            </div>
            <div className="w-32 text-on-surface-variant text-sm">{city}</div>
            <div className="w-24 text-right font-medium text-on-surface">{points}</div>
        </div>
    );
}
