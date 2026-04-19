export function AccountSettings() {
    return (
        <div className="bg-surface-container-lowest rounded-xl p-10">
            <h3 className="text-xl font-medium mb-8 text-primary">Account Settings</h3>
            <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <FormField label="Full Name" type="text" defaultValue="Julian Deakin" />
                    <FormField label="City" type="text" defaultValue="San Francisco" />
                </div>
                <FormField label="Email Address" type="email" defaultValue="julian.d@editorial.alt" />
                <div className="space-y-2">
                    <label className="text-xs font-semibold text-outline tracking-wider uppercase">Password</label>
                    <div className="relative">
                        <input
                            className="w-full bg-surface-container-low border-none rounded-lg py-3 px-4 focus:ring-1 focus:ring-primary-container transition-all text-sm"
                            type="password"
                            defaultValue="••••••••••••"
                        />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-xs font-bold" type="button">
                            CHANGE
                        </button>
                    </div>
                </div>
                <div className="pt-4">
                    <button className="border border-primary text-primary px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/5 transition-all" type="button">
                        Update Information
                    </button>
                </div>
            </form>
        </div>
    );
}

function FormField({ label, type, defaultValue, placeholder }) {
    return (
        <div className="space-y-2">
            <label className="text-xs font-semibold text-outline tracking-wider uppercase">{label}</label>
            <input
                className="w-full bg-surface-container-low border-none rounded-lg py-3 px-4 focus:ring-1 focus:ring-primary-container transition-all text-sm"
                type={type}
                defaultValue={defaultValue}
                placeholder={placeholder}
            />
        </div>
    );
}
