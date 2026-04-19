import { SideNavBar } from '@/components/dashboard/SideNavBar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { ProfileHeader } from '@/components/dashboard/ProfileHeader';
import { AccountSettings } from '@/components/dashboard/AccountSettings';
import { OrganisationDetails } from '@/components/dashboard/OrganisationDetails';
import { NotificationSettings } from '@/components/dashboard/NotificationSettings';
import { DangerZone, SupportCard } from '@/components/dashboard/SettingsSidebar';
import { Footer } from '@/components/layout/footer';

export default function SettingsPage() {
    return (
        <div className="bg-background text-on-surface min-h-screen font-sans">
            <SideNavBar />
            <DashboardHeader
                searchPlaceholder="Search NGO, impact, or donations..."
            />

            <main className="ml-[220px] pt-32 pb-20 px-12 max-w-6xl">
                <ProfileHeader />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Left column */}
                    <div className="md:col-span-7 space-y-8">
                        <AccountSettings />
                        <OrganisationDetails />
                    </div>

                    {/* Right column */}
                    <div className="md:col-span-5 space-y-8">
                        <NotificationSettings />
                        <DangerZone />
                        <SupportCard />
                    </div>
                </div>
            </main>

            <div className="ml-[220px]">
                <Footer />
            </div>
        </div>
    );
}
