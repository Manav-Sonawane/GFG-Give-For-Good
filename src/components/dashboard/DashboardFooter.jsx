export function DashboardFooter() {
    return (
        <footer className="bg-surface-container-low py-20 mt-24 text-center">
            <div className="max-w-7xl mx-auto px-8 flex flex-col items-center space-y-8">
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="GFG Logo" className="w-6 h-6 object-contain" />
                    <h2 className="font-medium text-primary text-xl">GFG | Give For Good</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    <a className="text-primary opacity-60 hover:opacity-100 transition-all font-['Inter'] text-[13px]" href="#">Privacy Policy</a>
                    <a className="text-primary opacity-60 hover:opacity-100 transition-all font-['Inter'] text-[13px]" href="#">Terms of Service</a>
                    <a className="text-primary opacity-60 hover:opacity-100 transition-all font-['Inter'] text-[13px]" href="#">NGO Partners</a>
                    <a className="text-primary opacity-60 hover:opacity-100 transition-all font-['Inter'] text-[13px]" href="#">Contact</a>
                </div>
                <p className="text-primary opacity-60 font-['Inter'] text-[13px] leading-relaxed">© 2024 GFG | Give For Good. All missions reserved.</p>
            </div>
        </footer>
    );
}
