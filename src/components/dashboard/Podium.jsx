export function Podium() {
    return (
        <div className="grid grid-cols-3 gap-6 items-end">
            {/* 2nd Place */}
            <div className="bg-surface-container-low p-8 rounded-2xl flex flex-col items-center text-center space-y-4">
                <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xl text-slate-500">MK</div>
                    <div className="absolute -bottom-2 -right-2 bg-surface-container-highest w-8 h-8 rounded-full flex items-center justify-center border-2 border-surface-container-low font-bold text-xs">2</div>
                </div>
                <div>
                    <h4 className="font-medium text-on-surface">Marcus K.</h4>
                    <p className="text-xs text-on-surface-variant">Berlin, DE</p>
                </div>
                <div className="text-xl font-bold text-primary">12,450</div>
            </div>

            {/* 1st Place */}
            <div className="bg-primary p-10 rounded-2xl flex flex-col items-center text-center space-y-6 transform -translate-y-4 shadow-xl shadow-primary/10">
                <div className="relative">
                    <img className="w-28 h-28 rounded-full border-4 border-primary-fixed shadow-lg object-cover" data-alt="portrait" alt="Elena Vance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIQzR9A5cnAnXDeu9DbNvpNwd3djpJzWnFXgitRXMvfGysyIfLr-uPhCuvd0OUrXtOcoCKmvBdzmx5pVLArab1eRfakOeXHZm4jgzdx881_B2NmrDpJKXRXRqz526tzw1Ib-65FXgopRC6Gn7zkZ3EXpgAqT7O_m6hSdiS_xvuMAf5M6QoI9-k21tJ-Ffy7htdFEtZUhuwhlLTVvY3rOm4p67ubKMhxQn4xRDG3_U05-DuolzDGe8Z6zrWDn0r7LugB17YX_1gaSY" />
                    <div className="absolute -bottom-3 -right-3 bg-secondary text-on-primary w-10 h-10 rounded-full flex items-center justify-center border-4 border-primary font-bold text-sm">1</div>
                </div>
                <div className="text-on-primary">
                    <h4 className="font-bold text-2xl tracking-tight">Elena Vance</h4>
                    <p className="text-sm opacity-80">Geneva, CH</p>
                </div>
                <div className="text-3xl font-extrabold text-primary-fixed">18,920 <span className="text-xs font-normal opacity-70 block mt-1 uppercase tracking-widest text-on-primary">Total Points</span></div>
            </div>

            {/* 3rd Place */}
            <div className="bg-surface-container-low p-8 rounded-2xl flex flex-col items-center text-center space-y-4">
                <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xl text-slate-500">JP</div>
                    <div className="absolute -bottom-2 -right-2 bg-surface-container-highest w-8 h-8 rounded-full flex items-center justify-center border-2 border-surface-container-low font-bold text-xs">3</div>
                </div>
                <div>
                    <h4 className="font-medium text-on-surface">Julian P.</h4>
                    <p className="text-xs text-on-surface-variant">Austin, USA</p>
                </div>
                <div className="text-xl font-bold text-primary">10,800</div>
            </div>
        </div>
    );
}
