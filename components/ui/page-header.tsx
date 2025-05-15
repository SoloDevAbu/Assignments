import { cn } from "@/utils/helpers";
import { BaseComponentProps } from "@/utils/types";
import { LucideIcon } from "lucide-react";

interface PageHeaderProps extends BaseComponentProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  action?: React.ReactNode;
}

export const PageHeader = ({ 
  title,
  subtitle,
  icon: Icon,
  action,
  className,
}: PageHeaderProps) => {
  return (
    <div className={cn(
      "flex items-start justify-between bg-white px-6 py-4 rounded-xl shadow-sm",
      className
    )}>
      <div className="flex items-start gap-4">
        {Icon && (
          <div className="rounded-full p-2 bg-gray-50">
            <Icon className="h-6 w-6 text-gray-500" />
          </div>
        )}
        <div>
          <h1 className="text-xl font-medium">{title}</h1>
          {subtitle && (
            <p className="text-sm text-gray-500">{subtitle}</p>
          )}
        </div>
      </div>
      {action && (
        <div className="flex-shrink-0">
          {action}
        </div>
      )}
    </div>
  );
};
