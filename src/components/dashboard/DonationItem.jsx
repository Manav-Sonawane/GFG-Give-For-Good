"use client";

import React, { useState } from 'react';

export function DonationItem({ image, title, id, category, quantity, location, date, status, statusColor = "text-primary bg-[#a0f3d4]/20", expanded = false }) {
    const [isExpanded, setIsExpanded] = useState(expanded);

    return (
        <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-container-high/50">
            <div 
                className="grid grid-cols-[1fr_150px_100px_150px_150px_150px] items-center px-8 py-6 cursor-pointer hover:bg-surface-container-low/50 transition-colors"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center overflow-hidden">
                        <img alt={title} src={image} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h3 className="font-medium text-on-surface">{title}</h3>
                        <p className="text-xs text-on-surface-variant">Donation ID: {id}</p>
                    </div>
                </div>
                <div>
                    <span className="px-3 py-1 bg-surface-container text-[11px] font-bold tracking-wider text-on-surface-variant rounded-full uppercase">{category}</span>
                </div>
                <div className="text-sm font-medium text-on-surface">{quantity}</div>
                <div className="text-sm text-slate-500">{location}</div>
                <div className="text-sm text-slate-500">{date}</div>
                <div className="flex justify-end">
                    <span className={`px-3 py-1 ${statusColor} text-[11px] font-bold rounded-full uppercase tracking-tighter`}>{status}</span>
                </div>
            </div>

            {/* Expanded Timeline */}
            {isExpanded && (
                <div className="px-8 pb-8 pt-4 bg-surface-container-low/20 border-t border-surface-container-high/30">
                    <div className="flex items-start max-w-4xl mx-auto py-6">
                        <TimelineStep title="Pending" time="Oct 20, 09:12" active={true} showLine={true} />
                        <TimelineStep title="Matched" time="Oct 21, 14:30" active={true} showLine={true} />
                        <TimelineStep title="Accepted" time="Oct 22, 10:05" active={true} showLine={true} />
                        <TimelineStep title="In Transit" time="Oct 23, 16:45" active={true} showLine={true} />
                        <TimelineStep title="Completed" time="Oct 24, 11:20" active={status === "Completed"} showLine={false} />
                    </div>
                </div>
            )}
        </div>
    );
}

function TimelineStep({ title, time, active, showLine }) {
    return (
        <div className="flex-1 relative flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full ${active ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-slate-400'} flex items-center justify-center z-10 transition-colors`}>
                <span className="material-symbols-outlined text-sm" data-icon="check" style={active ? { fontVariationSettings: "'FILL' 1" } : {}}>check</span>
            </div>
            {showLine && (
                <div className={`absolute h-[2px] w-full top-4 left-1/2 ${active ? 'bg-primary' : 'bg-surface-container-high'} transition-colors`}></div>
            )}
            <span className={`mt-3 text-[11px] font-bold ${active ? 'text-primary' : 'text-slate-400'} uppercase transition-colors`}>{title}</span>
            <span className="text-[10px] text-slate-400">{time}</span>
        </div>
    );
}
