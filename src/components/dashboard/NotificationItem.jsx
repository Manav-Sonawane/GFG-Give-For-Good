export function NotificationItem({ icon, iconBg, iconColor, title, time, description, unread = false }) {
    return (
        <div className={`group relative flex items-start p-4 bg-surface-container-lowest rounded-xl transition-all duration-300 hover:bg-surface-container-high cursor-pointer ${!unread ? 'opacity-80 hover:opacity-100' : ''}`}>
            <div className={`flex-shrink-0 w-12 h-12 rounded-full ${iconBg} flex items-center justify-center ${iconColor}`}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
            </div>
            <div className="ml-4 flex-1">
                <div className="flex justify-between items-start">
                    <h3 className="text-[15px] font-bold text-on-surface leading-tight">{title}</h3>
                    <span className="text-[12px] text-outline ml-4 shrink-0">{time}</span>
                </div>
                <p className="text-[14px] text-on-surface-variant mt-1 leading-relaxed">{description}</p>
            </div>
            {unread && (
                <div className="ml-4 self-center shrink-0">
                    <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                </div>
            )}
        </div>
    );
}

export function NotificationGroup({ title, children }) {
    return (
        <div className="mb-12">
            <h2 className="text-[13px] font-medium text-outline uppercase tracking-widest mb-6 px-4">{title}</h2>
            <div className="space-y-4">
                {children}
            </div>
        </div>
    );
}
