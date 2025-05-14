import { Analytics } from "@/components/analytics/analytics";
import { CreatorTools } from "@/components/analytics/creatorTools";
import { AnalyticsHeader } from "@/components/analytics/header";
import { WeeklySharingCard } from "@/components/analytics/weeklySharing";

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-4 mx-8 my-6 md:mx-16 md:max-w-3/5">
            <AnalyticsHeader />
            <Analytics />
            <WeeklySharingCard />
            <CreatorTools />
        </div>
    )
}