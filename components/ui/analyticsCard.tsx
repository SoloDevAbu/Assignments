interface AnalyticsCardProps {
    total: number
    title: string;
    growth: number;
    description: string;
}

export const AnalyticsCard = ({ total,title, growth, description}: AnalyticsCardProps) => {
    return (
        <div className="px-4 rounded-lg shadow-sm shadow-gray-300 p-4 cursor-pointer hover:bg-gray-200">
            <h1 className="text-xl font-medium">{total}</h1>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-sm text-gray-500"><span className="text-green-800">{growth}% </span>{description}</p>
        </div>
    )
}