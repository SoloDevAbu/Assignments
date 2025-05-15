import { AnalyticsCardProps } from "@/utils/types";
import { formatNumber, cn } from "@/utils/helpers";

export const AnalyticsCard = ({ 
  total,
  title,
  growth,
  description,
  icon: Icon,
  className
}: AnalyticsCardProps) => {
  const isPositiveGrowth = growth >= 0;
  
  return (
    <div className={cn(
      "px-4 rounded-lg shadow-sm shadow-gray-300 p-4",
      "cursor-pointer hover:bg-gray-50 transition-colors duration-200",
      "flex flex-col gap-2",
      className
    )}>
      <div className="flex items-center gap-2">
        {Icon && <Icon className="h-5 w-5 text-gray-500" />}
        <h2 className="text-xl font-medium">{formatNumber(total)}</h2>
      </div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-sm text-gray-500">
        <span className={cn(
          "font-medium",
          isPositiveGrowth ? "text-green-600" : "text-red-600"
        )}>
          {isPositiveGrowth ? "+" : ""}{growth}%
        </span>
        {" "}{description}
      </p>
    </div>
  )
}