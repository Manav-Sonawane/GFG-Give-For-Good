export function OrganisationDetails() {
    return (
        <div className="bg-surface-container-lowest rounded-xl p-10">
            <h3 className="text-xl font-medium mb-4 text-primary">Organisation Details</h3>
            <p className="text-sm text-on-surface-variant mb-6">Manage how your NGO appears to potential donors and matching partners.</p>
            <div className="space-y-6">
                <OrgField label="Organisation Name" placeholder="e.g. Green Earth Foundation" />
                <div className="space-y-2">
                    <label className="text-xs font-semibold text-outline tracking-wider uppercase">Mission Statement</label>
                    <textarea
                        className="w-full bg-surface-container-low border-none rounded-lg py-3 px-4 focus:ring-1 focus:ring-primary-container transition-all text-sm resize-none"
                        rows={3}
                    />
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <OrgField label="NGO License No." placeholder="Reg-10293-AB" />
                    <OrgField label="Contact Phone" placeholder="+1 (555) 000-0000" />
                </div>
            </div>
        </div>
    );
}

function OrgField({ label, placeholder }) {
    return (
        <div className="space-y-2">
            <label className="text-xs font-semibold text-outline tracking-wider uppercase">{label}</label>
            <input
                className="w-full bg-surface-container-low border-none rounded-lg py-3 px-4 focus:ring-1 focus:ring-primary-container transition-all text-sm"
                placeholder={placeholder}
                type="text"
            />
        </div>
    );
}
