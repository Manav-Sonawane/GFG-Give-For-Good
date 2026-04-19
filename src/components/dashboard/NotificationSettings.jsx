"use client";

import { useState } from 'react';

export function NotificationSettings() {
    return (
        <div className="bg-surface-container-lowest rounded-xl p-10">
            <h3 className="text-xl font-medium mb-8 text-primary">Notifications</h3>
            <div className="space-y-8">
                <ToggleRow
                    title="Donation Milestones"
                    description="Notify me when my contributions hit key targets."
                    defaultChecked={true}
                />
                <ToggleRow
                    title="NGO Match Alerts"
                    description="Get notified when a new matching cause is found."
                    defaultChecked={true}
                />
                <ToggleRow
                    title="Newsletter & Insights"
                    description="Weekly roundup of humanitarian impact stories."
                    defaultChecked={false}
                />
            </div>
        </div>
    );
}

function ToggleRow({ title, description, defaultChecked }) {
    const [checked, setChecked] = useState(defaultChecked);
    return (
        <div className="flex items-center justify-between">
            <div>
                <h4 className="text-sm font-semibold text-on-surface">{title}</h4>
                <p className="text-xs text-on-surface-variant">{description}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    className="sr-only peer"
                    type="checkbox"
                />
                <div className="w-11 h-6 bg-surface-container-high rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
        </div>
    );
}
