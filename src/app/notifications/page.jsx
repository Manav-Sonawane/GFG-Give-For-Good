import { SideNavBar } from '@/components/dashboard/SideNavBar';
import { Footer } from '@/components/layout/footer';
import { NotificationItem, NotificationGroup } from '@/components/dashboard/NotificationItem';

export default function NotificationsPage() {
    return (
        <div className="bg-background text-on-surface min-h-screen font-sans">
            <SideNavBar />

            <main className="ml-[220px] min-h-screen flex flex-col">
                {/* Inline Header (search + avatar, no title) */}
                <header className="fixed top-0 left-[220px] right-0 bg-background/80 backdrop-blur-md z-30 flex justify-between items-center px-12 py-6">
                    <div className="flex items-center bg-surface-container-low px-4 py-2 rounded-full w-96">
                        <span className="material-symbols-outlined text-outline mr-2">search</span>
                        <input className="bg-transparent border-none focus:ring-0 text-sm w-full font-['Inter']" placeholder="Search activities..." type="text" />
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="relative text-primary">
                            <span className="material-symbols-outlined text-[28px]">notifications</span>
                            <span className="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full"></span>
                        </button>
                        <div className="flex items-center gap-3">
                            <img
                                alt="Donor Avatar"
                                className="w-10 h-10 rounded-full object-cover border border-surface-container-high"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuArnYsZKG82q09CPP8TUKBUqpLR7o9TuE5c8DQhJ6Bmn_FoZBmxHMitZxeJYnkc2_4bpEsNAieBKIBrZUWdeVz-fSl7rPytPkFybBXsAuQlj53DW1-9KCt9l-DCziUfSy9Huj5dx17vpT-6aymvJrs_OKkrX0KGdDzD6D4KAbP-AKt6nNqpIiPMsN5zXp2RZW6-Kglc7IuhMC3PXtBJNeldfGb13xOMXgaOLUfOtvVCy39MKZnFyHQsP5BIn2qREVDm0kP4EyjCKCM"
                            />
                            <span className="material-symbols-outlined text-outline">account_circle</span>
                        </div>
                    </div>
                </header>

                {/* Notifications Feed */}
                <section className="max-w-[640px] mx-auto py-12 px-6 pt-28 flex-1 w-full">
                    <div className="flex items-baseline justify-between mb-10">
                        <h1 className="text-[2rem] font-medium tracking-tight text-on-surface">Notifications</h1>
                        <button className="text-sm font-medium text-primary hover:opacity-70 transition-opacity">Mark all as read</button>
                    </div>

                    {/* TODAY */}
                    <NotificationGroup title="Today">
                        <NotificationItem
                            icon="handshake"
                            iconBg="bg-amber-50"
                            iconColor="text-amber-700"
                            title="New Potential Match"
                            time="2h ago"
                            description="Green Earth Initiative is looking for exactly what you've offered. View the match details."
                            unread={true}
                        />
                        <NotificationItem
                            icon="check_circle"
                            iconBg="bg-primary-fixed"
                            iconColor="text-primary"
                            title="Donation Accepted"
                            time="5h ago"
                            description="Coastal Cleanups has accepted your donation of 50 reusable water kits."
                            unread={true}
                        />
                    </NotificationGroup>

                    {/* YESTERDAY */}
                    <NotificationGroup title="Yesterday">
                        <NotificationItem
                            icon="stars"
                            iconBg="bg-purple-50"
                            iconColor="text-purple-700"
                            title="Impact Milestone Reached"
                            time="Yesterday"
                            description="You've helped 10 different NGOs this year. You've earned the 'Digital Curator' badge!"
                        />
                        <NotificationItem
                            icon="chat_bubble"
                            iconBg="bg-blue-50"
                            iconColor="text-blue-700"
                            title="New Message from Sarah"
                            time="Yesterday"
                            description={`"Thanks again for the generous contribution to our tech drive..."`}
                        />
                    </NotificationGroup>

                    {/* EARLIER */}
                    <NotificationGroup title="Earlier">
                        <NotificationItem
                            icon="update"
                            iconBg="bg-slate-100"
                            iconColor="text-slate-600"
                            title="Security Update"
                            time="Oct 24"
                            description="Your account password was changed successfully."
                        />
                    </NotificationGroup>
                </section>

                <div className="mt-auto">
                    <Footer />
                </div>
            </main>
        </div>
    );
}
