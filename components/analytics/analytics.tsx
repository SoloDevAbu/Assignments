import { AnalyticsCard } from "@/components/ui/analyticsCard"

export const Analytics = () => {
    return (
        <div className="flex flex-col items-start gap-4 bg-white px-6 py-4 rounded-xl shadow-sm">
            <div className="flex gap-2 items-center">
                <h1 className="text-xl font-medium">Analytics</h1>
                <p> ? </p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
                <AnalyticsCard total={140} title="Post impression" growth={61} description="past 7 days"/>
                <AnalyticsCard total={23} title="Followers" growth={6} description="past 7 days"/>
                <AnalyticsCard total={28} title="Profile viewers" growth={34} description="past 90 days"/>
                <AnalyticsCard total={10} title="Search appearances" growth={5} description="past 7 days"/>
            </div>
        </div>
    )
}