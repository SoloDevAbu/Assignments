import { AnalyticsCard } from "@/components/ui/analyticsCard"
import { Icons } from "@/utils/icons"
import { cn } from "@/utils/helpers"
import { BaseComponentProps } from "@/utils/types"
import { analyticsData } from "@/utils/mockData";

interface AnalyticsProps extends BaseComponentProps {
  data?: {
    postImpressions: number;
    followers: number;
    profileViews: number;
    searchAppearances: number;
  };
}

export const Analytics = ({ className }: AnalyticsProps) => {

  return (
    <div className={cn(
      "flex flex-col items-start gap-4 bg-white px-6 py-4 rounded-xl shadow-sm",
      className
    )}>
      <div className="flex gap-2 items-center">
        <h1 className="text-xl font-medium">Analytics</h1>
        <Icons.INFO className="text-gray-500 h-5 w-5" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {analyticsData.map((item, index) => (
          <AnalyticsCard
            key={index}
            total={item.total}
            title={item.title}
            growth={item.growth}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  )
}