export const WeeklySharingCard = () => {
    return (
        <div className="flex flex-col items-start gap-4 bg-white px-6 py-4 rounded-xl shadow-sm">
            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-medium">Weekly sharing tracker</h1>
                <p className="text-sm text-gray-500">Increase you visibility by posting or commenting.We suggest taking <span className="text-black font-medium">3 actions every week</span></p>
            </div>
            <div className="border-b border-gray-300 w-full"></div>
        </div>
    )
}